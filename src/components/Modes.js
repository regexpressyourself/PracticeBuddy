import React, { Component} from 'react';
import NoteSection         from './NoteSection';
import ModeChooser         from './ModeChooser';
import NoteChooser         from './NoteChooser';
import '../styles/Modes.css';
import app_data            from '../config/data.js';
import chevronLeft         from '../statics/feather/chevron-left.svg';
import chevronRight        from '../statics/feather/chevron-right.svg';
import music               from '../statics/feather/music.svg';
import list                from '../statics/feather/list.svg';


class Modes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            app_data:               app_data,
            modes:                  app_data.modes,
            mode_to_chromatic:      app_data.mode_to_chromatic,
            current_chromatic:      app_data.sharp_based_chromatic,
            sharp_based_chromatic:  app_data.sharp_based_chromatic,
            flat_based_chromatic:   app_data.flat_based_chromatic,
            mode_list_display: "none",
            note_list_display: "none",
            current_mode: 0,
            current_offset: 0,
            notes_array    : [],
            header_array   : [],
            interval_array : [],
            blurb_array    : []
        };
        this.incrementMode= this.incrementMode.bind(this);
        this.decrementMode= this.decrementMode.bind(this);
        this.changePitch= this.changePitch.bind(this);
        this.handleKeypress= this.handleKeypress.bind(this);
        this.changeToMode= this.changeToMode.bind(this);
        this.changeToNote= this.changeToNote.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeypress);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeypress);
    }
    componentWillMount() {
        let header_array   = [];
        let notes_array   = [];
        let interval_array = [];
        let blurb_array    = [];
        let mode_to_chromatic = this.state.mode_to_chromatic;
        let i              = 0;
        for (let mode of this.state.modes) {
            header_array.push(
                <h1 id="mode-title" key={i++}>{mode.name}</h1>
            );
            interval_array.push(
                mode.notes
            );
            blurb_array.push(
                <p id="mode-blurb" key={i++}>{mode.blurb}</p>
            );
            notes_array.push(mode.notes.map((note) => {
                return mode_to_chromatic[note];
            }));
        }
        this.setState({
            header_array: header_array,
            interval_array: interval_array,
            notes_array: notes_array,
            blurb_array: blurb_array
        });
    }
    handleKeypress(event) {
        let key = event.key;

        let up_keys  = ['k', 'K', 'ArrowUp'];

        let down_keys  = ['j', 'J', 'ArrowDown'];

        let left_keys  = ['H', 'h', 'ArrowLeft', 'Backspace'];

        let right_keys  = ['L', 'l', 'ArrowRight', 'Space'];

        if (left_keys.indexOf(key) > -1) {
            this.decrementMode();
        }
        else if (right_keys.indexOf(key) > -1) {
            this.incrementMode();
        }
        else if (up_keys.indexOf(key) > -1) {
            console.log("inc note");
            this.incrementNote();
        }
        else if (down_keys.indexOf(key) > -1) {
            console.log("dec note");
            this.decrementNote();
        }

    }

    incrementMode() {
        this.setState({
            current_mode: (this.state.current_mode + 1) %7
        });
    }

    decrementMode() {
        this.setState({
            current_mode: (this.state.current_mode + 6) % 7
        });
    }
    incrementNote() {
        this.setState({
            current_offset: (this.state.current_offset + 13) %12
        });
    }

    decrementNote() {
        this.setState({
            current_offset: (this.state.current_offset + 11) % 12
        });
    }

    changePitch() {
        this.setState({
            current_offset: (this.state.current_offset + 11) 
        });
    }
    unsetModeChooser() {
        this.setState({
            mode_list_display: "none"
        });
    }
    setModeChooser() {
        this.setState({
            mode_list_display: "flex"
        });
    }
    changeToMode(new_mode) {
        let current_mode = 0;
        let mode_string = this.state.modes[current_mode].name;
            while ((mode_string !== new_mode) && current_mode < 8) {
            current_mode++;
        mode_string = this.state.modes[current_mode].name;
        }
        this.setState({
            current_mode: current_mode
        }, this.unsetModeChooser());
    }
    unsetNoteChooser() {
        this.setState({
            note_list_display: "none"
        });
    }
    setNoteChooser() {
        this.setState({
            note_list_display: "flex"
        });
    }

    changeToNote(new_note) {
        let i = 0;
        let chromatic_array;
        if (new_note.indexOf("b") !== -1) {
            chromatic_array = this.state.flat_based_chromatic;
        }
        else if (new_note.indexOf("#") !== -1) {
            chromatic_array = this.state.sharp_based_chromatic;
        }
        else {
            // TODO figure out sharp vs flat rule on 
            // natural starting pitches
            chromatic_array = this.state.flat_based_chromatic;
        }

        while (chromatic_array[i] !== new_note && i < 20) {
            i++;
        }
        this.setState({
            current_offset: i,
            current_chromatic: chromatic_array
        }, this.unsetNoteChooser());
    }

    render() {
        return (
            <div id="modes-page">
                <ModeChooser changeToMode={this.changeToMode} 
                    mode_list_display={this.state.mode_list_display} />
                <NoteChooser changeToNote={this.changeToNote}
                    note_list_display={this.state.note_list_display} 
                    cool_notes={this.state.app_data.cool_notes} />

                {/* Mode and Blurb */}

                <div className="center-grid-area header">
                    <div>
                        {this.state.header_array[this.state.current_mode]}
                        {this.state.blurb_array[this.state.current_mode]}
                    </div>
                </div>

                { /* Notes */ }

                <NoteSection notes={this.state.notes_array[this.state.current_mode]} 
                    intervals={this.state.interval_array[this.state.current_mode]}
                    offset={this.state.current_offset}
                    mode_to_chromatic={this.state.mode_to_chromatic}
                    chromatic={this.state.current_chromatic}
                />

                { /* Buttons */ }

                <div className="center-grid-area left-btn-area" >
                    <button onClick={this.decrementMode} className="left-btn btn">
                    <img className="fa" src={chevronLeft} alt="" />
                    </button>

                </div>
                <div className="center-grid-area mode-btn-area">
                    <button onClick={() => this.setModeChooser()} className="mode-btn btn" >
                    <img className="fa" src={list} alt="" />
                    <span className="btn-text">
                        Choose Mode 
                    </span>
                    </button>

                </div>
                <div className="center-grid-area right-btn-area">
                    <button onClick={this.incrementMode} className="right-btn btn">
                    <img className="fa" src={chevronRight} alt="" />
                    </button>
                </div>
                <div  className="center-grid-area pitch-btn-area">
                    <button onClick={() => this.setNoteChooser()} className="pitch-btn btn">
                    <img className="fa" src={music} alt="" />
                        <span className="btn-text">
                        Starting Pitch 
                        </span>
                    </button>

                </div>
            </div>
        );
    }
}

export default Modes;
