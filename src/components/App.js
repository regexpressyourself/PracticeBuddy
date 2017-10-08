import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import Nabbar from './Nabbar';
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
        this.state = {
            nav_menu_items:  [
                {
                    href: "/modes",
                    title: "# Modes"
                },
                {
                    href: "/chords",
                    title: "# Chords"
                },
                {
                    href: "/charts",
                    title: "# Charts"
                },
                {
                    href: "about",
                    title: "# About"
                }
            ]
        };
    }
    componentWillMount() {
    }
    render() {
        return (
            <Router>
                <div id="main-container">
                    <Nabbar menu_items={this.state.nav_menu_items} />
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
