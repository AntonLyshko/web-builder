import React, { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";


const Slider = ({ value, id }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
                                            <div className='slide-text'>{item.name}</div>
                                        </div>
                                    )
                                })}
                        </Slick>
                    </Fragment>
                ) : (
                        <Fragment></Fragment>
                    )}
            </Fragment>

        </div>
    );
};




export default Slider;
