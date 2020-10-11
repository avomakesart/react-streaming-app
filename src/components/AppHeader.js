import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Streamy</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">All Streams</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <GoogleAuth />
        </Menu.Item>
      </Menu>
    </Header>
  );
};
