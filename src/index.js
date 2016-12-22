import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, browserHistory} from "react-router";
import Dashboard from "./Dashboard";
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/dashboard/:uid" component={Dashboard}/>

    </Router>,
  document.getElementById('root')
);
