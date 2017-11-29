import React, { Component } from 'react';
import Contact from './Contact';

export default class Footer extends Component {
    render() {
        // <a className='social-media'><i className='fa fa-twitter'></i>@Commit</a>
        return (
            <footer>
                <Contact />
                <div className='more-info'>
                    <a className='social-media' href='mailto:commit-event@outlook.fr'><i className='fa fa-envelope'></i>commit-event@outlook.fr</a>
                    <a className='social-media' rel='noopener noreferrer' target="_blank" href='https://www.facebook.com/Commit-1968713566717788/'><i className='fa fa-facebook'></i>Commit</a>
                </div>
            </footer>
        );
    }
}
