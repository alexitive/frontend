import { AxiosResponse } from 'axios';
import { joinQueryUrl, toFormdata } from '../utils';
import { request } from './request';

// 登录相关
/** 登录接口 POST /misback/login */
export async function login(body: API.ILoginParams): Promise<AxiosResponse<API.ILoginResult>> {
  return request.post('/misback/login/', toFormdata(body));
}

/** 登出接口 POST /misback/logout/ */
export async function logout(): Promise<AxiosResponse<API.IResult>> {
  return request.post('/misback/logout/');
}

/** 获取当前用户信息接口 GET /api/misback/now-user/ */
export async function fetchNowUser(): Promise<AxiosResponse<API.INowUserResult>> {
  return request.get('/misback/now-user/');
}
