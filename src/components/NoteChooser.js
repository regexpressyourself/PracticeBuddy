import React, { Component} from 'react';
import '../styles/Choosers.css';

class NoteChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note_list_display: this.props.note_list_display,
            note_list_class: "on",
            cool_notes: props.cool_notes,
            flat_sharp_list_class: "off",
            second_screen: ""
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            note_list_display: nextProps.note_list_display
        });
    }
    storeNoteName(note_name) {
        let is_flat = this.state.cool_notes[note_name].indexOf("flat") !== -1;
        let is_sharp = this.state.cool_notes[note_name].indexOf("sharp") !== -1;
        let second_screen = [];
        let note_reminder = ( <span key="1" id="note-reminder">
            <span>
                {note_name}
            </span>
        </span>);
        let flat_span = ( <span key="2" onClick={() => this.storeFlatSharp('b') }>
            <span>
                b
            </span>
        </span>);
        let sharp_span = ( <span key="3" onClick={() => this.storeFlatSharp('#')}>
            <span>
                #
            </span>
        </span>);
        let natural_span = ( <span key="4" onClick={() => this.storeFlatSharp('natural')}>
            <span>
                natural
            </span>
        </span>);

        if (is_flat && is_sharp) {
            second_screen = [ note_reminder, sharp_span, natural_span, flat_span ]

        }
        else if (is_flat) {
            second_screen = [ note_reminder, natural_span, flat_span ]
        }
        else {
            second_screen = [ note_reminder, sharp_span, natural_span ]
        }

        this.setState({
            second_screen: second_screen,
            note_name: note_name,
            note_list_class: "off",
            flat_sharp_list_class: "on",
        });
    }
    storeFlatSharp(flat_sharp) {
        this.setState({
            second_screen: "",
            note_list_class: "on",
            flat_sharp_list_class: "off",
        }, this.sendNoteToParentComponent(flat_sharp));
    }
    sendNoteToParentComponent(flat_sharp_param) {
        let note = "";
        if (flat_sharp_param === 'natural') {
            note = this.state.note_name;
        }
        else {
            note = this.state.note_name + flat_sharp_param;
        }
        this.props.changeToNote(note);
    }

    render() {
        return (
            <div style={{display: this.state.note_list_display}} 
                className="chooser-list change-note-list">
                <div className={"note-chooser-grid "+this.state.note_list_class}>
                    <span id="note1"
                        onClick={() => this.storeNoteName('C')}>
                        <span>C</span>
                    </span>
                    <span id="note2"
                        onClick={() => this.storeNoteName('D')}>
                        <span>D</span>
                    </span>
                    <span id="note3"
                        onClick={() => this.storeNoteName('E')}>
                        <span>E</span>
                    </span>
                    <span id="note4"
                        onClick={() => this.storeNoteName('F')}>
                        <span>F</span>
                    </span>
                    <span id="note5"
                        onClick={() => this.storeNoteName('G')}>
                        <span>G</span>
                    </span>
                    <span id="note6"
                        onClick={() => this.storeNoteName('A')}>
                        <span>A</span>
                    </span>
                    <span id="note7"
                        onClick={() => this.storeNoteName('B')}>
                        <span>B</span>
                    </span>
                </div>
                <div className={"flat-sharp-chooser-grid " + this.state.flat_sharp_list_class}
                    style={{ gridTemplateRows:"1fr repeat(" +
                    (this.state.second_screen.length-1) +
                    ", 2fr)" }} >
                    {this.state.second_screen}
                </div>
            </div>
            );
        }
}

export default NoteChooser;
