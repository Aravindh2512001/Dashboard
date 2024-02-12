import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import layoutNavs from "./LayoutNavs"; // Assuming layoutNavs is imported correctly
import { useLocation, useNavigate } from "react-router-dom";
import { LOCAL_CONSTANTS } from "../constants/localConstants";

const { Sider } = Layout;

function MainLayoutSidebar({ collapsed, setCollapsed }) {
  const [selectedNav, setSelectedNav] = useState(() => {
    return localStorage.getItem(LOCAL_CONSTANTS.APP_NAV) || null;
  });
  const [appNav, setAppNav] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [expandedHeaders, setExpandedHeaders] = useState({});

  // Fetch and set up navigation data
  useEffect(() => {
    updateAppNavBar();
  }, []);

  // Update selected navigation based on current pathname
  useEffect(() => {
    let selected;
    appNav.forEach((doc) => {
      if (!selected) {
        if (Array.isArray(doc.children)) {
          selected = doc.children.find((item) => item.path === pathname);
        } else if (doc.path === pathname) {
          selected = doc;
        }
      }
    });
    if (selected) setSelectedNav(selected.key);
  }, [pathname, appNav]);

  // Handle navigation item selection
  const handleSelect = (e) => {
    const key = e?.key;
    const selectedNavItem = layoutNavs.find((nav) => nav.key === key);
    if (selectedNavItem && selectedNavItem.path) {
      setSelectedNav(selectedNavItem.path);
      navigate(selectedNavItem.path);
    }
  };

  // Update navigation bar based on available navigation items
  const updateAppNavBar = () => {
    const availableNavs = layoutNavs.map((nav) => {
      return {
        ...nav,
        selected: nav.path === pathname,
      };
    });
    setAppNav(availableNavs);
  };

  // Toggle expansion state of a header
  const toggleHeader = (header) => {
    setExpandedHeaders((prevState) => ({
      ...prevState,
      [header]: !prevState[header],
    }));
  };

  // Group navigation items by headers
  const groupedNavs = appNav.reduce((acc, nav) => {
    if (!acc[nav.header]) {
      acc[nav.header] = [];
    }
    acc[nav.header].push(nav);
    return acc;
  }, {});

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="p-3 flex justify-center">
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedNav]}
        onClick={handleSelect}
      >
        {Object.entries(groupedNavs).map(([header, navItems]) => (
          <React.Fragment key={header}>
            <Menu.Item key={header} onClick={() => toggleHeader(header)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5>{header}</h5>
                <span>
                  {expandedHeaders[header] ? (
                    <i className="fi fi-rr-angle-small-up"></i>
                  ) : (
                    <i className="fi fi-rr-angle-small-down"></i>
                  )}
                </span>
              </div>
            </Menu.Item>
            {expandedHeaders[header] &&
              navItems.map((nav) => (
                <Menu.Item key={nav.key} icon={nav.icon}>
                  {nav.label}
                </Menu.Item>
              ))}
          </React.Fragment>
        ))}
      </Menu>
    </Sider>
  );
}

MainLayoutSidebar.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

export default MainLayoutSidebar;
