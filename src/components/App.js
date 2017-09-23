import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import Nav from './Nav';
import Home from '../components/Home';
import Modes from '../components/Modes';
import Chords from '../components/Chords';
import Charts from '../components/Charts';
import About from '../components/About';
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
                    <Nav />
                    <Route exact path="/" component={Home}/>
                    <Route path="/modes" component={Modes}/>
                    <Route path="/chords" component={Chords}/>
                    <Route path="/charts" component={Charts}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;
