import Axios from "axios";
import React, { Component } from "react";

const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
const city = 'Sydney';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      sunrise: 0,
    }
  }

  async componentDidMount() {
    const response = await Axios.get(api);
    const { data: { city: { sunrise } } } = response;

    this.setState({
      sunrise,
      isLoading: false,
    })
  }

  render() {
    const { isLoading, sunrise } = this.state;
    return <>
      <h1>Sydney weather</h1>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && sunrise}
    </>
  }
}

export default Weather;