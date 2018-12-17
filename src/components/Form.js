import React from 'react';

const Form = (props) => {
    const {getWeather} = props;
    return (
        <div>
            <form onSubmit={getWeather}>
                <div className="form-group">
                    <input className="form-control" type="text" name="city" placeholder="City..."/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="country" placeholder="Country..."/>
                    <div style={{display: 'block'}} className="invalid-feedback">Example: City - Lviv, Country - UA</div>
                </div>

                <button className="btn btn-success">Get Weather</button>
            </form>
        </div>
    );
};

export default Form;
