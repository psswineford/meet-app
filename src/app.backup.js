import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';




class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents  = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ? 
      events : 
      events.filter((event) => event.location === location);
      locationEvents = locationEvents.slice(0, eventCount)
      this.setState({
        events: locationEvents,
        currentLocation: location
      });
    });
  }

  updateNumberOfEvents = (eventCount) => {
    this.setState({
      numberOfEvents: eventCount
    });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, eventCount);
  };

  render(){
  return (
    <div className="App">
      <CitySearch locations ={this.state.locations} updateEvents={this.updateEvents}/>
      
      <NumberOfEvents numberOfEvents = {this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents}/>
      <EventList events ={this.state.events}/>
      
      
     
    </div>
  );
  }
};



export default App;
