import { LoginForm, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { message, Tabs, Space, Alert } from 'antd';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import CustomFooter from '../layout/CustomFooter';

import './Login.css'
import { defaultLoginResult } from './constant'
import {  fetchUsers, login } from '../../api/api'
import { useNavigate } from 'react-router-dom';
import MyAlert from '../Alert'

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

interface LoginObj {
  username: string;
  password: string;
  autoLogin: boolean;
}




export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const [loginResult, setLoginResult] = useState<API.ILoginResult>(defaultLoginResult); // 返回结果，初始化
  const navigate = useNavigate();

  
  const handleSubmit =async (values:LoginObj) => { // 与后端进行交互
    console.log(values);
    try {
      const msg = await login({ username: values.username, password: values.password });
      console.log(msg);
      setLoginResult(msg.data);
      console.log(msg.data.token);
      if(msg.data.token === 1) {
        console.log('登录成功');
        message.success('登录成功'); // 全局通知
        navigate('/admin', {replace: true}); // 登录成功，重定向
        return ;
      }
    } catch (error) {
      message.error('登录失败，请重试！');
      console.log('login error', error);
    }
  
  }

  return (

    <div className='container'>
      <div className='content'>
        <div>       
          <LoginForm
            // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="基于知识图谱的电影信息管理系统"
            subTitle="  "
            initialValues={{ autoLogin: true }}
            // actions={
            //   <Space>
            //     其他登录方式
            //     <AlipayCircleOutlined style={iconStyles} />
            //     <TaobaoCircleOutlined style={iconStyles} />
            //     <WeiboCircleOutlined style={iconStyles} />
            //   </Space>
            // }
            onFinish={async (values: LoginObj) => { // 点击 登录 执行回调函数取值
              await handleSubmit(values);
            }}
          >
            <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
              {/* <Tabs.TabPane key={'account'} tab={'账号密码登录'} /> */}
              {/* <Tabs.TabPane key={'phone'} tab={'手机号登录'} /> */}
            </Tabs>
            {loginResult.token === 0 && loginType === 'account' && <MyAlert />}
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
              <a
                style={{
                  float: 'right',
                }}
              >
                注册
              </a>
            </div>
          </LoginForm>
          
        </div>
      </div>
      <CustomFooter />
    </div>

  );
};

function async(): ((formData: Record<string, any>) => Promise<boolean | void>) | undefined {
  throw new Error('Function not implemented.');
}
