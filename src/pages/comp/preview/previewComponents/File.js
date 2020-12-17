import React, { Fragment } from 'react';

const File = ({ value, id }) => {

    return (
        <div className='file'>
            <Fragment>
                {value ? (
                    <Fragment>
                        {
                            value.map(item => {
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
                        <Fragment></Fragment>
                    )}
            </Fragment>
        </div>
    );
};




export default File;
