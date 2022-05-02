import { Button, Descriptions, Divider, message } from "antd";
import { useState } from "react";
import { defaultUser } from "../login/constant";

export default function UserDetail() {

  const [showUser, setShowUser] = useState<Entity.User>(defaultUser);

  const handleClick = () => {
    message.info('功能正在完善中，敬请期待');
  }


  return (
    <div style={{marginTop:'5%'}}>
      <Descriptions title={'用户信息'} column={1}>
        <Descriptions.Item label="用户ID">{sessionStorage.getItem('id') ?? showUser.id}</Descriptions.Item>
        <Descriptions.Item label="用户名">{sessionStorage.getItem('name') ?? showUser.name}</Descriptions.Item>
        <Descriptions.Item label="密码">{sessionStorage.getItem('password') ?? showUser.password}</Descriptions.Item>
        <Descriptions.Item label="权限">{sessionStorage.getItem('authority') ?? showUser.authority}</Descriptions.Item>
        <Descriptions.Item label="备注">{sessionStorage.getItem('comment') ?? showUser.comment}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Button type="primary" onClick={handleClick}>修改用户信息</Button>
    </div>
  );


}