import React, { Component} from 'react';
import '../styles/NoteSection.css';

class NoteSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervals_array: props.intervals,
            notes_array: props.notes,
            chromatic: props.chromatic,
            offset: props.offset
        };
        this.generateNotes = this.generateNotes.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        let notes = [];
        let intervals = [];
        let i = 0;
        let offset = nextProps.offset === undefined ? 
             this.state.offset :nextProps.offset ;
        let chromatic = nextProps.chromatic ? 
            nextProps.chromatic : this.state.chromatic;
        notes = this.state.notes;
        if (nextProps.notes) {
            notes = nextProps.notes.map((note) => {
                if (note === undefined) { return -1; }
                note = (note + offset) % 12;
                note = chromatic[note];
                if (note.includes("#")) {
                    note= <span>{note.replace("#","")}
                        <span className="flat-sharp">#</span>
                        </span>
                }
                else if (note.includes("b")) {
                    note= <span>{note.replace("b","")}
                        <span className="flat-sharp">b</span>
                        </span>
                }
                return (
                    <span key={i++} className={"note-cell note-cell"+i}>
                        {note}
                    </span>
                );
            });
        }
        intervals=this.state.intervals;
        if (nextProps.intervals) {
            intervals = nextProps.intervals.map((interval) => {
                if (!interval){ return -1; }
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
        }
        this.setState({
            intervals: intervals,
            notes: notes,
            notes_array: nextProps.notes ? nextProps.notes : this.state.notes,
            intervals_array: nextProps.intervals ? nextProps.intervals : this.state.intervals,
            offset: nextProps.offset ? nextProps.offset : this.state.offset
        }, this.generateNotes(nextProps.offset));
    }

    componentWillMount() {
        this.generateNotes();
    }

    generateNotes(offset) {
        if (!offset) {offset=this.state.offset}
        let new_notes = [];
        let intervals = [];
        let i = 0;
        new_notes = this.state.notes_array.map((note) => {
            note = (note + offset) % 12;
            note = this.state.chromatic[note];
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
        this.setState({
            intervals: intervals,
            notes: new_notes
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
