import React from 'react';
import $ from 'jquery';
import Schedule from './Schedule';
import Events from './Events';
import AddEvent from './Events';
import SettingsModal from './Settings';





interface AppProps {}
interface AppState {
    addEventModal: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: Readonly<AppProps>) {
        super(props);
        this.state = {
            addEventModal: false
        };  
        
    }

    saveNewToken(newToken: string) {

    }


    render() {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/http://158.69.1.52/search/user_events/_doc/testUser",
            type: "GET",
            headers: {"Authorization": "ApiKey MVBUaHhYWUJ6akMxbF93NF9QYlA6WVJPTlJxT0lSNjZ1UWU4Yklia0E5QQo="}
        }).done(function(dat) {
            console.log(dat)
        });
        return (
            <>
                <header>
                    cuLearn++
                    <div>
                        <svg id="revert" className="header-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="533.333px" height="533.333px" viewBox="0 0 533.333 533.333" xmlSpace="preserve"><g>	<path d="M416.667,333.333v-66.666H250V200h166.667v-66.667l100,100L416.667,333.333z M383.333,300v133.333H216.667v100l-200-100V0   h366.667v166.667H350V33.333H83.333L216.667,100v300H350V300H383.333z" /></g></svg>
                    </div>
                </header>
                <main className="dash">
                    <section className="header">
                    <div id="dash-title">Today's Panel - Thursday, January 1<sup>st</sup></div>
                    <div>
                        <svg version="1.1" id="prev-day" className="chevron" x="0px" y="0px" fill="#000000" viewBox="0 0 407.436 407.436"><polygon points="315.869,21.178 294.621,0 91.566,203.718 294.621,407.436 315.869,386.258 133.924,203.718 " /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                        <svg version="1.1" id="next-day" className="chevron" x="0px" y="0px" fill="#000000" viewBox="0 0 407.436 407.436"><polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 " /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                    </div>
                    </section>
                    <section id="dash-content" className="content_wrapper">
                    <section id="dash-content-left" className="content">
                        <div className="panel">
                            <Schedule />
                        </div>
                        <div className="panel">
                        <div className="header red-bg">Classes</div>
                        </div>
                    </section>
                    <section id="dash-content-right" className="content">
                        <div className="panel">
                            <Events />
                        </div>
                    </section>
                    </section>
                    <SettingsModal moodleToken="ahgahah" modifyToken={this.saveNewToken} click={() => this.setState({addEventModal: true})}/>
                </main>
            </>
        );
    }
}

export default App;