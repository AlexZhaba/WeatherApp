import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import { useCookies } from 'react-cookie'
import NameComponent from './components/nameApp'
import InputComponent from './components/inputComponent'
import WeatherComponent from './components/weatherComponent'
import ModificationsComponents from './components/ModificationsComponent'

const API_KEY = "b36eb724de681fbf43d1838c039a70ae"

function App() {
  // let fetch('http://api.openweathermap.org/data/2.5/weather?q=Rybinsk,Russia&appid=b36eb724de681fbf43d1838c039a70ae&units=metric')
  
  const [language, setLanguage] = useState(0)          // 0 - English, 1 - Russian, 2 - Danish
  const [theme, setTheme] = useState(0)                // 0 - white theme, 1 - dark
  const [cookies, setCookie] = useCookies(['weather-app'])
  const [checkCookies, setCheckCookies] = useState(false)
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [outputCity, setOutputCity] = useState('')
  if (!checkCookies) {
    if ((cookies.weather_app_theme != null) & (theme != cookies.weather_app_theme)) {
      setTheme(cookies.weather_app_theme)
      console.log('CHANGE THEME')
    } 
    if ((cookies.weather_app_language != null) & (language != cookies.weather_app_language)) {
      setLanguage(cookies.weather_app_language)
    }
    setCheckCookies(true)
  }
  useEffect(() => {
    console.log('USE EF')
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('NAVIGATOR')
      async function fetchData() {
        console.log(position)
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(position.coords.latitude)}&lon=${Math.floor(position.coords.longitude)}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json()
        console.log(data)
        setOutputCity('')
        setWeatherData(data)
      }
      fetchData();
    }, function(err) {
      console.log('err=' ,err)
    })

  },[])
  let getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.replace(/\s+/g,'')},${country.replace(/\s+/g,'')}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    if (data.cod != 200) {
      console.log('NOT FOUND')
      setWeatherData('NOT_FOUND')
    } else {
      setOutputCity(city)

      setWeatherData(data)    }
    console.log('weather ', data);
  }
  //setCookie("weather-app_theme", 1, {path: '/'})
  // useEffect(() => {
  //   if ((cookies.weather_app_theme) & (theme != cookies.weather_app_theme)) {
  //     setTheme(cookies.weather_app_theme)
  //     console.log('CHANGE THEME')
  //   } 
  //   if ((cookies.weather_app_language) & (1)) {
  //     setLanguage(cookies.weather_app_language)
  //   }
  // },[]) 
  console.log("theme = ", theme)
  console.log("cookie = ", cookies)
  return (
    <div className={theme ? "App-black" : "App-white"}>
      <NameComponent
        theme = {theme}
        showLanguage = {language}
      />
      <InputComponent
        theme = {theme}
        showLanguage = {language}
        setCity = {setCity}
        setCountry = {setCountry}
        country = {country}
        city = {city}
        getWeather = {getWeather}
      />
      <WeatherComponent
        theme = {theme}
        showLanguage = {language}
        weatherData = {weatherData}
        outputCity = {outputCity}
      />
      <ModificationsComponents
        setTheme = {setTheme}
        theme = {theme}
        setShowLanguage = {setLanguage}
        showLanguage = {language}
        setCookie = {setCookie}
      />
    </div>
  );
}

export default App;
