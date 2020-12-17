import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/style.css";

import Table from './pages/Table/Table'
import Creator from './pages/Creator/Creator'
import Preview from './pages/Preview/Preview'
import Editor from './pages/Editor/Editor'



const App = () => {


  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/creator" component={Creator} />
        <Route path="/preview/:id" component={Preview} />
        <Route path="/editor/:id" component={Editor} />
      </Switch>
    </Fragment>
  );
};

export default App;
