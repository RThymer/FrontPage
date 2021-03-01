import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import router from "../config/router";

import "./BasicLayout.css";

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    const { Sider, Content } = Layout;

    return (
      <Layout>
        <Sider
          theme="light"
          breakpoint="xs"
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed) => this.setState({ collapsed })}
        >
          <div className="layout-header">
            <span className="layout-header-title">
              {collapsed ? "Home" : "RThymer's Home"}
            </span>
            <Menu theme="light" mode="inline">
              {router.map((route) => (
                <Menu.Item>
                  <Link to={route.path}>
                    <div className="layout-nav-item">
                      <route.icon />
                      {!collapsed && <div>{route.name}</div>}
                    </div>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Sider>
        <Content>
          <div className="layout-body-content">{children}</div>
        </Content>
      </Layout>
    );
  }
}

export default BasicLayout;
