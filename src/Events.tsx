import React from 'react';
import $ from 'jquery';

interface AppProps {}
interface AppState {

}

class Events extends React.Component<AppProps, AppState> {
    constructor(props: Readonly<AppProps>) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="header black-bg">Upcoming Deadlines &amp; Events</div>
            </>
        );
    }
}

export default Events;