import React, {Component} from 'react';

export default class Weather extends Component {
    render() {
        const imgSrc = `http://openweathermap.org/img/w/${this.props.icon}.png`;
        return (
            <div>
                <h1>{this.props.error}</h1>
                {this.props.icon ? <img src={imgSrc} alt={this.props.description}/> : null}
               <p>Location: {this.props.city}{this.props.country}</p>
               <p>Temperature: {this.props.temperature}</p>
               <p>Humidity: {this.props.humidity}</p>
               <p>Description: {this.props.description}</p>
            </div>
        );
    }
}

