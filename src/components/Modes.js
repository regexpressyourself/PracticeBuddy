import React, { Component} from 'react';
import NoteSection         from './NoteSection';
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
            modes:                  app_data.modes,
            mode_to_chromatic:      app_data.mode_to_chromatic,
            sharp_based_chromatic:  app_data.sharp_based_chromatic,
            flat_based_chromatic:   app_data.flat_based_chromatic,
            mode_list_display: "none",
            current_mode: 0,
            current_offset: 0,
            notes_array    : [],
            header_array   : [],
            interval_array : [],
            blurb_array    : [],
            left_keys:  ['H', 'h', 'j', 'J', 'ArrowLeft', 'ArrowDown', 'Backspace'],
            right_keys:  ['L', 'l', 'k', 'K', 'ArrowRight', 'ArrowUp', 'Space']
        };
        this.incrementMode= this.incrementMode.bind(this);
        this.decrementMode= this.decrementMode.bind(this);
        this.changeMode= this.changeMode.bind(this);
        this.changePitch= this.changePitch.bind(this);
        this.handleKeypress= this.handleKeypress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeypress);
    }

    componentWillUnmount() {
        document.removeeventlistener('keyup', this.handleKeypress);
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
        if (this.state.left_keys.indexOf(key) > -1) {
            this.decrementMode();
        }
        else if (this.state.right_keys.indexOf(key) > -1) {
            this.incrementMode();
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

    changeMode() {
        this.setState({
            current_offset: (this.state.current_offset + 1)
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

    render() {
        return (
            <div id="mode-container">
                <div style={{display: this.state.mode_list_display}} className="change-mode-list">
                    <li onClick={() => this.changeToMode("Ionian")}>
                        <p>
                            Ionian
                        </p>
                    </li>
                    <li onClick={() => this.changeToMode("Dorian")}>
                        <p>
                        Dorian
                    </p>
                    </li>
                    <li onClick={() => this.changeToMode("Phrygian")}>
                        <p>
                        Phrygian
                    </p>
                    </li>
                    <li onClick={() => this.changeToMode("Lydian")}>
                        <p>
                        Lydian
                    </p>
                    </li>
                    <li onClick={() => this.changeToMode("Mixolydian")}>
                        <p>
                        Mixolydian
                    </p>
                    </li>
                    <li onClick={() => this.changeToMode("Aeolian")}>
                        <p>
                        Aeolian
                    </p>
                    </li>
                    <li onClick={() => this.changeToMode("Locrian")} style={{ border:"none" }}>
                        <p>
                        Locrian
                    </p>
                    </li>
                </div>

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
                    sharp_based_chromatic={this.state.sharp_based_chromatic}
                    flat_based_chromatic={this.state.flat_based_chromatic}
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
                    <button onClick={this.changePitch} className="pitch-btn btn">
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
