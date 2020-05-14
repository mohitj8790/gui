import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return(
           <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Customer</Menu.Item>
                    <Menu.Item key="3">Profile</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ padding: 24, minHeight: 500 }}>{props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Design ©2018 Created by Mohit</Footer>
            </Layout>
    );
}


export default CustomLayout;

