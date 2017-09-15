import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Nav.css';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_element_class: "hidden-nav"
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            nav_element_class: (this.state.nav_element_class === "hidden-nav") ?  
            "shown-nav" : "hidden-nav"
        });
    }
    render() {
        return (
            <div className="nav">
                <p id="hamburger-spans" onClick={this.toggleNav} className={this.state.nav_element_class+"-span"}>
                    <span className="top-bun"></span>
                    <span className="meat"></span>
                    <span className="bottom-bun"></span>
                </p>
                <div id="nav-menu-container" className={this.state.nav_element_class}>
                    <h2 id="collapsed-nav-title">Practice Buddy</h2>
                    <ul id="nav-menu">
                        <li># Modes</li>
                        <li># Chords</li>
                        <li># Charts</li>
                        <li># About</li>
                    </ul>
                </div>
                <p id="nav-title">Practice Buddy</p>
            </div>
        );
    }
}

export default Nav;
