import { Card, Input, message, Spin } from 'antd';
import React, { useState } from 'react';
import { query } from '../../api/api';

// interface QueryProps {
// 	content: string;
// }
// props: QueryProps
export function Query() {
	// const [question, setQuestion] = useState<string>('');
	const [answer, setAnswer] = useState<string>('null');
	const [loading, setLoading] = useState<boolean>(false); // 加载动画
	// const{ content } = props;


	const handleSearch = async (value: string) => {
		setLoading(true); // 触发加载动画
		console.log(value);
		try {
			// setQuestion(value);
			const msg = await query({ question: value })
			console.log(msg)
			if(value.length === 0) {
				message.info('输入问题为空');
				return;
			}
			setAnswer(msg.data.answer);
			setLoading(false);
		} catch (error) {
			message.error('问题为空，请重试');
			console.log('query error', error);
		}
	}

	return (
		<div style={{ marginTop: '8%' }} >
			<Input.Search
				size="large"
				placeholder="input here"
				enterButton
				onSearch={async (value: string) => await handleSearch(value)} 
			/>
			<div style={{ marginTop: 100 }}>
				{answer !== 'null' &&
				<>
					<Spin spinning={loading} delay={100} /> 
					<Card title="查询结果" style={{ width: '100%' }}>
						{answer}
					</Card>
				</>
				}
			</div>
		</div>
	)
}

