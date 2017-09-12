import React, { Component} from 'react';
import PropTypes from 'prop-types';
import NoteSection from './NoteSection';
import Nav from './Nav';

class ModeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note_offset: 0,
            notes_array    : [],
            header_array   : [],
            interval_array : [],
            blurb_array    : []
        }
    }
    componentWillMount() {
        this.setState({
            data: this.props.mode_data
        }, this.get_header);
    }
    get_header() {
        let header_array   = [];
        let interval_array = [];
        let notes_array    = [];
        let blurb_array    = [];
        let i              = 0;
        for (let mode of this.state.data.modes) {
            header_array.push(
                <h1 id="mode-title" key={i++}>{mode.name}</h1>
            );
            interval_array.push(
                mode.notes
            );
            blurb_array.push(
                <p id="mode-blurb" key={i++}>{mode.blurb}</p>
            );
            notes_array.push(mode.notes.map((interval) => {
                return this.state.data.sharp_based_chromatic[this.state.data.mode_to_chromatic[interval]];
            }));
        }

        
        this.setState({
            header_array: header_array,
            notes_array: notes_array,
            interval_array: interval_array,
            blurb_array: blurb_array
        });
    }

    render() {
        return (
            <div id="mode-container">
            <div className="header">
            {this.state.header_array[this.state.note_offset]}
            </div>
            <div className="blurb">
            {this.state.blurb_array[this.state.note_offset]}
            </div>
            <div className="interval">
            {this.state.interval_array[this.state.note_offset]}
            </div>
            <div className="note">
            {this.state.notes_array[this.state.note_offset]}
            </div>
            <div className="left-btn">
            <button>
            left-btn
            </button>
            </div>
            <div className="mode-btn">
            mode-btn
            </div>
            <div className="right-btn">
            right-btn
            </div>
            <div className="pitch-btn">
            pitch-btn
            </div>
            </div>
        );
    }
}

export default ModeArea;
