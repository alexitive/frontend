import { LoginForm, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { message, Tabs, Space } from 'antd';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import CustomFooter from './layout/CustomFooter';

// import './Login.css'

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');

  return (
    <div className='container'>
      <div className={'content'}>
        <div style={{ backgroundColor: 'white' }}>
          <LoginForm
            // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="基于知识图谱的电影信息管理系统"
            subTitle="  "
            // actions={
            //   <Space>
            //     其他登录方式
            //     <AlipayCircleOutlined style={iconStyles} />
            //     <TaobaoCircleOutlined style={iconStyles} />
            //     <WeiboCircleOutlined style={iconStyles} />
            //   </Space>
            // }
          >
            <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
              {/* <Tabs.TabPane key={'account'} tab={'账号密码登录'} /> */}
              {/* <Tabs.TabPane key={'phone'} tab={'手机号登录'} /> */}
            </Tabs>
            {loginType === 'account' && (
              <>
                <ProFormText
                  name="username"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'username'}
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名!',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'password'}
                  rules={[
                    {
                      required: true,
                      message: '请输入密码！',
                    },
                  ]}
                />
              </>
            )}

            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              {/* <a
                style={{
                  float: 'right',
                }}
              >
                忘记密码
              </a> */}
            </div>
          </LoginForm>
        </div>
      </div>
      <CustomFooter />
    </div>

  );
};