import React from 'react';
import scrollToElement from 'scroll-to-element';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: 'Commit',
            activeRM: false
        };
    }

    handleClick() {
        this.state.activeRM ? this.setState({'activeRM': false}) : this.setState({'activeRM': true});
    }

    smoothScroll(sectionId) {
        scrollToElement(sectionId, {
        	offset: -50,
        	ease: 'out-circ',
        	duration: 1400
        });
    }

    render() {
        return (
            <header className='headerNav'>
                <div className='wrap' aria-expanded='true'>
                    <div className='navigation-bar'>
                        <h2 className='logo'><a>{this.state.navTitle}</a></h2>
                        <a id='menu-icon' onClick={() => this.handleClick()}>&#9776;</a>
                    </div>
                    <nav className={this.state.activeRM ? 'navbar active' : 'navbar'}>
                        <ul className='menu'>
                            <li><a onClick={() => this.smoothScroll('#home')} href='#home'> Accueil </a></li>
                            <li><a onClick={() => this.smoothScroll('#plan')} href='#planning'> Planning </a></li>
                            <li><a onClick={() => this.smoothScroll('#contact')} href='#contact'> Contact </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
