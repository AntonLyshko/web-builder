import React from 'react';


const Title = ({ value, onChange, id }) => {

    return (
        <div className='title'>
            <input value={value} name={id} onChange={(e) => onChange(e.target.name, e.target.value)} placeholder='Заголовок или название' />
        </div>
    );
};




export default Title;
