import { Alert } from 'antd';

// 传参
// interface MyAlertProps{
// 	token: number;
// }

// export default (props: MyAlertProps) => {
//   const { token } = props // 从props取出token
// 	return (
// 			<>
// 			{token === 1 ?
// 				<Alert message="登录成功" type="success" showIcon /> :
// 				<Alert message="登录失败" type="error" showIcon />			
// 			}
// 			</>
//     )
// };

export default () => {
	return (
		<Alert     
			style={{
      	marginBottom: 24
    	}} 
			message="登录失败" type="error" showIcon 
		/>
	)		
};
