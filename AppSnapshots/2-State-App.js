import React, { Component } from "react";
import "./App.css";

const PLACES = [
  { name: "Singapore", latitude: 1.2948, longitude: 103.8565 },
  { name: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { name: "Honolulu", latitude: 21.3069, longitude: -157.8583 },
  { name: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
  { name: "Menlo Park", latitude: 37.453, longitude: -122.1817 }
];

class WeatherDisplay extends Component {
  render() {
    return (
      <h1>
        Displaying weather for city located at {this.props.latitude}x{this.props.longitude}
      </h1>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}>
            {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          latitude={PLACES[activePlace].latitude}
          longitude={PLACES[activePlace].longitude}
        />
      </div>
    );
  }
}

export default App;
