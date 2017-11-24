import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

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
            return firebase.database().ref('news').orderByChild('id').equalTo(parseInt(this.state.id)).once('value').then(function(snapshot) {
                this.setState({
                    loading: false,
                    post: snapshot.val() ? snapshot.val().pop() : null
                });
            }.bind(this));
    }

    render() {
        const post = this.state.post
        if (post != null) {
            var text
            if (typeof post.body !== 'undefined') {
                text = post.body.split("\\n").map(function(item) {
                  return (
                    <p>
                      {item}
                      <br/>
                      <br/>
                    </p>
                  )
                })
            }
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
                                    {text}
                                </p>
                            </article>
                            <footer className='post-footer'>
                                <a className='social-media' href='mailto:commit-event@outlook.fr'><i className='fa fa-envelope'></i>commit-event@outlook.fr</a>
                                <a className='social-media'><i className='fa fa-twitter'></i>@Commit</a>
                                <a className='social-media'><i className='fa fa-facebook'></i>Commit</a>
                            </footer>
                        </div>
                    </PageLoader>
                </div>
            );
        }
        return <Redirect to='/not-found'/>;
    }
}

PostView.propTypes = {
    match: PropTypes.object
};
