import React, { Fragment, useState } from 'react';
import axios from 'axios';



const Photo = ({ value, onChange, id }) => {

    const [loaded, setLoaded] = useState(false)

    const onSubmit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)
        let res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        let data = {
            url: res.data[0].url,
            subtext: value.subtext
        }
        onChange(id, data)
        setLoaded(true)
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            let data = {
                url: reader.result,
                subtext: ''
            }
            onChange(id, data);
        }
        reader.readAsDataURL(file)
    }

    const handleSubtextChange = e => {
        let data = { ...value, subtext: e.target.value }
        onChange(id, data);
    }



    return (
        <div className='photo'>
            <form onSubmit={e => onSubmit(e)} className='photo-form'>
                <input type="file" name='files' onChange={(e) => handleImageChange(e)} />
                {loaded ? null : (<button className='submit' type="submit">Загрузить фотографию</button>)}
            </form>
            <Fragment>
                {value.url ? (
                    <Fragment>
                        <img className='uploaded-photo' src={value.url} alt='' />
                        <input placeholder='Название или описание фотографии' className='photo-description' type="text" onChange={(e) => handleSubtextChange(e)} value={value.subtext} />
                    </Fragment>
                ) : (
                        <Fragment></Fragment>
                    )}
            </Fragment>
        </div>
    );
};




export default Photo;
