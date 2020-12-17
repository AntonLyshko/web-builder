import React, { Fragment } from 'react';




const Photo = ({ value, id }) => {




    return (
        <div className='photo'>
            <Fragment>
                {value.url ? (
                    <Fragment>
                        <img className='uploaded-photo' src={value.url} alt='' />
                        <p>{value.subtext}</p>
                    </Fragment>
                ) : (
                        <div className='annotation'></div>
                    )}
            </Fragment>
        </div>
    );
};




export default Photo;
