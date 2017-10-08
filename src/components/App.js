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
                    href: "practicebuddy/modes",
                    title: "# Modes"
                },
                {
                    href: "practicebuddy/chords",
                    title: "# Chords"
                },
                {
                    href: "practicebuddy/charts",
                    title: "# Charts"
                },
                {
                    href: "practicebuddy/about",
                    title: "# About"
                }
            ]
        };
    }
    componentWillMount() {
    }
    render() {
        return (
            <Router basename="/practicebuddy">
                <div id="main-container">
                    <Nabbar menu_items={this.state.nav_menu_items} />
                    <Route exact path="/practicebuddy" component={Home}/>
                    <Route path="/practicebuddy/modes" component={Modes}/>
                    <Route path="/practicebuddy/chords" component={Chords}/>
                    <Route path="/practicebuddy/charts" component={Charts}/>
                    <Route path="/practicebuddy/about" component={About}/>
                </div>
            </Router>
            );
    }
}

export default App;
