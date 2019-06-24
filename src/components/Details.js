import React, { Component } from 'react';

export class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    let html;
    console.log(this.props.details);
    if (this.props.details.length) {
      html = this.props.details.map((day) => {
        return (
          <div key={day.EpochDate} className="list-group-item list-group-item-action ">
            {day.Date.toLocaleString()}
            <div className="row">
              <div className="col-sm-6">
                <b>Day:</b> <img alt={day.Day.IconPhrase} width="30" src={`https://vortex.accuweather.com/adc2010/images/slate/icons/${day.Day.Icon}.svg`} />
                <span>{day.Day.IconPhrase}</span>
              </div>
              <div className="col-sm-6">
                <b>Night:</b> <img alt={day.Night.IconPhrase} width="30" src={`https://vortex.accuweather.com/adc2010/images/slate/icons/${day.Night.Icon}.svg`} />
                <span>{day.Day.IconPhrase}</span>
              </div>
              <div className="col-sm-12">
                Temperature:
                              <div className="row">
                  <div className="col-sm-6">
                    <b>Maximum:</b> {day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}
                  </div>
                  <div className="col-sm-6">
                    <b>Minimum:</b> <b>{day.Temperature.Minimum.Value} {day.Temperature.Minimum.Unit}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      });
    }

    return (
      <div className="list-group">
        {html}
      </div>
    )
  }

}

export default Details;