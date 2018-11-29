import React, {Component} from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8f4071eeaad30ea77607938eefb0a342";


export default class App extends Component {


    state = {
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        icon: null,
        error: null
    };


    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();

        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                error: ""

            })
        }else {
            this.setState({
                error: "Enter the City and Country"

            })
        }

    };

    render() {
        const {temperature, city, country, humidity, description, icon, error} = this.state;

        return (
            <div className="App">
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    icon={icon}
                    error={error}
                />
            </div>
        );
    }
}

