import {Coord, IWeather} from "../IWeather";

export default class WeatherModel implements IWeather{
        public readonly coord: Coord;

        constructor() {
                super.constructor();
        }
}