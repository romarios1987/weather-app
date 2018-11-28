import React, {Component} from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Titles/>
                <Form/>
                <Weather/>
            </div>
        );
    }
}

