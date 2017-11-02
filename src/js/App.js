import React, { Component } from 'react';
import Navigation from './Views/Navigation';
import Home from './Views/Home';
import Plan from './Views/Plan';
import Sponsor from './Views/Sponsor';
import Footer from './Views/Footer';

class App extends Component {
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

export default App;
