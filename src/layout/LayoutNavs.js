import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";

const layoutNavs = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
    path: ROUTE_CONSTANTS.DASHBOARD,
    header: "Attendance",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Projects",
    path: ROUTE_CONSTANTS.PROJECT,
    header: "Attendance",
  },
  {
    key: "3",
    icon: <HomeOutlined />,
    label: "SalaryDetails",
    path: ROUTE_CONSTANTS.DASHBOARD,
    header: "Salary",
  },
  {
    key: "4",
    icon: <UserOutlined />,
    label: "Payroll",
    path: ROUTE_CONSTANTS.PROJECT,
    header: "Salary",
  },
  {
    key: "5",
    icon: <HomeOutlined />,
    label: "EmpAttendance",
    path: ROUTE_CONSTANTS.EMPATTENDANCE,
    header: "Attendance",
  },
  {
    key: "6",
    icon: <UserOutlined />,
    label: "TodayAttendance",
    path: ROUTE_CONSTANTS.TODAYATTENDANCE,
    header: "Attendance",
  },
  {
    key: "7",
    icon: <UserOutlined />,
    label: "AttendanceSheet",
    path: ROUTE_CONSTANTS.ATTENDANCESHEET,
    header: "Attendance",
  },
];

export default layoutNavs;
