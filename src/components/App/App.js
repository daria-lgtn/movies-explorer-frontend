import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { RouteProtected } from "../RouteProtected/RouteProtected";
import { Preloader } from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";
import { JWT } from "../../utils/constants";

export function App() {
  const [me, setMe] = React.useState(null);
  const [validated, setValidated] = React.useState(false);

  React.useEffect(() => {
    const jwt = localStorage.getItem(JWT);
    if (jwt) {
      handleTokenCheck(jwt);
    } else {
      setValidated(true);
    }
  }, []);

  const handleTokenCheck = (jwt) => {
    return mainApi
      .me(jwt)
      .then((res) => {
        if (res) {
          setMe(res.data);
          setValidated(true);
          localStorage.setItem(JWT, jwt);
        }
      })
      .catch((error) => {
        setValidated(true);
        console.log(error);
      });
  };

  const handleLogin = (data) => {
    return mainApi.signIn(data).then((data) => {
      return handleTokenCheck(data.token);
    });
  };

  const handleRegister = (data) => {
    return mainApi.signUp(data).then((data) => {
      return handleTokenCheck(data.token);
    });
  };

  const handleUpdate = (data) => {
    return mainApi.update(data).then((data) => {
      setMe(data.data);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    setMe(null);
  };

  if (!validated) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={me}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="*"
          element={
            <RouteProtected>
              <Outlet />
            </RouteProtected>
          }
        >
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route
            path="profile"
            element={
              <Profile
                handleLogout={handleLogout}
                handleUpdate={handleUpdate}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegister} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}
