
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker, version ,Card} from "antd";
import {IWeather} from "./IWeather";
import "antd/dist/antd.css";
import React, { useState ,useEffect} from 'react';
import {Weather} from "./Weather";
const api = {
    key: "75178ad7ea26a1de1f5ec5d68ee7d425",
    base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<IWeather>({});

    useEffect(()=>{
        fetch(`${api.base}weather?q=Hanoi&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
    },[1])

    const search = (evt: any) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                }).catch(ex=>{
                    console.log( "eeror" +ex);

            }

            );
        }
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


    return (
      <Weather weather={weather} onSetQuery={setQuery} query={query} search={search} />
    );
}

export default App;
