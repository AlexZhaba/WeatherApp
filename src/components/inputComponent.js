import React from 'react'

const InputComponent = (props) => {
    return (
        <div className={props.theme ? "InputBox InputBox-black" : "InputBox"}>
            <input placeholder={props.showLanguage == 0 ? "Country" : props.showLanguage == 1 ? "Страна" : 
                "Riik"
                } type="text"
                value={props.country}
                onChange={(event) => props.setCountry(event.target.value)}
                />
            <input placeholder={props.showLanguage == 0 ? "City" : props.showLanguage == 1 ? "Город" : 
                "Linn"} type="text"
                value={props.city}
                onChange={(event) => props.setCity(event.target.value)}
                />
            <div className="button" onClick={props.getWeather}>
                {props.showLanguage == 0 ? "Search" : props.showLanguage == 1 ? "Поиск" : 
                "Otsi"}  
            </div>
        </div>
    )
}

export default InputComponent