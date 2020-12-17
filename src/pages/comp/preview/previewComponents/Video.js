import React, { Fragment } from 'react';
import YouTube from 'react-youtube';


const Video = ({ value, id }) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className='video'>
            <Fragment>
                {value ? (
                    <Fragment>
                        <YouTube videoId={value} opts={opts} />
                    </Fragment>
                ) : (
                        <Fragment></Fragment>
                    )}
            </Fragment>

        </div>
    );
};




export default Video;
