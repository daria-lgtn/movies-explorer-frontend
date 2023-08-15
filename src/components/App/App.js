import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { CurrentUser } from "../../contexts/CurrentUserContext";
import { RouteProtected } from "../RouteProtected/RouteProtected";

export function App() {
  return (
    <CurrentUser>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
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
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUser>
  );
}
