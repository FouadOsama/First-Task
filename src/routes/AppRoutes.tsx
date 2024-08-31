import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../containers/Layout/Layout.tsx";
import { ROUTE_PATHS } from "../utils/RoutePaths.ts";
import Login from "../containers/Auth/Login/Login.tsx";
import AddBook from "../containers/AddBook/AddBook.tsx";
import ListBooks from "../containers/ListBooks/ListBooks.tsx";

const AppRoutes = () => {
  // const data = localStorage.getItem('user');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem("user") ? true : false);
    console.log(isAuth);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            !isAuth ? (
              <Login />
            ) : (
              <Navigate to={ROUTE_PATHS.booksList} replace />
            )
          }
        >
          <Route index path={ROUTE_PATHS.login} element={<Login />} />
        </Route>

        <Route
          element={
            isAuth ? <Layout /> : <Navigate to={ROUTE_PATHS.login} replace />
          }
        >
          <Route path={ROUTE_PATHS.booksList}>
            <Route index element={<ListBooks />} />
          </Route>

          <Route path={ROUTE_PATHS.addBook}>
            <Route index element={<AddBook />} />
          </Route>
          <Route path={"*"} element={<Navigate to={ROUTE_PATHS.booksList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
