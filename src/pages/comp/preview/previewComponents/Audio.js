import React, { Fragment } from 'react';
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"

const Audio = ({ value, id }) => {

    const AudioPlayer = ({ file }) => {
        const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
            src: file.url,
            format: "mp3",
            autoplay: false,
            onend: () => console.log("sound has ended!")
        })

        if (!ready && !loading) return <div>No audio to play</div>
        if (loading) return <div>Loading audio</div>

        return (
            <div className='audio-item'>
                <div className='audio-item-name'>{file.name}</div>
                <button className='audio-btn' onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
            </div>
        )
    }

    return (
        <div className='audio'>
            <Fragment>
                {value ? (
                    <Fragment>
                        {
                            value.map(item => {
                                return (
                                    <AudioPlayerProvider>
                                        <AudioPlayer file={item} />
                                    </AudioPlayerProvider>
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




export default Audio;
