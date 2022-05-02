import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import CustomLayout from './CustomLayout';
import { message } from 'antd';
import { Query } from '../query/Query';
import UserDetail from '../user/UserDetail';

export default function Dispatcher() {
  return (
    <CustomLayout>
      <Routes>
        <Route path='/userdetail' element={<UserDetail />} />
        <Route path='/query' element={<Query />} />
        <Route path='*' element={
        <>
          <div>
            欢迎使用
          </div>
        </>
        }/>
      </Routes>
    </CustomLayout>
  );
}
