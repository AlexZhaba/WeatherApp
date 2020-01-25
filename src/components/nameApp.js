import React from 'react'

const NameComponent = (props) => {
    return (
        <div className={props.theme ? "name name-black" : "name"}>
            {props.showLanguage == 0 ? "Whether" : props.showLanguage == 1 ? "Погода" : 
                "Ilm"}
        </div>
    )
}

export default NameComponent