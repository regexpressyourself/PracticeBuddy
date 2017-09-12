import React, { Component} from 'react';
import styles from '../styles/NoteSection.css';

class NoteSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:"",
            intervals:""
        };
    }
    componentWillReceiveProps(nextProps) {
        let notes = [];
        let intervals = [];
        for (let i = 0; i < nextProps.notes.length; i++) {
            notes.push(
                <span key={i} className={"note-cell note-cell"+i}>
                    {nextProps.notes[i]}
                </span>
            );
        }
            console.log(nextProps);
        for (let i = 0; i < nextProps.intervals.length; i++) {
            intervals.push(
                <span key={i} className={" interval-cell interval-cell"+i}>
                    {nextProps.intervals[i]}
                </span>
            );
        }
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
