import {createReducer} from "@reduxjs/toolkit";
import {initialState} from "../states/weatherState"
import {fetchWeather} from "../middlewares/weatherMiddleware";


export  const weatherReducer = createReducer(initialState,builder => {
    builder
        .addCase(fetchWeather.pending,state => {
            state.status = "loading"
        })
        .addCase(fetchWeather.fulfilled,(state, action) => {
            state.status = 'idle';
            state.weather = action.payload;
        })
        .addCase(fetchWeather.rejected,(state, action) => {
            if (action.payload) {
                // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error
            }
        })
})