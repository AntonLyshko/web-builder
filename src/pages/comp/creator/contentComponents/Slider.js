import React, { Fragment, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";
import axios from 'axios';


const Slider = ({ value, onChange, id }) => {

    const [loaded, setLoaded] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if (!value) {
            let data = []
            onChange(id, data);
        }
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)
        let res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        let newValue = value.slice();

        for (let i = 0; i < newValue.length; i++) {
            newValue[i].url = res.data[i].url
        }
        onChange(id, newValue)
        setLoaded(true)
    }

    function SliderItem(id, name, url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }


    const handleImageChange = (e) => {
        e.preventDefault();
        setLoaded(false)
        let files = Array.from(e.target.files);
        let index = 0;
        let data = value.slice()
        files.forEach((file, i) => {
            let reader = new FileReader();
            reader.onloadend = () => {
                let item = new SliderItem(index, '', reader.result)
                data[index] = item
                index++
                if (index === files.length) {
                    onChange(id, data);
                }
            }
            reader.readAsDataURL(file);
        });
    }

    const handleSlideTextChange = (e, itemId) => {
        let newValue = value;
        newValue[itemId].name = e.target.value
        onChange(id, newValue);
    }

    return (
        <div className='slider'>
            <Fragment>
                {value ? (
                    <Fragment>
                        <Slick {...settings}>
                            {
                                value.map(item => {
                                    return (
                                        <div key={item.id} className='slider-item'>
                                            <img className='slider-img' src={item.url} alt='' />
                                            <input placeholder='Название или описание фотографии' className='slider-item-description' type="text" onChange={(e) => handleSlideTextChange(e, item.id)} value={item.name} />
                                        </div>
                                    )
                                })}
                        </Slick>
                    </Fragment>
                ) : (
                        <div className='annotation'>Загрузить фото</div>
                    )}
            </Fragment>
            {loaded ? null : (
                <form className='uploader-slider' onSubmit={(e) => onSubmit(e)}>
                    <input className="upload" name='files' type="file" onChange={(e) => handleImageChange(e)} multiple />
                    <button className='submit' type="submit">Загрузить фотографии</button>
                </form>
            )}

        </div>
    );
};




export default Slider;
