import React, { Component } from 'react';
import accuWeather from '../api/accuWeather';
import Details from './Details';

export class Autocomplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      selected: {}
    };
  }

  componentWillReceiveProps() {
    this.setState({
      suggestions: this.props.suggestions
    })
  }

  selectCity = async (key) => {
    this.setState({
      suggestions: []
    });

    const response = await accuWeather.get('/forecasts/v1/daily/5day/' + key, {
      params: { apikey: 'zCjp1TGMSdSbRF7nFHubd9HWIhLYfAJY' }
    });

    this.setState({
      selected: response.data.DailyForecasts
    });

    console.log(response.data.DailyForecasts);

  }

  render() {

    let suggestionsListComponent;

    if (this.state.suggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion, index) => {
            return (
              <li key={suggestion.Key} onClick={() => this.selectCity(suggestion.Key)}>
                {suggestion.LocalizedName}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="container">
        <h2>Weather App</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label>Search CIty Name:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.props.onChange(e.target.value)}
                placeholder="Please Enter City Name."
              />
            </div>
            {suggestionsListComponent}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Details details={this.state.selected} />
          </div>
        </div>
      </div>
    );
  };
}
export default Autocomplete;