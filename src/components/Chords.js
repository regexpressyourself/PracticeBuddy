import React, { Component} from 'react';
import NotReady from '../components/NotReady';
//import styles from './Chords.css';

class Chords extends Component {
    render() {
        let data = {
            blurb: `The Chords section of the site is still 
            in development. If you'd like to help, feel free 
            to check out the project's progress:`,
            button_text:"Chords Project",
            link:"https://github.com/regexpressyourself/PracticeBuddy/projects/2"

        }
        return (
            <div id="chords-page">
                <NotReady blurb={data.blurb} 
                    button_text={data.button_text}
                    link={data.link} />
            </div>
            );
    }
}

export default Chords;
