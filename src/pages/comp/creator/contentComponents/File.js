import React, { Fragment } from 'react';
import axios from 'axios';

const File = ({ value, onChange, id }) => {




    const onSubmit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)

        let res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        onChange(id, res.data)
    }


    return (
        <div className='file'>
            <form onSubmit={e => onSubmit(e)}>
                <input type="file" name='files' multiple />
                <button className='submit' type="submit">Загрузить файлы</button>
            </form>
            <Fragment>
                {value ? (
                    <Fragment>
                        {
                            value.map(item => {
                                console.log(item)
                                return (
                                    <div className='file-item'>
                                        <div>{item.name}</div>
                                        <a href={`http://localhost:1337${item.url}`}>Скачать</a>
                                    </div>

                                )
                            })
                        }
                    </Fragment>
                ) : (
                        <div className='annotation'></div>
                    )}
            </Fragment>
        </div>
    );
};




export default File;
