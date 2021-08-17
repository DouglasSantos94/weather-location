import React, { useEffect, useState } from 'react';

import GlobalStyles from 'styles/GlobalStyles';
import { getWeather } from 'services/weatherService';
import Header from 'components/Header/Header';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
        .then(({data}) => setWeather(data))
      setLocation(true);
    })
  })
  
  return (
    <>
    {location ? (
      weather ? (
        <>
          <Header location={weather.name} />
          <hr/>
          <ul>
            <li>Temperatura atual: {weather.main.temp}°</li>
            <li>Temperatura máxima: {weather.main.temp_max}º</li>
            <li>Temperatura mínima: {weather.main.temp_min}º</li>
            <li>Pressão: {weather.main.pressure}</li>
            <li>Umidade: {weather.main.humidity}%</li>
          </ul>
        </>
      ) : (
        <p>Carregando o clima...</p>
      )
    ) : (
    <>
      Você precisa habilitar a localização no browser!
    </>
    )}
    <GlobalStyles />
    </>
  );
}

export default App;
