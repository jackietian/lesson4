// import Axios from "axios";
// import React, { Component } from "react";

// const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
// const city = 'Sydney';
// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

// class Weather extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true,
//       sunrise: 0,
//     }
//   }

//   async componentDidMount() {
//     const response = await Axios.get(api);
//     const { data: { city: { sunrise } } } = response;

//     this.setState({
//       sunrise,
//       isLoading: false,
//     })
//   }

//   render() {
//     const { isLoading, sunrise } = this.state;
//     return <>
//       <h1>Sydney weather</h1>
//       {isLoading && <h1>Loading...</h1>}
//       {!isLoading && sunrise}
//     </>
//   }
// }

// export default Weather;

// weather component
// sydney and sunrise time

// import Axios from 'axios'
// import React from 'react'

// class Weather extends React.Component {
//   constructor() {
//     super() // this
//     this.state = {
//       sunrise: '',
//       loading: true
//     }
//   }

//   async componentDidMount() {
//     // do ajax calls
//     // Axios.get(api)
//     // .then((res) => {
//     //   console.log(res.data.city.sunrise)
//     //   this.setState({
//     //     sunrise: res.data.city.sunrise,
//     //     loading: false,
//     //   })
//     // })

//     const { data: { city: { sunrise } } } = await Axios.get(api)
//     this.setState({
//       sunrise,
//       loading: false,
//     })

//   }

//   render() {
//     return <>
//       <h1>Sydney</h1>
//       {this.state.loading && <h2>Loading...</h2>}
//       {!this.state.loading && <h2>sunrise time: {this.state.sunrise}</h2>}
//     </>
//   }
// }

// export default Weather

// class Weather extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       sunrise: ''
//     }
//   }

//   async componentDidMount() {
//     // API call
//     try {
//       const res = await Axios.get(api)
//       const { data: { city: { sunrise } } } = res
//       this.setState({
//         sunrise: sunrise
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   render() {
//     return <h1>weather sunrise: {this.state.sunrise}</h1>
//   }
// }

// export default Weather

import React, { useEffect, useState } from "react";
import Axios from "axios";

const API_key = "c8e76c9b4fa36112b0d8aff693cee1fc";
const city = "Sydney";
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    /**
     * an effect hook should return nothing or a clean up function
     * but async function returns a promise
     * That's why using async directly in the useEffect function isn't allowed. 
     * Let's implement a workaround for it, by using the async function inside the effect.
     */
    const fetchData = async () => {
      const { data } = await Axios.get(api);
      const formatedWeatherData = formatWeatherData(data);
      setWeatherData(formatedWeatherData);
    };

    fetchData();
  }, []);

  const formatWeatherData = (apiResponse) => {
    return apiResponse.list.map((item) => {
      const time = item.dt;
      const weather = item.weather[0].description;
      return {
        time: new Date(time).toLocaleTimeString(),
        weather,
      };
    });
  };

  return (
    <ul>
      {weatherData.map((item, index) => (
        <li key={index}>
          {item.time}: {item.weather}
        </li>
      ))}
    </ul>
  );
};

export default Weather;
