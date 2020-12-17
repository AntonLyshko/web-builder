import React, { Fragment } from 'react';

import Title from './previewComponents/Title'
import Text from './previewComponents/Text'
import Slider from './previewComponents/Slider'
import Video from './previewComponents/Video'
import File from './previewComponents/File'
import Audio from './previewComponents/Audio'
import Photo from './previewComponents/Photo'


const ContentContainer = ({ data }) => {


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
                                        <Component value={item.value} id={item.id} />
                                    </div>
                                )
                            }
                            )}
                    </Fragment>

                ) : (
                        <Fragment></Fragment>
                    )}
            </Fragment>
        </div>
    );
};




export default ContentContainer;
