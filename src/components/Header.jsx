import { useState } from "react";

const Header = (props) => {

  const [task, setTasks] = useState( // setTasks - 我们指定的修改状态的函数
  	{},
    {},
    {},
    )
    
	const onclick = (e) => {
		// console.log(e);
		console.log('click');
	}

	return (
		<header>
			<h1>Task Tracker</h1>
		</header>
	)
}


const Task = ({ task }) => {
	return (
		<div className='task'>
			<h3 onClick = {() => onDelete(task.id)}>{task.text}</h3>
			<p>{task.day}</p>
		</div>
	)
}





export default Header


// Delete Task
const deleteTask = (id) => {
	// console.log('delete', id);
	setTasks(tasks.filter((task) => task.id !== id))
}

