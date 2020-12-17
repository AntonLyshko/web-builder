import React, { Fragment } from 'react';
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"
import axios from 'axios';

const Audio = ({ value, onChange, id }) => {

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
            <form onSubmit={e => onSubmit(e)}>
                <input type="file" name='files' multiple accept="audio/*,mp3/wav/sdt" />
                <button className='submit' type="submit">Загрузить аудио</button>
            </form>
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
                        <div className='annotation'></div>
                    )}
            </Fragment>
        </div>
    );
};




export default Audio;
