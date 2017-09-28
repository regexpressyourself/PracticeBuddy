import React, { Component} from 'react';

class NabbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_items: props.menu_items ? props.menu_items : [],
            // li_elements will store the actual <li> tags for our nav
            li_elements: []
        };
    }

    componentWillReceiveProps(nextProps) {
        /* Get the menu items objects from props */
        this.setState({
            menu_items: nextProps.menu_items
        });
    }

    componentWillMount() {
        /* Create the menu list elements, stored in this.sate.li_elements */
        let li_elements = this.state.menu_items.map((menu_item) => {
            if (menu_item.href) {
                return (
                    <li key={menu_item.title} className="nav-menu-item">
                        <a  className="nav-menu-link" 
                            href={menu_item.href}>
                            <span>
                            {menu_item.title}
                        </span>
                        </a>
                    </li>
                );
            }
            else if (menu_item.onClick) {
                return (
                    <li key={menu_item.title} className="nav-menu-item">
                        <span  className="nav-menu-link" 
                            onClick={menu_item.onClick}>
                            <span>
                            {menu_item.title}
                        </span>
                        </span>
                    </li>
                );
            }
        });
        this.setState({
            li_elements: li_elements
        });
    }

    render() {
        return (
            <ul id="nav-menu">
                {/* Show the list elements created in componentWillMount */}
                {this.state.li_elements}
            </ul>
        );
    }
}

export default NabbarMenu;
