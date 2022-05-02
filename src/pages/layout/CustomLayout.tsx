import React, { ReactElement } from 'react';
import { Input, Layout } from 'antd';

// import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';
import CustomFooter from './CustomFooter';
import { Query } from '../query/Query';
import UserDetail from '../user/UserDetail';
import { Header } from 'antd/lib/layout/layout';
import CustomHeader from './CustomHeader';
import './CustomLayout.css'

// import CustomHeader from './CustomHeader';

const { Content } = Layout;

// export default function CustomLayout(props: { children: ReactElement }) {
export default function CustomLayout() {
  return (
    <Layout>
      <CustomHeader />
      {/* <Layout className='site-layout' style={{ padding: '0 24px 24px' }}> */}
      <Layout className='site-layout'>
        <CustomSider />
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580
            }}
          >
            {/* {props.children} */}
            {/* <Query /> */}
            {/* <UserManage /> */}
            <UserDetail />
          </Content>
          <CustomFooter />
        </Layout>
      </Layout>
    </Layout>
  );
}
