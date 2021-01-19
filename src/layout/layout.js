import React from "react";
import { Layout as BasicLayout } from 'antd';

const { Header, Content } = BasicLayout;

class Layout extends React.PureComponent {

    render() {
        const { children } = this.props;
        return (
            <BasicLayout>
                <Header>RThymer's Here</Header>
                <Content>{children}</Content>
            </BasicLayout>
        )
    }
}

export default Layout;