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
import { defaultLoginResult, defaultRegisterResult } from './constant'
import {  fetchUsers, login, register } from '../../api/api'
import { useNavigate } from 'react-router-dom';
import MyAlert from '../Alert'
import { API } from '../../api/typings';

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
  const [registerResult, setRegisterResult] = useState<API.IRegisterResult>(defaultRegisterResult); // 返回结果，初始化
  const navigate = useNavigate(); // 组件内路由函数

  
  const handleSubmit =async (values:LoginObj) => { // 与后端进行交互
    console.log(values);
    try {
      const msg = await register({ username: values.username, password: values.password }); // 异步通信
      console.log(msg);
      setRegisterResult(msg.data); // response{header,data,...} data={data,token..(自己定义的)}
      console.log(msg.data.token);
      if(msg.data.token === 1) {
        console.log('注册成功');
        message.success('注册成功,请登录'); // 全局通知
        navigate('/login', {replace: true}); // 注册成功，重定向
        return ;
      }
      else if(msg.data.token === 0){
        message.error('用户已存在，请重试');
      }
    } catch (error) {
      message.error('注册失败，请重试！');
      console.log('register error', error);
    }
  
  }

  return (

    <div className='container'>
      <div className='content'>
        <div>       
          <LoginForm
            // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="用户注册"
            subTitle=" "
            submitter ={{
              searchConfig:{
                submitText: '注册'
               
              },
              // submitButtonProps:{
              //   style:{
              //     width:'100%'
              //   }
              // },
              resetButtonProps:false,
            }}
            initialValues={{ autoLogin: true }}
            onFinish={async (values: LoginObj) => { // 点击 注册 执行回调函数取值
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
            <div>
              <div onClick={() => {navigate('/')}}  style={{marginBottom: '1px'}}>
                <a
                  style={{
                    float: 'right',
                  }}
                >
                  返回登录
                </a>
              </div>
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
