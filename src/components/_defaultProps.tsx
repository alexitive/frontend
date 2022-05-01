import React from 'react';
import { CrownOutlined, AntDesignOutlined, DotChartOutlined, PieChartOutlined } from '@ant-design/icons';
import { Components } from 'antd/lib/date-picker/generatePicker';

export default {
  route: {
    path: '/admin',
    routes: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DotChartOutlined />,
        component: './login',
        routes: [
          {
            path: '/query',
            name: '引擎搜索',
            icon: <PieChartOutlined />,
            component: '/',
          }
        ]
      },
      {
        path: '/admin',
        name: '用户管理',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './Admin',
      },
      // {
      //   path: 'https://ant.design',
      //   name: 'Ant Design 官网外链',
      //   icon: <AntDesignOutlined />,
      // },
    ],
  },
  location: {
    pathname: '/',
  },
};