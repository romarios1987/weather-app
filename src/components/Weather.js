import React from 'react';

const Weather = (props) => {
    const imgSrc = `http://openweathermap.org/img/w/${props.icon}.png`;
    const {error, icon, description, city, country, temperature, humidity} = props;
    const celsius = temperature ? temperature -273.15: null;
    return (
        <div>
            <h1>{error}</h1>
            {icon ? <img src={imgSrc} alt={description}/> : null}
            <p>Location: {city}{country}</p>
            <p>Temperature: {celsius}</p>
            <p>Humidity: {humidity}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default Weather;