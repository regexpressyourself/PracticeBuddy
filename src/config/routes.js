import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import '../styles/index.css';
import App from '../components/App';

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>
)

export default routes;
