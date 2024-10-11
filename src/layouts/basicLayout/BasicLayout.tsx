import React, { useState } from "react";
import { Redirect } from "react-router";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import Logo from "@/assets/siemens_logo.png";

import { Layout } from "antd";
import { AppMenu } from "./AppMenu";
const { Header, Sider, Content } = Layout;

export const BasicLayout = (props: RouteConfigComponentProps) => {
  const { route } = props;
  const [collapsed, setCollapsed] = useState(false);

  if (!route) {
    return <Redirect to={"/"} />;
  }

  // if (location.pathname === match.path) {
  //   const firstRoute = route!.routes?.[0];
  //   const firstPath = firstRoute?.path || "/";
  //   return <Redirect to={firstPath} />;
  // }

  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{ padding: "20px 0", textAlign: "center" }}
        >
          <img src={Logo} alt="logo" />
        </div>
        <AppMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          {renderRoutes(route!.routes)}
        </Content>
      </Layout>
    </Layout>
  );
};
