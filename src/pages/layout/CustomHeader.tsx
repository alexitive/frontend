import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import './CustomHeader.css'

export default function CustomHeader() {

  const navigate = useNavigate();
  const userName = sessionStorage.getItem('name') ?? 'unknow';

  const handleMenuClick = () => {
    sessionStorage.clear();
    navigate('/login', {replace: true});
  }

  const dropdownMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="custom-header">
      <div className="icon-box">
        <img src={require('../../assests/logo192.png')} className="logo" />
        基于知识图谱的电影信息管理系统
      </div>
      <Menu theme="dark" mode="horizontal"></Menu>
      <Dropdown.Button
        className="dropdown"
        overlay={dropdownMenu}
        placement="bottomRight"
        icon={<DownOutlined />}
        onClick={() => navigate('user/user-setting', { replace: true })}
      >
        {userName ?? '未知用户'}
      </Dropdown.Button>
    </Header>
  )


}