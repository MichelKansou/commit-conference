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
        let config;
        if (process.env.NODE_ENV === "development") {
            config = require('./secret/config.json')
        } else {
            config = {
                apiKey: process.env.REACT_APP_API_KEY,
                authDomain: process.env.REACT_APP_AUTH_DOMAIN,
                databaseURL: process.env.REACT_APP_DATABASE_URL,
                projectId: process.env.REACT_APP_PROJECT_ID,
                storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
                messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
            }
        }
        console.log(config);
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
