import React, {Component} from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number <= 0 || number > 32) {
          return window.alert('Choose number between 1-32');
        } else {
          this.setState({ 
            numberOfEvents: number,
          });
        }
      };

    render() {
        return (
            <div className="NumberOfEvents">
              <p>Number of Events</p>
                <input type="number" value={this.state.numberOfEvents} className="NumberOfEventsValue" onChange={(e) => this.handleInputChanged(e)} />
            </div>
        );
    }

}
export default NumberOfEvents;