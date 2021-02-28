import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import router from "../config/router";

import "./BasicLayout.css";

class BasicLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    const { Sider, Content } = Layout;

    return (
      <Layout>
        <Sider theme="light">
          <div className="layout-header">
            <span className="layout-header-title">RThymer's Here</span>
            <Menu theme="light" mode="vertical">
              {router.map((route) => (
                <Menu.Item>
                  <Link to={route.path}>{route.name}</Link>
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
