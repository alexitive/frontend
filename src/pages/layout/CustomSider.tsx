import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  SettingOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import './CustomSider.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function CustomSider() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectedOpenKeys, setSelectedOpenKeys] = useState<string[]>([]);
  const location = useLocation();

  const onCollapse = (nowCollapsed: boolean) => setCollapsed(nowCollapsed);

  const onSubMenuClick = ({ key }: { key: string }) => {
    if (selectedOpenKeys.includes(key)) {
      setSelectedOpenKeys((nowKeys: string[]) => nowKeys.filter((nowKey: string) => nowKey !== key));
    } else {
      setSelectedOpenKeys((nowKeys: string[]) => [...nowKeys, key]);
    }
  };

  useEffect(() => {
    const paths = location.pathname.split('/');

    if (paths.length < 1) return;
    setSelectedKeys([paths[paths.length - 1]]);

    if (paths.length < 2) return;
    setSelectedOpenKeys((nowKeys: string[]) => [...nowKeys, paths[paths.length - 2]]);
  }, [location.pathname]);

  return (
    <Sider className="custom-sider" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {/* <div className='logo'></div> */}
      <Menu theme="dark" mode="inline" className="custom-menu" selectedKeys={selectedKeys} openKeys={selectedOpenKeys}
      >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/query">KGQA</Link> 
        {/* 路由 */}
      </Menu.Item>
      <Menu.Item key="user-manage" icon={<TeamOutlined />}>
        <Link to="/userdetail">用户</Link>
      </Menu.Item>
    </Menu>
    </Sider >
  );
}
