import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../containers/Layout/Layout.tsx";
import Login from "../containers/Auth/Login/Login.tsx";
import Home from "../containers/Home/Home.tsx";
import Employees from "../containers/Employees/Employees.tsx";
import UsersList from "../containers/Users/usersList.tsx";
import { ROUTE_PATHS } from "../utils/RoutePaths.ts";

const AppRoutes = () => {
  const data = localStorage.getItem('user');
  let isAuth = data ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_PATHS.login}
          element={!isAuth ? <Login /> : <Navigate to={ROUTE_PATHS.home} />}
        />

        <Route
          element={isAuth ? <Layout /> : <Navigate to={ROUTE_PATHS.login} />}
        >

          <Route path={ROUTE_PATHS.home}>
            <Route index element={<Home />} />
          </Route>

          <Route path={ROUTE_PATHS.users}>
            <Route index element={<UsersList />} />
          </Route>

          <Route path={ROUTE_PATHS.employees}>
            <Route index element={<Employees />} />
          </Route>
        </Route>

        <Route path={"*"} element={<Navigate to={ROUTE_PATHS.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
