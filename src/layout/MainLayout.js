import React, { useState } from "react";
import { Layout } from "antd";
import MainLayoutSidebar from "./MainLayoutSidebar";
import PropTypes from "prop-types";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainLayoutSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        fixed
      />
      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 80 : 200 }}
      >
        <Content
          style={{
            // margin: '24px 16px 0',
            padding: 24,
            minHeight: 360,
            marginLeft: collapsed ? 0 : 0,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
