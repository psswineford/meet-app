import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
            <div>
                <div>
                    {!navigator.onLine ? (
                        <WarningAlert text="You are offline! You're looking at cached data." />
                    ) : (
                        ""
                    )}
                </div>

                <ul className="EventList">
                    {events.map(event =>
                        <li key={event.id}>
                            <Event event={event} />
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default EventList;