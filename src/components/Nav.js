import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center-grid-area nav">
                <p id="nav-title">Practice Buddy</p>
            </div>
        );
    }
}

export default Nav;
