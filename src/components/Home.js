import React, { Component} from 'react';
import logo_image from '../statics/img/practicebuddy_logo.png';

class Home extends Component {

    render() {
        return (
            <div id="home">
                <img id="homepage-image" src={logo_image} />
                <p>
                    Practice Buddy is a quick and easy way to reference musical modes, chords, and charts. 
                </p>
            </div>
        );
    }
}

export default Home;
