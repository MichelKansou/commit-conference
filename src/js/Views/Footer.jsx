import React, { Component } from 'react';
import Contact from './Contact';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Contact />
                <div className='more-info'>
                    <h4 className='social-media'><i className='fa fa-envelope'></i>hello@commit.com</h4>
                    <h4 className='social-media'><i className='fa fa-twitter'></i>@Commit</h4>
                </div>
            </footer>
        );
    }
}
