import React, { Component } from 'react';
import Main from './Main';
import Blog from './Blog';
import PostView from './Views/Blog/PostView';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';
const history = createBrowserHistory();

class App extends Component {

    constructor(props) {
        super(props);
        const config = require('./secret/config.json');
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Switch history={history}>
                <Route exact path="/" component={Main}/>
                <Route exact path="/blog" component={Blog}/>
                <Route path="/blog/:id" component={PostView}/>
                <Route path="/*" component={Main}/>
            </Switch>
        );
    }
}

export default App;
