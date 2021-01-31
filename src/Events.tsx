import React from 'react';
import $ from 'jquery';

interface EventsAppProps {

}

interface EventsAppState {
    name: string;
    eventsList: Array<Array<string>>;
}

const DATA = []

class Events extends React.Component<EventsAppProps, EventsAppState> {
    constructor(props: Readonly<EventsAppProps>) {
        super(props);
        this.state = {
            name:'zak',
            eventsList: []
        };
    }

    click = () => {}

    addEvent(name: string, startDate: string, endDate: string){
        let concatArr = [[name, startDate, endDate]];
        this.setState({ eventsList: this.state.eventsList.concat(concatArr) });
    }

    render() {
        // Plus icon
        // 
        let content = "";
        for (let i = 0; i < this.state.eventsList.length; i++){
            for (let j = 0; j < this.state.eventsList[i].length; j++){
                content = content.concat(this.state.eventsList[i][j]).concat(" ");
            }
            content = content.concat("<br/>");
        }
        return(
            <>
            <div className="header black-bg">
                Upcoming Deadlines &amp; Events<img src="plus-sign-svgrepo-com.svg" className="header-icon add-event" onClick={this.click}/><br/>
                </div>
                <div dangerouslySetInnerHTML={ {__html: content} }></div>
            </>
        );
                
    }

}

export default Events;