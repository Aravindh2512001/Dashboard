import React, { useState } from "react";
// import "../assets/styles/main.css";
import {
  Layout,
  Badge,
  Button,
  Flex,
  Dropdown,
  Popover,
  Space,
  Divider,
  Menu,
} from "antd";
import {
  BellOutlined,
  UserOutlined,
  // MailOutlined,
  // SettingOutlined,
  LogoutOutlined,
  MailTwoTone,
  ClockCircleOutlined,
  UserAddOutlined,
  FilePdfTwoTone,
  DollarTwoTone,
  MessageTwoTone,
  CarryOutTwoTone,
  CoffeeOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
// import { imageFallBack } from "../constants/appConstants";
const { Header } = Layout;

const notifications = [
  {
    type: "mail",
    content: "Please Check Your Mail",
    time: "14 mins ago",
  },
  {
    type: "employee",
    content: "New Employee Added",
    time: "22 mins ago",
  },
  {
    type: "schedule",
    content: "Your Leave is approved!!!",
    time: "3 hours ago",
  },
  {
    type: "food",
    content: "Lets break for lunch",
    time: "14 mins ago",
  },
  {
    type: "report",
    content: "Employee report generated",
    time: "14 mins ago",
  },
  {
    type: "mail",
    content: "Please Check Your Mail",
    time: "22 mins ago",
  },
  {
    type: "salary",
    content: "salary credited",
    time: "14 mins ago",
  },
];
function MainLayoutHeader() {
  const user = useSelector((state) => state.application.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNotificationPopover = (newOpen) => {
    setOpen(newOpen);
  };
  const userMenu = [
    {
      label: "Account",
      key: 1,
      icon: <UserOutlined />,
      onClick: () => {
        navigate(`/myaccount`);
      },
    },
    // {
    //   label: "Inbox",
    //   key: 2,
    //   icon: <MailOutlined />,
    // },
    // {
    //   label: "Settings",
    //   key: 3,
    //   icon: <SettingOutlined />,
    // },
    {
      label: "Logout",
      key: 4,
      icon: <LogoutOutlined />,
    },
  ];
  const renderNotificationIcon = (type) => {
    switch (type) {
      case "mail":
        return <MailTwoTone twoToneColor="#52c41a" className="text-xl mr-5" />;
      case "employee":
        return <UserAddOutlined className="text-xl text-[#3b82f6] mr-5" />;
      case "schedule":
        return (
          <CarryOutTwoTone twoToneColor="#facc15" className="text-xl mr-5" />
        );
      case "food":
        return <CoffeeOutlined className="text-xl mr-5 text-[#3b82f6]" />;
      case "report":
        return (
          <FilePdfTwoTone twoToneColor="#52c41a" className="text-xl mr-5" />
        );
      case "salary":
        return (
          <DollarTwoTone twoToneColor="#a855f7" className="text-xl mr-5" />
        );
      default:
        return <MessageTwoTone className="text-xl mr-5" />;
    }
  };

  const handleSelect = ({ key }) => {
    if (key == "4") {
      localStorage.clear();
      window.location.href = ROUTE_CONSTANTS.HOME;
    }
  };
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <Header className="p-0 bg-white flex items-center justify-end sticky top-0 z-[13]">
      <Flex gap={5} align="center">
        <Button
          type="text"
          shape="circle"
          size="large"
          className="flex justify-center items-center"
          onClick={toggleFullscreen}
        >
          <FullscreenOutlined />
        </Button>
        <Popover
          className="hidden"
          content={
            <Space.Compact
              direction="vertical"
              className="notification-popover"
            >
              <Space className="p-5 flex justify-between  items-center w-full bg-[#7366ff] text-white">
                <span className="text-xl font-bold">Notifications</span>
                <span className="font-semibold text-xs">Mark all as read</span>
              </Space>
              <Space.Compact
                className="w-[325px] max-h-[420px]  ml-2 overflow-y-auto overflow-x-hidden "
                direction="vertical"
              >
                {notifications.map((notification, i) => (
                  <div key={i}>
                    <Space
                      align="middle"
                      className="flex  items-center w-[325px] p-3 hover:bg-[#f0f9ff]"
                    >
                      <Space>{renderNotificationIcon(notification.type)}</Space>
                      <Space.Compact direction="vertical" className="w-52 mr-1">
                        <Space className="font-medium">
                          {notification.content}
                        </Space>
                        <Space>
                          <ClockCircleOutlined className="text-xs text-gray-400" />
                          <span className="text-xs text-[#9ca3af]">
                            {notification.time}
                          </span>
                        </Space>
                      </Space.Compact>
                      <Space>x</Space>
                    </Space>
                    <Divider className="m-1" />
                  </div>
                ))}
              </Space.Compact>
              <div className="flex justify-center items-center font-medium text-zinc-500 mb-2">
                <p>Read All Notifications</p>
              </div>
            </Space.Compact>
          }
          trigger="click"
          open={open}
          onOpenChange={handleNotificationPopover}
        >
          <Button
            type="text"
            shape="circle"
            size="large"
            className="flex items-center justify-center"
          >
            <Badge dot="true" offset={[-5, 1]} color="orange">
              <BellOutlined className="text-xl leading-[0px]" />
            </Badge>
          </Button>
        </Popover>
        <Dropdown
          overlay={
            <Menu onClick={handleSelect} className="w-28">
              {userMenu.map((item) =>
                !item.hidden ? (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Menu.Item>
                ) : null
              )}
            </Menu>
          }
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button
            type="text"
            className="align-middle font-medium tracking-wider text-[15px] flex items-center justify-center"
            size="large"
          >
            {user?.firstName || ""} {user?.lastName || ""}
            {/* <img
              className="rounded-full h-[30px] w-[30px] object-cover ml-2.5"
              src={
                user?.meta?.profile?.url ? user.meta.profile.url : imageFallBack
              }
              alt="profile"
            /> */}
          </Button>
        </Dropdown>
      </Flex>
    </Header>
  );
}

export default MainLayoutHeader;
