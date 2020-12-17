import React, { useState, Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import TableLine from '../comp/table/TableLine'
import axios from 'axios';

const Table = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		if (!data.length) getData()
	})

	const getData = async () => {
		let res = await axios.get('/projects')
		setData(res.data)
	}

	const deletePage = async (id) => {
		await axios.delete(`/projects/${id}`)
		let res = await axios.get('/projects')
		setData(res.data)
	}


	return (
		<div className='table'>
			<div className='table-container'>

				<Fragment>
					<div className='outsider'>
						<div className='invoice-panel-title'>Панель готовых страниц</div>
						<Link to='/creator'><div className='btn btn-create'>Создать страницу</div></Link>
					</div>
					<div className='table-header'>
						<div className='table-col-name'>Название</div>
						<div className='table-col-name'>Дата</div>
					</div>
					{
						data.map(item => {
							return (
								<TableLine id={item.id} name={item.Name} date={item.Date} deletePage={deletePage} />
							)
						})
					}
				</Fragment>
			</div>
		</div>

	)
};


export default Table;
