import {combineReducers} from "@reduxjs/toolkit";
import {weatherReducer} from "../reducers/weatherReducer";

export const  rootReducer = combineReducers(
    {
        weatherReducer:weatherReducer,
    }
)