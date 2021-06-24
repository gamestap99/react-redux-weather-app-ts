

import {RootState} from "../app/rootState";


export const selectWeather = (state: RootState) => state.weatherReducer.weather;