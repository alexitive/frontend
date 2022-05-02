import { type } from "os";

declare namespace API {
  type IResult = {
    message: string;
    status: number;
  };





  type IPageResult = {
    pageSize: number;
    current: number;
    total: number;
  };

  type IRestResult<T> = IPageResult & {
    data: T[];
  };


  type IPageParams = {
    pageSize: number;
    current: number;
  };

  type IQueryUserParams = IPageParams & {
    authority?: string;
    ordering?: string;
    search?: string;
  };

  type ICreateUserParams = {
    userName: string;
    password: string;
    userDes?: string;
    authority: number;
    description?: string;
  };

  type IChooseUserParams = {
    uid: number;
  };

  type IDeleteUserParams = IChooseUserParams;

  type IUpdateUserParams = IChooseUserParams & {
    userName: string;
    userDes?: string;
    authority: number;
    description?: string;
  };

  type ICreateLoginDataParams = {
    userName: string;
    password: string;
  };

  type ICreateProjectParams = {
    projectName: string;
    videoFileName: string;
    projectStatus: number;
    description?: string;
    videoFile: File;
  }

  // 前后端交互参数命名空间
  type IgetUserParams = {
    id: number;
  }

  /**
   * 登录函数请求数据
   */
  type ILoginParams = {
    username: string;
    password: string;
  };
  /**
   * 登录函数返回数据
   */
  type ILoginResult = {
    user: Entity.User;
    token: number; 
  };
  /**
   * 登录成功获取当前用户信息
   */
  type INowUserResult = IResult & {
    data: Entity.User;
  };

  /**
   * 注册请求
   */
  type IRegister = {
    username: string;
    password: string;
  };
/**
 * 注册响应
 */
  type IRegisterResult = {
    token: number;
  };

/**
 * 查询
 */
type IQuery = {
  question: string;
}
/**
 * 查询响应
 */
 type IQueryResult = {
  answer: string;
}

}
