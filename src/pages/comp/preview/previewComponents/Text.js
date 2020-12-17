import React from 'react';


const Text = ({ value, id }) => {

    return (
        <div className='text'>
            <div className="text-content">
                {value}
            </div>
        </div >
    );
};




export default Text;
