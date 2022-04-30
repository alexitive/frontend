declare namespace API {
  type IResult = {
    message: string;
    status: number;
  };



  type INowUserResult = IResult & {
    data: Entity.User;
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
    token: number; 
  };


}
