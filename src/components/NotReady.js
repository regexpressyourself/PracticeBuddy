import React, { Component} from 'react';
import styles from '../styles/NotReady.css';

class NotReady extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="not-ready">
                This page is not ready yet.

            </div>
        );
    }
}

export default NotReady;
