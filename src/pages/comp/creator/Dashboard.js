import React from 'react';


const Dashboard = ({ projectName, onProjectName, handleCheck, handleSave }) => {

    return (
        <div className='dashboard'>
            <div className="dashboard-container">
                <input className='project-name' value={projectName} onChange={(e) => onProjectName(e.target.value)} />
                <div className='dashboard-btn-container'>
                    <div onClick={handleSave} className="dashboard-btn save-btn">
                        Сохранить проект
                </div>
                    <div onClick={handleCheck} className="dashboard-btn check-btn">
                        Предосмотр
                </div>
                </div>
            </div>

        </div>
    );
};




export default Dashboard;
