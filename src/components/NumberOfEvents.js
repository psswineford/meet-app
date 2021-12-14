import React, {Component} from 'react';
import { ErrorAlert } from './Alert';
import '../App.css';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number <= 0 || number > 32) {
          this.setState({
            numberOfEvents: number,
            infoText:'Please enter a number between 1 and 32.'
          });
        } else {
          this.setState({ 
            numberOfEvents: number,
            infoText:''
          });
        }
        this.props.updateNumberOfEvents(number);
      };

    render() {
        return (
            
            <div className="NumberOfEvents">
              <div className="NumberOfEventsErrorText">
                <ErrorAlert text={this.state.infoText}/>
                ...
              </div>
              <p>Number of Events</p>
                <input type="number" value={this.state.numberOfEvents} className="NumberOfEventsValue" onChange={(e) => this.handleInputChanged(e)} />
            </div>
        );
    }

}
export default NumberOfEvents;