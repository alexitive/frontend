import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '@ant-design/pro-form/dist/form.css';
import '@ant-design/pro-layout/dist/layout.css'
import { Card, Col, Layout, Row } from 'antd';
import CustomFooter from './pages/layout/CustomFooter'
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Admin from './pages/Admin'
import Login from './pages/login/Login'
import Register from './pages/login/Register';
import CustomLayout from './pages/layout/CustomLayout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/'  element={<Login />} />
        <Route path='/login' element={<Navigate to={'/'} />} />
        <Route path='/admin' element={<Admin />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/layout' element={<CustomLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
