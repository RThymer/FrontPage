import React from "react";
import { Layout, Menu } from "antd";
import { createHashHistory } from "history";

import "./BasicLayout.css";

class BasicLayout extends React.PureComponent {
  hrefs = [
    { title: "About", href: "/about" },
    { title: "Product", href: "/product" },
  ];

  render() {
    const { children } = this.props;
    const { Header, Content } = Layout;
    const history = createHashHistory();

    return (
      <Layout>
        <Header>
          <div className="layout-header">
            <span className="layout-header-title">RThymer's Here</span>
            <Menu theme="dark" mode="horizontal">
              {this.hrefs.map((menu) => (
                <Menu.Item
                  onClick={() => {
                    history.push(menu.href);
                  }}
                >
                  {menu.title}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Header>
        <Content>
          <div className="layout-body-content">{children}</div>
        </Content>
      </Layout>
    );
  }
}

export default BasicLayout;
