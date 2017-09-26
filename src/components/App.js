import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import ComingSoon from './ComingSoon';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentWillMount() {
    }
    render() {
        return (
            <Router>
                <div id="main-container">
                    <Route exact path="/" component={ComingSoon}/>
                </div>
            </Router>
        );
    }
}

export default App;
