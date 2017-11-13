import React, { Component } from 'react';
import NewsView from './Views/Blog/NewsView';

import PageLoader from './Components/PageLoader';

import * as firebase from 'firebase';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            database: {},
            loading: true
        };
    }

    componentDidMount() {
            return firebase.database().ref('/').once('value').then(function(snapshot) {
                this.setState({
                    loading: false,
                    database: snapshot.val()
                });
            }.bind(this));
    }

    render() {
        return (
            <div className='container blog'>
                <PageLoader loading={this.state.loading}>
                    <NewsView data={this.state.database}/>
                </PageLoader>
            </div>
        );
    }
}

export default Blog;
