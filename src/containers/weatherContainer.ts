import {useAppDispatch, useAppSelector} from "../app/hook";
import {selectWeather} from "../selectors/weatherSelector";
import {fetchWeather} from "../middlewares/weatherMiddleware";
import {message} from "antd";
import {useEffect, useState} from "react";
import {IWeather} from "../IWeather";
const api = {
    key: "75178ad7ea26a1de1f5ec5d68ee7d425",
    base: "https://api.openweathermap.org/data/2.5/"
}


export  const WeatherContainer = ()=>{
    // const weather = useAppSelector(selectWeather);
    const dispatch =useAppDispatch();
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<IWeather>({});


    useEffect(() => {
        fetch(`${api.base}weather?q=Hanoi&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });

    }, [])

    const search = (evt: any) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                }).catch(ex => {
                    console.log("eeror" + ex);

                }
            );
        }
    }

    const  onFetchWeather =async (name:string)=>{
      const  resultAction =await  dispatch(fetchWeather(name))
        if (fetchWeather.fulfilled.match(resultAction)) {
            const user = resultAction.payload
            message.success(`Updated ${user.name}`)

        } else {
            if (resultAction.payload) {
                // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
                // Note: this would also be a good place to do any handling that relies on the `rejectedWithValue` payload, such as setting field errors
                message.error(`Update failed: ${resultAction.payload.errorMessage}`)

            } else {
                message.error(`Update failed: ${resultAction.error.message}`)

            }
        }

    }

    return {weather,setQuery,query,search};

}