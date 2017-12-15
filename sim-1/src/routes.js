import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import shelfA from './shelfA';
import shelfB from './shelfB';
import shelfC from './shelfC';
import shelfD from './shelfD';
import './index.js';
import App from './App.js';

export default (
    <Router className="App">
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/shelfA" component={shelfA}/>
        </Switch>
    </Router>
)