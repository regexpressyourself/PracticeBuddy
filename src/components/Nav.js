import React, { Component} from 'react';
import '../styles/Nav.css';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_element_class: "hidden-nav"
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.setBurgerRef = this.setBurgerRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleNav() {
        if (this.state.nav_element_class === "hidden-nav") {
            this.setState({
                nav_element_class: "shown-nav"
            });
        }
        else {
            this.setState({
                nav_element_class: "hidden-nav"
            });
        }
    }    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeeventlistener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    setBurgerRef(node) {
        this.burgerRef  = node;
    }
    handleClickOutside(event) {
        if (!(this.burgerRef && this.burgerRef.contains(event.target)) &&
            this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                nav_element_class:  "hidden-nav"
            });
        }
    }
    render() {
        return (
            <div className="nav">
                <p ref={this.setBurgerRef} 
                    onClick={this.toggleNav}
                    id="hamburger-spans" 
                    className={this.state.nav_element_class+"-span"}>
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
                <div id={"nav-background-clicker-"+this.state.nav_element_class}>
                </div>
                    <h2 className={this.state.nav_element_class+"-reg-title"} id="nav-title">Practice Buddy</h2>
            </div>
        );
    }
}

export default Nav;
