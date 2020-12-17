import React from 'react';


const ControlPanel = ({ id, handleDelete, handleSort, handleCopy }) => {

    return (
        <div className='control-panel'>
            <div className='control-item delete' onClick={() => handleDelete(id)}>
                X
            </div>
            <div className='control-item sort' onClick={() => handleSort(id, -1)}>
                UP
            </div>
            <div className='control-item sort' onClick={() => handleSort(id, 1)}>
                DOWN
            </div>
            <div className='control-item copy' onClick={() => handleCopy(id)}>
                Copy
            </div>
        </div>
    );
};




export default ControlPanel;
