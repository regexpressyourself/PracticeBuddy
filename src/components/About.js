import React, { Component} from 'react';
import '../styles/About.css';
import logo from '../statics/img/practicebuddy_logo.png'

class About extends Component {
    render() {
        let link="https://github.com/regexpressyourself/PracticeBuddy";
        return (
            <div id="about-page">
                <div id="about-header">
                <h2>Practice Buddy: About</h2>
                <img src={logo} />

                </div>

                <p>
                    A web app to help practice modes, learn chords, 
                    and chart tunes for guitar and bass players.
                </p>

                <p><em>
                        Currently in development.
                </em></p>

                <p><b>Built With:</b>
                    <ul>
                        <li>
                            <b><a href="https://reactjs.org/">
                                    React
                            </a></b> - 
                            The web framework that powers the site
                        </li>
                        <li>
                            <b><a href="https://reacttraining.com/react-router/">
                                    React Router v. 4
                            </a></b> - 
                            Sits on top of React to enable route-based views without a backend server
                        </li>
                        <li>
                            <b><a href="https://webpack.github.io/">
                                    Webpack
                            </a></b> - 
                            A module builder automate development and production build processes
                        </li>
                        <li>
                            <b><a href="https://babeljs.io/">
                                    Babel
                            </a></b> - 
                            Transpiler to convert raw React code into browser-ready HTML and Javascript
                        </li>
                        <li>
                            <b><a href="https://github.com/facebookincubator/create-react-app">
                                    create-react-app
                            </a></b> - 
                            Boilerplate React configuration from Facebook
                        </li>
                    </ul>
                </p>
                <button onClick={() => window.location.href=link} 
                    className="github-link-btn btn">
                    See more on GitHub
                </button>
            </div>
            );
    }
}

export default About;
