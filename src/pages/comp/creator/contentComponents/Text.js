import React, { Fragment } from 'react';


const Text = ({ value, onChange, id }) => {

    return (
        <div className='text'>
            <textarea rows="10" cols="45" name={id} onChange={(e) => onChange(e.target.name, e.target.value)} value={value} defaultValue='Ваш текст' />
        </div >
    );
};




export default Text;
