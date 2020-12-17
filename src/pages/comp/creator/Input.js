import React, { useState, Fragment } from 'react';


const Input = ({ handleInput, id }) => {

    const [active, setActive] = useState(false)

    const openInput = () => {
        setActive(!active)
    }

    const inputMiddleware = (id, type) => {
        setActive(!active)
        handleInput(id, type)
    }

    return (
        <div className='input-container'>
            <div onClick={openInput} className='input-trigger'>
                {active ? '-' : '+'}
            </div>
            <Fragment>
                {active ? (
                    <Fragment>
                        <div className='input-panel'>
                            <div onClick={() => inputMiddleware(id, 'title')} className='input-item'>
                                Заголовок
                                </div>
                            <div onClick={() => inputMiddleware(id, 'text')} className='input-item'>
                                Текст
                                </div>
                            <div onClick={() => inputMiddleware(id, 'photo')} className='input-item'>
                                Картинка
                                </div>
                            <div onClick={() => inputMiddleware(id, 'slider')} className='input-item'>
                                Слайдер
                                </div>
                            <div onClick={() => inputMiddleware(id, 'video')} className='input-item'>
                                Видео
                                </div>
                            <div onClick={() => inputMiddleware(id, 'audio')} className='input-item'>
                                Аудио
                                </div>
                            <div onClick={() => inputMiddleware(id, 'file')} className='input-item'>
                                Файл
                                </div>
                        </div>
                    </Fragment>
                ) : (
                        <div className='annotation'></div>
                    )}
            </Fragment>


        </div>
    );
};




export default Input;
