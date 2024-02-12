import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "../pages/Home";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Dashboard from "../pages/Dashboard/index";
import Project from "../pages/Projects/index";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
import PrivateRoute from "../PrivateRoute";
import AttendanceSheet from "../pages/Attendence/AttendanceSheet";
import EmpAttendance from "../pages/Attendence/EmpAttendance";
import TodayAttendance from "../pages/Attendence/TodayAttendance";

const routes = [
  {
    path: ROUTE_CONSTANTS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_CONSTANTS.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTE_CONSTANTS.PROJECT,
        element: <Project />,
      },
      {
        path: ROUTE_CONSTANTS.ATTENDANCESHEET,
        element: <AttendanceSheet />,
      },
      {
        path: ROUTE_CONSTANTS.EMPATTENDANCE,
        element: <EmpAttendance />,
      },
      {
        path: ROUTE_CONSTANTS.TODAYATTENDANCE,
        element: <TodayAttendance />,
      },
    ],
  },
];

function Routes() {
  const content = useRoutes(routes);
  return content;
}

export default Routes;
