import React from 'react';
import $ from 'jquery';
import './modalCSS.css';

interface AppSettings {
    moodleToken?: string;
}


interface SettingsProps {
    enabled: boolean;
    settings: AppSettings;
    closeModal: () => void;
    //saveSettings: () => void;
}

interface SettingsState {
    settings: AppSettings;
}

class SettingsModal extends React.Component<SettingsProps, SettingsState> {
    constructor(props: Readonly<SettingsProps>) {
        super(props);
        this.state = {
            settings: {}
        };
        this.enableMoodle = this.enableMoodle.bind(this);
        this.disableMoodle = this.disableMoodle.bind(this);
    }

    static getDerivedStateFromProps(props: SettingsProps, state: SettingsState) {
        // Store prevId in state so we can compare when props change.
        // Clear out previously-loaded data (so we don't render stale stuff).
        state.settings = props.settings;
    }

    enableMoodle() {
        let tempSettings = this.state.settings;
        tempSettings.moodleToken=" ";
        this.setState({settings: tempSettings});
    }
    disableMoodle() {
        let tempSettings = this.state.settings;
        tempSettings.moodleToken=undefined;
        this.setState({settings: tempSettings});
    }

    render() {
        if (this.props.enabled)
            return (
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">User Settings</div>
                        <div className="modal-content">
                            <div className="modal-section">
                                <div className="moodle_int header">
                                    Enable Moodle Integration
                                </div>
                                <input type="text" className="moodle_int" value={this.props.settings.moodleToken ? this.props.settings.moodleToken : ''} disabled={this.props.settings.moodleToken ? false : true} />
                                <button id="cancel" className="moodle_int button" onClick={this.props.settings.moodleToken ? this.disableMoodle : this.enableMoodle}>{this.props.settings.moodleToken ? 'Disable' : 'Enable'}</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id="cancel" className="cancelButton" onClick={this.props.closeModal}>Cancel</button>
                            <button id="submit" className="saveButton" onClick={() => console.log('Save')}>Save</button>
                        </div>
                    </div>
                </div>
            );
        else
            return null;
    }
}

export default SettingsModal;

