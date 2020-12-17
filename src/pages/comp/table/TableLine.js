import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

const TableLine = ({ id, date, name, deletePage }) => {
    moment.locale('ru');
    return (
        <div className='table-item' key={id}>

            <div className='table-col'>{name}</div>
            <div className='table-col'>
                {moment(date).format("DD.MM.YYYY, HH:mm")}
            </div>
            <Link to={`/editor/${id}`}>
                <div className='btn table-btn edit-btn'>Редактировать</div>
            </Link>
            <Link to={`/preview/${id}`}>
                <div className='btn table-btn check-btn'>Посмотреть</div>
            </Link>
            <div className='btn table-btn delete-btn' onClick={() => deletePage(id)}>Удалить</div>
        </div>

    );
};


export default TableLine;
