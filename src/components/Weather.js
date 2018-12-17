import React from 'react';

const Weather = (props) => {
    const imgSrc = `http://openweathermap.org/img/w/${props.icon}.png`;
    const {error, icon, description, city, country, temperature, humidity} = props;
    const celsius = temperature ? temperature - 273.15 : null;


    const showError = () => {
        if(error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )
        }


    };

    return (
        <>
            {showError()}
            {icon ? <img src={imgSrc} alt={description}/> : null}
            <p>Location: {city}{country}</p>
            <p>Temperature: {celsius} ℃</p>
            <p>Humidity: {humidity} %</p>
            <p>Description: {description}</p>
        </>
    );
};

export default Weather;