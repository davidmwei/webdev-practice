import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/Home.js';
import About from '../src/About.js';
import Work from '../src/Work.js';
import '../src/css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} exact />
            <Route path='/work' component={Work} exact />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)