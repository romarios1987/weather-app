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
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
            .then(res => res.json())
            .catch(err => console.log('Error: ', err));
        //const data = await api_call.json();
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
        } else {
            this.setState({
                error: "Enter the City and Country"

            })
        }

    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="wrap shadow p-3 mb-5 rounded">
                        <div className="col-sm-6 offset-sm-3">
                            <Titles/>
                            <Form getWeather={this.getWeather}/>
                            <hr/>
                            <Weather {...this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

