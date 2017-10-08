import React, { Component} from 'react';
import '../styles/Nabbar.css';
import NabbarMenu from './NabbarMenu';

class Nabbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav_element_class: "hidden-nav",
            menu_items: props.menu_items ? props.menu_items : []
        };

        this.toggleNav          = this.toggleNav.bind(this);
        this.setSideNavRef      = this.setSideNavRef.bind(this);
        this.setBurgerRef       = this.setBurgerRef.bind(this);
        this.setTitleRef        = this.setTitleRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        /* Register an event listener for user clicks */
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillReceiveProps(nextProps) {
        /* Get the menu items objects from props */
        this.setState({
            menu_items: nextProps.menu_items
        });
    }

    componentWillUnmount() {
        /* Remove event listener with the component dismount */
        document.removeeventlistener('mousedown', this.handleClickOutside);
    }

    toggleNav() {
        /* Move the side nav bar on and off the page on small screens */
        let nav_element_class;

        if (this.state.nav_element_class === "hidden-nav")
            nav_element_class = "shown-nav";
        else
            nav_element_class = "hidden-nav";

        this.setState({
            nav_element_class: nav_element_class
        });
    }    

    /* Set ref attributes for elements with event listeners */
    setTitleRef(node) {
        /* Title on nav */
        this.title_ref = node;
    }

    setSideNavRef(node) {
        /* Side nav itself */
        this.side_nav_ref = node;
    }

    setBurgerRef(node) {
        /* Burger menu */
        this.burger_ref  = node;
    }

    handleClickOutside(event) {
        /* Closes the side nav when users click outside */

        /* Get the relevant elements */
        let burger_ref   = this.burger_ref;
        let side_nav_ref = this.side_nav_ref;
        let title_ref    = this.title_ref;

        /* Make sure each node has been initialized */
        if (!(burger_ref && side_nav_ref && title_ref)){
            return;
        }

        /* Check whether or not they were clicked */
        let clicked_burger   =  burger_ref.contains(event.target);
        let clicked_title    =  title_ref.contains(event.target);
        let clicked_side_nav =  side_nav_ref.contains(event.target);

        /* If the click was outside of the specified areas, 
         * close the nav */
        if (!clicked_side_nav &&
            !clicked_burger   &&
            !clicked_title)   {
            this.setState({
                nav_element_class:  "hidden-nav"
            });
        }
    }

    render() {
        /* nav_toggle holds either "shown-nav" or "hidden-nav" 
         * to toggle the side navigation bar's visibility.  */
        let nav_toggle = this.state.nav_element_class;

        return (
            <div className="nav">

                {/* Top nav bar with title and hamburger menu */}
                <div className={"top-bar "+nav_toggle+"-top-bar"} >

                    {/* Nav bar title */}
                    <h2 ref={this.setTitleRef} id="nav-title"
                        className={nav_toggle+"-title"} >
                        <a href="/practicebuddy" >
                            Practice Buddy
                        </a>
                    </h2>

                    {/* Hamburger menu */}
                    <p id="hamburger" 
                        className={nav_toggle+"-burger"}
                        ref={this.setBurgerRef} 
                        onClick={this.toggleNav}>

                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>

                    </p>

                </div>

                {/* Nav Menu (menu items listed in NabbarMenu component) */}
                <div id="nav-menu-container" 
                    className={nav_toggle}
                    ref={this.setSideNavRef}>
                    <NabbarMenu menu_items={this.state.menu_items} />
                </div>

                {/* Background Clicker (see Nav.css for details) */}
                <div id={"nav-background-clicker-"+nav_toggle}>
                </div>

            </div>
        );
    }
}

export default Nabbar;
