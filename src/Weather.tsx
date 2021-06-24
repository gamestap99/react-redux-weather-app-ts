import {IWeather} from "./IWeather";
import React from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import {WeatherContainer} from "./containers/weatherContainer";

const Weather:React.FunctionComponent = props =>  {
    const {
        weather,
        setQuery,
        query,
        search
    } = WeatherContainer();

    return (
        <div className={(weather.main !== "undefined") ? ((weather.main?.temp! > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {((weather as IWeather).main !== "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys?.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            {/*<Card className="temp" size="small"  style={{ width: 300,textAlign:"center" }}>*/}
                            {/*    <p>{Math.round(weather.main.temp)}°c</p>*/}

                            {/*</Card>*/}

                            <div className="temp">
                                {Math.round(weather.main?.temp!)}°c
                            </div>
                            <div className="weather">{weather.weather?.[0].main}</div>

                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}

const dateBuilder = (d:Date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
// Weather.prototype = {
//     weather: PropTypes.object.isRequired,
// }

export  default withRouter(Weather);