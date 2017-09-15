import React, { Component} from 'react';
import PropTypes from 'prop-types';
import NoteSection from './NoteSection';
import Nav from './Nav';
import chevronLeft from '../statics/feather/chevron-left.svg';
import chevronRight from '../statics/feather/chevron-right.svg';
import music from '../statics/feather/music.svg';
import list from '../statics/feather/list.svg';


class ModeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note_offset: 0,
            notes_array    : [],
            header_array   : [],
            interval_array : [],
            blurb_array    : []
        };
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
    incrementMode() {
        console.log("increment mode");
    }

    decrementMode() {
        console.log("decrement mode");
    }

    changeMode() {
        console.log("change mode");
    }
    changePitch() {
        console.log("change pitch");
    }

    render() {
        return (
            <div id="mode-container">
                <Nav />

                {/* Mode and Blurb */}

                <div className="center-grid-area header">
                    <div>
                        {this.state.header_array[this.state.note_offset]}
                        {this.state.blurb_array[this.state.note_offset]}
                    </div>
                </div>

                { /* Notes */ }

                <NoteSection notes={this.state.notes_array[this.state.note_offset]} 
                    intervals={this.state.interval_array[this.state.note_offset]}/>

                { /* Buttons */ }

                <div onClick={this.decrementMode} className="center-grid-area left-btn">

                    <img className="fa" src={chevronLeft} alt="" />
                </div>
                <div onClick={this.changeMode} className="center-grid-area mode-btn">
                    <img className="fa" src={list} alt="" />
                    <span className="btn-text">
                        Choose Mode 
                    </span>

                </div>
                <div onClick={this.incrementMode} className="center-grid-area right-btn">
                    <img className="fa" src={chevronRight} alt="" />
                </div>
                <div onClick={this.changePitch} className="center-grid-area pitch-btn">

                    <img className="fa" src={music} alt="" />
                        <span className="btn-text">
                        Starting Pitch 
                        </span>
                </div>
            </div>
        );
    }
}

export default ModeArea;
