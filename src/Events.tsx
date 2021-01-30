import React from 'react';
import $ from 'jquery';

interface AppProps {
    
}

interface AppState {
    name: string;
}

class Events extends React.Component<AppProps, AppState> {
    constructor(props: Readonly<AppProps>) {
        super(props);
        this.state = {
            name:'zak'
        };
    }

    render() {
        // Plus icon
        // 
        return (
            <>
                <div className="header black-bg">Upcoming Deadlines &amp; Events</div>
            </>
        );
    }
}

class AddEvent extends React.Component<AppProps, AppState> {

    render() {
        // Plus icon
        // 
        return (
            <>
                <div></div>
            </>
        );
        }
}

export default Events;