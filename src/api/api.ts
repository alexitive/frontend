import { AxiosResponse } from 'axios';
import { joinQueryUrl, toFormdata } from '../utils/utils';
import { request } from './request';

// 登录相关
/** 登录接口 GET /user/login */
/**
 * 
 * @param body 组成url的结构体，具体在API.ILoginParams中定义
 * @returns 返回请求的结果，具体在API.ILoginResult中定义
 */
export async function login(body: API.ILoginParams): Promise<AxiosResponse<API.ILoginResult>> {
  return request.get(joinQueryUrl('/user/login', body)); 
}


/** 获取当前用户信息接口 GET /api/misback/now-user/ */
export async function fetchNowUser(): Promise<AxiosResponse<API.INowUserResult>> {
  return request.get('/user/getuser');
}


// /** 登出接口 POST /misback/logout/ */
// export async function logout(): Promise<AxiosResponse<API.IResult>> {
//   return request.post('/misback/logout/');
// }

/** 注册 GET /register */
export async function register(body: API.IRegister): Promise<AxiosResponse<API.IRegisterResult>> {
  return request.get(joinQueryUrl('/user/signup', body));
}




// 用户管理
/** REST获取所有用户接口 GET /api/misback/user */
export async function fetchUsers(body: API.IgetUserParams): Promise<AxiosResponse<API.IRestResult<Entity.User>>> {
  return request.get(joinQueryUrl('/user/getuser', body));
}




