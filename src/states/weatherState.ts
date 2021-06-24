import {IWeather} from "../IWeather";

interface IWeatherAction{
    weather: IWeather,
    status: String,
    error: any,
}

export  const initialState:IWeatherAction = {
    weather: {},
    status: 'idle',
    error: null,
}