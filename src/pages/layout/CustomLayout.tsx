import React, { ReactElement } from 'react';
import { Input, Layout } from 'antd';

// import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';
import CustomFooter from './CustomFooter';
import { Query } from '../query/Query';
// import CustomHeader from './CustomHeader';

const { Content } = Layout;

// export default function CustomLayout(props: { children: ReactElement }) {
  export default function CustomLayout() {
  return (
      <Layout>
        {/* <CustomHeader /> */}
        <CustomSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 570
            }}
          >
            {/* {props.children} */}
            <Query />
          </Content>
          <CustomFooter />
        </Layout>
      </Layout>
  );
}
