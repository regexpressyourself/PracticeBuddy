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
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    toggleNav() {
        this.setState({
            nav_element_class: (this.state.nav_element_class === "hidden-nav") ?  
            "shown-nav" : "hidden-nav"
        });
    }    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({
            nav_element_class:  "hidden-nav"
        });

        }
    }
    render() {
        return (
            <div className="nav">
                <p id="hamburger-spans" onClick={this.toggleNav} className={this.state.nav_element_class+"-span"}>
                    <span className="top-bun"></span>
                    <span className="meat"></span>
                    <span className="bottom-bun"></span>
                </p>
                <div ref={this.setWrapperRef} 
                    id="nav-menu-container" 
                    className={this.state.nav_element_class}>
                    <h2 id="collapsed-nav-title">Practice Buddy</h2>
                    <ul id="nav-menu">
                        <li># Modes</li>
                        <li># Chords</li>
                        <li># Charts</li>
                        <li># About</li>
                    </ul>
                </div>
                    <h2 className={this.state.nav_element_class+"-reg-title"} id="nav-title">Practice Buddy</h2>
            </div>
        );
    }
}

export default Nav;
