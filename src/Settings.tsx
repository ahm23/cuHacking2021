import React from 'react';
import $ from 'jquery';
import './modalCSS.css';


interface SettingsProps {
    moodleToken: string;
    modifyToken: (newToken: string) => void;
    click: () => void;
}

interface SettingsState {

}

class SettingsModal extends React.Component<SettingsProps, SettingsState> {
    constructor(props: Readonly<SettingsProps>) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        Modal Title
                        
                    </div>
                    <div className="modal-content">

                    </div>
                    <div className="modal-footer">
                        <button id="cancel" className="cancelButton" onClick={() => console.log('Cancel')}>Cancel</button>
                        <button id="submit" className="saveButton" onClick={() => console.log('Save')}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsModal;

