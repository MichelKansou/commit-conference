import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as firebase from 'firebase';
import PageLoader from '../../Components/PageLoader';

export default class PostView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            post: {},
            loading: true
        };
    }

    componentDidMount() {
            return firebase.database().ref('/news/'+ this.state.id).once('value').then(function(snapshot) {
                this.setState({
                    loading: false,
                    post: snapshot.val()
                });
            }.bind(this));
    }

    render() {
        const post = this.state.post

        return (
            <div className='container post-view'>
                <PageLoader loading={this.state.loading}>
                    <div className='content'>
                        <div className='image-container'>
                            <img className='image' src={'data:image/png;base64, ' + post.image} alt='article' ></img>
                        </div>
                        <article>
                            <h2 className='title'>{post.title}</h2>
                            <p className='body'>
                                {post.body}
                            </p>
                        </article>
                    </div>
                </PageLoader>
            </div>
        );
    }
}

PostView.propTypes = {
    match: PropTypes.object
};
