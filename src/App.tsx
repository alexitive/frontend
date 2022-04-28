import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ant-design/pro-form/dist/form.css';
import '@ant-design/pro-layout/dist/layout.css'
import { Card, Col, Layout, Row } from 'antd';
import CustomFooter from './pages/layout/CustomFooter'
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Admin from './pages/Admin'
import Login from './pages/Login'
function App() {
  return (
    
    <Layout>
      <Login/>      
      {/* <Admin/> */}
    </Layout>
  );
}

export default App;
