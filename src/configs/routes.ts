import IRoute from "../models/IRoute"
import HomeScreen from "../presentation/HomeScreen";
import Weather from "../Weather";
import NotFound from "../presentation/components/NotFoundItem";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomeScreen,
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