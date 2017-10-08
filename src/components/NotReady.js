import React, { Component} from 'react';
import '../styles/NotReady.css';

class NotReady extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="not-ready">
                This page is not ready yet.
                <p>
                    {this.props.blurb}
                </p>
                <button onClick={() => window.location.href=this.props.link} 
                    className="github-link-btn btn">
                    {this.props.button_text}
                </button>
            </div>
            );
    }
}

export default NotReady;
