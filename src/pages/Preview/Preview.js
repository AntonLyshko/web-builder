import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import PreviewContainer from '../comp/preview/PreviewContainer'
import axios from 'axios';
import { Helmet } from "react-helmet";

const Editor = ({ match }) => {

    const [projectName, setProjectName] = useState('New Project')
    const [redirect, setRedirect] = useState(false)
    const [data, setData] = useState([])


    useEffect(() => {
        if (!data.length) getData()
    }, [])

    const getData = async () => {
        let res = await axios.get(`/projects/${match.params.id}`)
        console.log(res)
        setProjectName(res.data.Name)
        setData(JSON.parse(res.data.Data))
    }


    return (
        <div className='creator-container'>
            <Helmet>
                <title>{projectName}</title>
            </Helmet>
            <Fragment>
                {data.length ? (
                    <Fragment>
                        <div className="content">
                            <PreviewContainer data={data} />
                        </div>
                    </Fragment>
                ) : (
                        <div className='initial-input'>
                            Загрузка...
                        </div>
                    )}
            </Fragment>

        </div>
    );
};




export default Editor;
