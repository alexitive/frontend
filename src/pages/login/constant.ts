// 登录返回值的默认值
export const defaultLoginResult: API.ILoginResult = {
	token: -1,  
	user: {
      		id: -1, 
			name: 'unvalidUser', 
			password: 'error',
			authority: 0,
			comment: ''
		},
};
  
// 注册返回值默认值
export const defaultRegisterResult: API.IRegisterResult = {
	token: -1,  
};
  