import React, { Component} from 'react';
import '../styles/Choosers.css';

class ModeChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode_list_display: this.props.mode_list_display
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            mode_list_display: nextProps.mode_list_display
        });
    }

    render() {
        return (
            <div style={{display: this.state.mode_list_display}} className="chooser-list change-mode-list">
                <li onClick={() => this.props.changeToMode("Ionian")}>
                    <p>
                        Ionian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Dorian")}>
                    <p>
                        Dorian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Phrygian")}>
                    <p>
                        Phrygian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Lydian")}>
                    <p>
                        Lydian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Mixolydian")}>
                    <p>
                        Mixolydian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Aeolian")}>
                    <p>
                        Aeolian
                    </p>
                </li>
                <li onClick={() => this.props.changeToMode("Locrian")} style={{ border:"none" }}>
                    <p>
                        Locrian
                    </p>
                </li>
            </div>
        );
    }
}

export default ModeChooser;
