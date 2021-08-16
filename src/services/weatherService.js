import api from "./api"

export const getWeather = (lat, long, ) =>
  api
    .get('', {
      params: { 
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    })
