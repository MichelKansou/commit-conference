import React, { Component } from 'react';
import NewsView from './Views/Blog/NewsView';
import Navigation from './Views/Main/Navigation';

import PageLoader from './Components/PageLoader';

import { sortBy } from 'lodash';
import * as firebase from 'firebase';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            database: null,
            loading: true
        };
    }

    componentDidMount() {
        return firebase.database().ref('/').once('value').then(function(snapshot) {

            const sortedByDate = sortBy(snapshot.val().news, function(obj) { return - (obj.timestamp); })
            this.setState({
                loading: false,
                database: sortedByDate
            });

        }.bind(this));
    }

    render() {
        return (
            <div className='container blog'>
                <Navigation />  
                <PageLoader loading={this.state.loading}>
                    <NewsView data={this.state.database} />
                </PageLoader>
            </div>
        );
    }
}

export default Blog;
