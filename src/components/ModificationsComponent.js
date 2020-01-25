import React, {useState} from 'react'

const ModificationsComponents = (props) => {
    const [showLanguage, setShowLanguage] = useState(false)
    return (
        <div className="ModificationsBlock">
             <div className="showLanguage-block">
                    <div onClick={() => {props.setCookie("weather_app_language", 0, {path: '/',  maxAge: 60 * 60 * 24 * 30}); props.setShowLanguage(0)}} className={props.theme ? "language language-black" : "language"}>
                        EN
                    </div>
                    <div onClick={() => {props.setCookie("weather_app_language", 1, {path: '/',  maxAge: 60 * 60 * 24 * 30}); props.setShowLanguage(1)}} className={props.theme ? "language language-black" : "language"}>
                        RU
                    </div>
                    <div onClick={() => {props.setCookie("weather_app_language", 2, {path: '/',  maxAge: 60 * 60 * 24 * 30}); props.setShowLanguage(2)}} className={props.theme ? "language language-black" : "language"}>
                        EE 
                    </div>
                </div>
            <div onClick={() => {props.setCookie("weather_app_theme", 1 - props.theme, {path: '/', maxAge: 60 * 60 * 24 * 30}); props.setTheme(1 - props.theme);}}
            className={props.theme ? "button-theme button-theme-black" : "button-theme"}>
            {props.showLanguage == 0 ? "Change Theme" : props.showLanguage == 1 ? "Сменить тему" : 
                "vaheta teemat"}
            </div>
            {/* <div className={props.theme ? "button-theme button-theme-black" : "button-theme"}
            onMouseMove={() => setShowLanguage(true)} onMouseLeave={() => setShowLanguage(false)}>
                {props.showLanguage == 0 ? "Change Language" : props.showLanguage == 1 ? "Изменить язык" : 
                "vaheta keelt"}
                {showLanguage ?  */}
               
                {/* :
                <div>
                </div>} 
                </div> */}
        </div>
    )
}

export default ModificationsComponents