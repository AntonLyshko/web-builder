import React, { Fragment, useState } from 'react';
import YouTube from 'react-youtube';


const Video = ({ value, onChange, id }) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    const [link, setLink] = useState('')

    const getLink = (e) => {
        setLink(e.target.value)
    }

    const linkMiddlware = () => {
        let videoId = link.split('=')[1]
        console.log(videoId)
        onChange(id, videoId)
    }

    return (
        <div className='video'>
            <input type="text" placeholder="Ссылка на ваше видео на ютуб" className='slider-item-description' onChange={(e) => getLink(e)} />
            <div onClick={() => linkMiddlware()} className='video-btn'>
                Загрузить
            </div>
            <Fragment>
                {value ? (
                    <Fragment>
                        <YouTube videoId={value} opts={opts} />
                    </Fragment>
                ) : (
                        <div className='annotation'></div>
                    )}
            </Fragment>

        </div>
    );
};




export default Video;
