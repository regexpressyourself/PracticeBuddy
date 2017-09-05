import React, { Component } from 'react';
import logo from '../statics/logo.svg';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modes: [
                {
                    name: "Lydian",
                    notes: ["1", "2",  "3",  "4+", "5",  "6",  "7"]
                },
                {
                    name: "Ionian",
                    notes: ["1", "2",  "3",  "4",  "5",  "6",  "7"]
                },
                {
                    name: "Dorian",
                    notes: ["1", "2",  "3-", "4",  "5",  "6",  "7-"]
                },
                {
                    name: "Mixolydian",
                    notes: ["1", "2",  "3",  "4",  "5",  "6",  "7-"]
                },
                {
                    name: "Aeolian",
                    notes: ["1", "2",  "3-", "4",  "5",  "6-", "7-"]
                },
                {
                    name: "Phrygian",
                    notes: ["1", "2-", "3-", "4",  "5",  "6-", "7-"]
                },
                {
                    name: "Locrian",
                    notes: ["1", "2-", "3-", "4",  "5-", "6-", "7-"]
                }
            ]
        }
    } 
    componentWillMount() {
        let i = 0;
        let modes = this.state.modes.map((mode) => {
            let note_html = [];

            mode["notes"].forEach((note) => {
                note_html.push(<td key={i++}>{note}</td>);
            });

            let return_html = (
                <tr key={i++}>
                    <td>{mode["name"]}</td>
                    {note_html}
                </tr>
            );
            return return_html;
        });

        this.setState({
            modes: modes
        });
    }
    render() {
        return (
            <div>
                <table id="mode-table">
                    <tbody>
                    {this.state.modes}
                    </tbody>
                </table>
            </div>
            );
    }
}

export default App;
