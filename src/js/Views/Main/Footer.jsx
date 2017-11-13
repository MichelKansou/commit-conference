import React, { Component } from 'react';
import Contact from './Contact';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Contact />
                <div className='more-info'>
                    <a className='social-media' href='mailto:commit-event@outlook.fr'><i className='fa fa-envelope'></i>commit-event@outlook.fr</a>
                    <a className='social-media'><i className='fa fa-twitter'></i>@Commit</a>
                    <a className='social-media'><i className='fa fa-facebook'></i>Commit</a>
                </div>
            </footer>
        );
    }
}
