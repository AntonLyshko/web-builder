import React, { useState, useEffect, Fragment } from 'react';
import { Redirect, Link } from "react-router-dom";
import Dashboard from '../comp/creator/Dashboard';
import ContentContainer from '../comp/creator/ContentContainer';
import Input from '../comp/creator/Input';
import axios from 'axios';

const Creator = () => {

	const [projectName, setProjectName] = useState('New Project')
	const [redirect, setRedirect] = useState(false)
	const [data, setData] = useState([])


	useEffect(() => {
		let newData = data.slice();
		newData[0] = new Item(1, 'title')
		setData(newData)
	}, [])

	function Item(id, type) {
		this.id = id;
		this.order = id;
		this.type = type;
		this.value = ''
	}

	const onChange = (id, value) => {
		let newData = data.slice();
		let intId = parseInt(id);
		let currentIndex = newData.findIndex(i => {
			return i.id === intId
		});
		newData[currentIndex].value = value;
		setData(newData)
	}



	const handleInput = (id, type) => {
		let newData = data.slice();
		let currentIndex = newData.findIndex(i => i.id === id);
		let item = new Item(newData.length + 1, type)
		newData.splice(currentIndex + 1, 0, item)
		console.log(newData)
		setData(newData)
	}

	const handleCopy = (id) => {
		let newData = data.slice();
		console.log(newData)
		let currentIndex = newData.findIndex(i => i.id === id);
		newData.push(newData[currentIndex]);
		setData(newData)
	}

	const handleDelete = (id) => {
		let newData = data.slice();
		console.log(newData)
		let currentIndex = newData.findIndex(i => i.id === id);
		console.log(currentIndex)
		newData.splice(currentIndex, 1);
		setData(newData)
	}

	const handleSort = (id, value) => {
		let newData = data.slice();
		let currentIndex = newData.findIndex(i => i.id === id);
		let newIndex = currentIndex + value;
		if (newIndex >= newData.length || newIndex < 0) return null
		console.log(currentIndex, newIndex);
		newData.splice(newIndex, 0, newData.splice(currentIndex, 1)[0]);
		setData(newData)
	}

	const onProjectName = (value) => {
		setProjectName(value)
	}

	const handleSave = async () => {
		let body = {
			Name: projectName,
			Data: JSON.stringify(data),
			Date: new Date()
		}
		let res = await axios.post('/projects', body)
		if (res.status === 200) {
			setRedirect('/')
		}
	}

	const handleCheck = async () => {
		let body = {
			Name: projectName,
			Data: JSON.stringify(data),
			Date: new Date()
		}
		let res = await axios.post('/projects', body)
		if (res.status === 200) {
			console.log(res.data)
			setRedirect(`/editor/${res.data.id}`)
		}

	}

	const renderRedirect = () => {
		if (redirect) {
			return (
				<Redirect to={redirect} />
			)
		}
	}

	return (
		<div className='creator-container'>
			{renderRedirect()}
			<Dashboard handleCheck={handleCheck} handleSave={handleSave} onProjectName={onProjectName} projectName={projectName} />
			<Fragment>
				{data.length ? (
					<Fragment>
						<div className="content">
							<ContentContainer data={data} onChange={onChange} handleSort={handleSort} handleCopy={handleCopy} handleDelete={handleDelete} handleInput={handleInput} />
						</div>
					</Fragment>
				) : (
						<div className='initial-input'>
							<Input handleInput={handleInput} id={0} />
						</div>
					)}
			</Fragment>

		</div>
	);
};




export default Creator;
