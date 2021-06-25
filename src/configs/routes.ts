import IRoute from "../models/IRoute"
import HomeScreen from "../presentation/HomeScreen";
import Weather from "../presentation/screens/Weather";
import NotFound from "../presentation/components/NotFoundItem";
import {LoginScreen} from "../presentation/screens/authen/LoginScreen";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: LoginScreen,
        exact: true
    },
    {
        path: '/weather',
        name: 'Weather page',
        component: Weather,
        exact: true
    },
    {
        path:"*",
        name: 'Not Found',
        component: NotFound,
        exact: true
    },
]

export default routes;