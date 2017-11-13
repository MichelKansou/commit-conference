import React, { Component } from 'react';
import Navigation from './Views/Main/Navigation';
import Home from './Views/Main/Home';
import Plan from './Views/Main/Plan';
import Sponsor from './Views/Main/Sponsor';
import Footer from './Views/Main/Footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <Navigation />
                <Home />
                <Plan />
                <Sponsor />
                <Footer />
            </div>
        );
    }
}

export default Main;
