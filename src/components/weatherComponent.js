import React from 'react'

const WeatherComponent = (props) => {
    if ((props.weatherData != null) & (props.weatherData != 'NOT_FOUND')) {
    return (
        <div className={props.theme ? "weather-block weather-block-black" : "weather-block"}>
            <div className={props.theme ? "weather-b weather-b-black" : "weather-b"}>
                <span>{props.showLanguage == 0 ? "Temperature: " : props.showLanguage == 1 ? "Температура: " : 
                "Temperatuur: "}</span><span>{props.weatherData.main.temp}°C</span>
            </div>
            <div className={props.theme ? "weather-b weather-b-black" : "weather-b"}>
    <span> {props.showLanguage == 0 ? "Wind: " : props.showLanguage == 1 ? "Ветер: " : 
                "Tuul: "}</span><span>{props.weatherData.wind.speed} m/s</span>
            </div>
        </div>
    )
    }
    else if (props.weatherData == 'NOT_FOUND') {
        return (
            <div className={props.theme ? "weather-block weather-block-black" : "weather-block"}>
                {props.showLanguage == 0 ? "Сity not found" : props.showLanguage == 1 ? "Город не найден" : 
                "Linnat ei leitud"}
            </div>
        )
    }
    else return (
        <div>
            
        </div>
    )
}

export default WeatherComponent