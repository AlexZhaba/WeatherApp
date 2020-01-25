import React from 'react'

const WeatherComponent = (props) => {
    if ((props.weatherData != null) & (props.weatherData != 'NOT_FOUND')) {
    console.log('CITY = ', props.city)
    return (
        <div>
            {props.outputCity != '' ?
            <div className={props.theme ? "weather-name weather-name-black" : "weather-name"}>
                {props.showLanguage == 0 ? `Whether in city ${props.outputCity}` : props.showLanguage == 1 ? `Погода в городе ${props.outputCity}` : 
                `Ilm ${props.outputCity}`}
            </div>
            :
            <div className={props.theme ? "weather-name weather-name-black" : "weather-name"}>
            {props.showLanguage == 0 ? "Weather in your city" : props.showLanguage == 1 ? "Погода в вашем городе " : 
                "Ilm teie linnas"}
            </div>
            }
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