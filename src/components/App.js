import React, { Component } from 'react';
import '../styles/App.css';
import MainWrapper from './MainWrapper';

class App extends Component {
    constructor(props) {
        super(props);
    } 
    componentWillMount() {
    }
    render() {
        return (
                <MainWrapper />
        );
    }
}

export default App;
