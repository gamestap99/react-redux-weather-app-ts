import {IWeather} from "./IWeather";
import React from "react";


export const Weather = ({
                            weather,
                            onSetQuery,
                            query,
                            search
                        }: { weather: IWeather, onSetQuery: Function, query: any, search: any }) => {

    return (
        <div className={(weather.main !== "undefined") ? ((weather.main?.temp! > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => onSetQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {((weather as IWeather).main !== "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys?.country}</div>
                            {/*<div className="date">{dateBuilder(new Date())}</div>*/}
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

// Weather.prototype = {
//     weather: PropTypes.object.isRequired,
// }