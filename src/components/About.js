import React, { Component} from 'react';
//import styles from './About.css';
import NotReady from '../components/NotReady';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NotReady />
            </div>
        );
    }
}

export default About;
