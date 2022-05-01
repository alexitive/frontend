import React, { ReactElement } from 'react';
import { Layout } from 'antd';

// import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';
import CustomFooter from './CustomFooter';

const { Content } = Layout;

// export default function CustomLayout(props: { children: ReactElement }) {
  export default function CustomLayout() {
  return (
      <Layout>
        <CustomSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580
            }}
          >
            {/* {props.children} */}
          </Content>
          <CustomFooter />
        </Layout>
      </Layout>
  );
}
