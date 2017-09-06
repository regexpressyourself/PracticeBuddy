import React, { Component } from 'react';
import logo from '../statics/logo.svg';
import '../styles/App.css';
import app_data from '../config/data.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modes:                  app_data.modes,
            mode_to_chromatic:      app_data.mode_to_chromatic,
            sharp_based_chromatic:  app_data.sharp_based_chromatic,
            flat_based_chromatic:   app_data.flat_based_chromatic
        }
    } 
    componentWillMount() {
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.modes)}
            </div>
        );
    }
}

export default App;
