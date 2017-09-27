import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import ComingSoon from './ComingSoon';


class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentWillMount() {
    }
    render() {
        return (
            <div id="main-container">
                <ComingSoon />
            </div>
        );
    }
}

export default App;
