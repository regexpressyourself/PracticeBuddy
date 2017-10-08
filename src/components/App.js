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
            main_component: <Home />,
            nav_menu_items:  [
                {
                    onClick: () => this.replaceBody("modes"),
                    title: "# Modes"
                },
                {
                    onClick: () => this.replaceBody("chords"),
                    title: "# Chords"
                },
                {
                    onClick: () => this.replaceBody("charts"),
                    title: "# Charts"
                },
                {
                    onClick: () => this.replaceBody("about"),
                    title: "# About"
                }
            ]
        };
        this.replaceBody = this.replaceBody.bind(this);
    }
    replaceBody(new_page) {
        let main_component;
        if (new_page === "modes") {
            main_component = <Modes />;
        }
        else if (new_page === "about") {
            main_component = <About />;
        }
        else if (new_page === "charts") {
            main_component = <Charts />;
        }
        else if (new_page === "chords") {
            main_component = <Chords />;
        }
        this.setState({
            main_component: main_component
        });
    }
    render() {
        return (
                <div id="main-container">
                    <Nabbar menu_items={this.state.nav_menu_items} />
                    {this.state.main_component}
                </div>
            );
    }
}

export default App;
