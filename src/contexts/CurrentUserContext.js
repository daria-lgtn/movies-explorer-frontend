import React from "react";
import { useNavigate } from "react-router";
import { Preloader } from "../components/Preloader/Preloader";
import { mainApi } from "../utils/MainApi";

export const CurrentUserContext = React.createContext();

export function CurrentUser(props) {
  const navigate = useNavigate();
  const [me, setMe] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
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
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        setValidated(true);
        console.log(error);
      });
  };

  const handleLogin = (data) => {
    return mainApi.signIn(data).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        handleTokenCheck(data.token).then(() => {
          navigate("/movies", { replace: true });
        });
      }
    });
  };

  const handleUpdate = (data) => {
    return mainApi.update(data).then((data) => {
      setMe(data.data);
    });
  };

  const handleRegister = (data) => {
    return mainApi.signUp(data).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        handleTokenCheck(data.token).then(() => {
          navigate("/movies", { replace: true });
        });
      }
    });
  };

  const context = {
    me,
    loggedIn,
    handleUpdate,
    handleLogin,
    handleRegister,
    handleLogout,
  };

  if (!validated) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={context}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}
