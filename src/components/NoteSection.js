import React, { Component} from 'react';
import '../styles/NoteSection.css';

class NoteSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervals_array: props.intervals,
            notes_array: props.notes,
            flat_based_chromatic: props.flat_based_chromatic,
            flat_based_chromatic: props.flat_based_chromatic,
            offset: props.offset
        };
        this.generateNotes = this.generateNotes.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        let notes = [];
        let intervals = [];
        let i = 0;
        notes = nextProps.notes.map((note) => {
            note = note + this.state.offset;
            note = this.state.flat_based_chromatic[note];
            if (note.includes("#")) {
                note= <span>{note.replace("#","")}<span className="flat-sharp">#</span></span>
            }
            else if (note.includes("b")) {
                note= <span>{note.replace("b","")}<span className="flat-sharp">b</span></span>
            }
            return (
                <span key={i++} className={"note-cell note-cell"+i}>
                    {note}
                </span>
            );
        });
        intervals = nextProps.intervals.map((interval) => {
            if (interval.includes("-")) {
                interval = <span>{interval.replace("-","")}<span className="flat-sharp">-</span></span>
            }
            return (
                <span key={i} 
                    className={" interval-cell interval-cell"+i++}>
                    {interval}
                </span>
            );
        });
        this.setState({
            intervals: intervals,
            notes: notes,
            notes_array: nextProps.notes,
            intervals_array: nextProps.intervals,
            offset: nextProps.offset
        }, this.generateNotes());
    }

    componentWillMount() {
        this.generateNotes();
    }

    generateNotes() {
        let notes = [];
        let intervals = [];
        let i = 0;
        notes = this.state.notes_array.map((note) => {
            note = (note + this.state.offset) % 12;
            note = this.state.flat_based_chromatic[note];
            return (
                <span key={i++} className={"note-cell note-cell"+i}>
                    {note}
                </span>
            );
        });
        intervals = this.state.intervals_array.map((interval) => {
            return (
                <span key={i} 
                    className={" interval-cell interval-cell"+i++}>
                    {interval}
                </span>
            );
        });
        console.log(notes);
        this.setState({
            intervals: intervals,
            notes: notes
        });
    }
    render() {
        return (
            <div className="center-grid-area note-section">
                <div className="note-grid">
                        {this.state.intervals}
                        {this.state.notes}
                </div>
            </div>
        );
    }
}

export default NoteSection;
