import React from 'react';
import $ from 'jquery';

interface AppProps {}
interface AppState {

}

class Schedule extends React.Component<AppProps, AppState> {
    constructor(props: Readonly<AppProps>) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="header red-bg">Schedule</div>
                <div id="schedule" className="schedule">
                </div>
            </>
        );
    }
}

export default Schedule;