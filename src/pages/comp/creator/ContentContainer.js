import React, { Fragment } from 'react';
import ControlPanel from './ControlPanel'
import Input from './Input'
import Title from './contentComponents/Title'
import Text from './contentComponents/Text'
import Slider from './contentComponents/Slider'
import Video from './contentComponents/Video'
import File from './contentComponents/File'
import Audio from './contentComponents/Audio'
import Photo from './contentComponents/Photo'


const ContentContainer = ({ data, onChange, handleDelete, handleSort, handleCopy, handleInput }) => {


    const getComponent = (type) => {
        switch (type) {
            case 'title':
                return Title
            case 'text':
                return Text
            case 'slider':
                return Slider
            case 'photo':
                return Photo
            case 'file':
                return File
            case 'audio':
                return Audio
            case 'video':
                return Video
            default:
                return null
        }
    }




    return (
        <div className='content-container'>
            <Fragment>
                {data.length ? (
                    <Fragment>
                        {
                            data.map(item => {
                                let Component = getComponent(item.type)
                                return (
                                    <div className='content-item'>
                                        <Component value={item.value} onChange={onChange} id={item.id} />
                                        <Input id={item.id} handleInput={handleInput} />
                                        <ControlPanel id={item.id} handleSort={handleSort} handleCopy={handleCopy} handleDelete={handleDelete} />

                                    </div>
                                )
                            }
                            )}
                    </Fragment>

                ) : (
                        <div className='annotation'>Добавить элемент на страницу</div>
                    )}
            </Fragment>
        </div>
    );
};




export default ContentContainer;
