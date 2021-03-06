import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './page/entry';
import Home from './page/home';
import Blog from './page/blog';
import Music from './page/music';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/music" component={Music} />
            <Route exact path="/" component={Entry} />
        </Switch>
    </HashRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
