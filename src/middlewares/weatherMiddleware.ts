import {createAsyncThunk} from "@reduxjs/toolkit";
import { AppConfig } from "../config/appConfig";
import {IWeather} from "../IWeather";
import {MyKnownErrorModel} from "../models/myKnownErrorModel";

export  const fetchWeather = createAsyncThunk<IWeather,string,{rejectValue:MyKnownErrorModel}>(
    'weather/fetchByName',
    async  (name:string,thunkAPI)=>{
        const result = await  fetch(`${new AppConfig().base}weather?q=${name}&units=metric&APPID=${new AppConfig().key}`);

        if (result.status === 400) {
            // Return the known error for future handling
            return thunkAPI.rejectWithValue((await result.json()) as MyKnownErrorModel)
        }

        return (await result.json()) as IWeather
    }
)