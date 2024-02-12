import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ErrorRoute from "../component/common/ErrorRoute";
import Loader from "../component/common/Loader";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
import MainLayout from "../layout/MainLayout";

function PrivateRoute() {
  const isAuth = true;
  const isPermit = true;
  console.log("ispermit", isPermit);
  if (!isAuth) {
    return <Navigate to={ROUTE_CONSTANTS.HOME} />;
  }

  return isPermit ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <ErrorRoute />
  );
}

export default PrivateRoute;
