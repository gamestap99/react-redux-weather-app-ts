import './App.scss';
import "antd/dist/antd.css";
import React, {useState, useEffect} from 'react';
import {HeaderItem} from "./presentation/components/HeaderItem";
import {NavItem} from "./presentation/components/NavItem";
import {FooterItem} from "./presentation/components/FooterItem";
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import routes from './configs/routes';


function App() {





    return (
        <div>
            <HeaderItem/>

            <BrowserRouter>
                <NavItem/>
                <Switch>

                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>

            <FooterItem/>
        </div>

        // <Weather weather={weather} onSetQuery={setQuery} query={query} search={search} />
    );
}

export default App;
