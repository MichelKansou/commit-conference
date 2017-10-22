import React, { Component } from 'react';
import Home from './Views/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <Home />
            </div>
        );
    }
}

export default App;
