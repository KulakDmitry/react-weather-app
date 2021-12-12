import "./App.css";
import React, { Component } from "react";
import SearchPanel from "./components/SearchPanel";
import Info from "./components/Info";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      weather: null,
      isLoading: false,
    };
  }

  searchingCity = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  url = "https://api.openweathermap.org/data/2.5/";

  key = "33178d46dea4c98a92d98aa6ea4ebc24";

  getData = () => {
    fetch(
      `${this.url}weather?q=${this.state.value}&appid=${this.key}&units=metric`
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          weather: response,
          isLoading: false,
        })
      );
  };

  startSearch = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    this.setState({ isLoading: true, weather: null }, this.getData);
  };

  clearInput = () => {
    this.setState({
      value: "",
      weather: null,
    });
  };

  render() {
    const { weather, value, isLoading } = this.state;
    return (
      <div
        className={
          weather && weather.weather ? `App ${weather.weather[0].main} ` : "App"
        }
      >
        <header>
          <h1>Weather now</h1>
        </header>
        <SearchPanel
          isLoading={isLoading}
          value={value}
          searchingCity={this.searchingCity}
          startSearch={this.startSearch}
          clearInput={this.clearInput}
        />
        {weather ? (
          <div className="display">
            {weather.cod === "404" ? (
              <p className="not-found">Not found</p>
            ) : (
              <Info weather={weather} />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
