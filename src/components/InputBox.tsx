import { Form, Input } from 'antd';
import { useRef, useState } from 'react';

function InputBox() {
    
    const [inputMsg, setInputMsg] = useState<string>('');

    const handleInputMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value", event.target.value)
        setInputMsg(event.target.value)
        console.log("input msg", inputMsg)
    }

    return(
        <Input placeholder="Basic usage" onChange={handleInputMsgChange}/>
    )
}

export default InputBox;


