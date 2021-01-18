import React from "react";
import { Layout } from 'antd';

class BasicLayout extends React.PureComponent {

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const { children } = this.props;
    return (
      <Layout>
        <Header>RThymer's Here</Header>
        <Content>{children}</Content>
      </Layout>
    );
  }
}

export default BasicLayout;
