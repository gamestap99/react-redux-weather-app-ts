import {HeaderItem} from "./components/HeaderItem";
import {NavItem} from "./components/NavItem";
import  "../App.scss"
import React from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

  const  HomeScreen:React.FunctionComponent = props =>{
    return (
        <div className="row">
            <div className="side">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div className="fakeimg big" >Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                <h3>More Text</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <div className="fakeimg normal"  >Image</div>
                <br/>
                    <div className="fakeimg normal" >Image</div>
                    <br/>
                        <div className="fakeimg normal">Image</div>
            </div>
            <div className="main">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="fakeimg big">Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
                <br/>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg big" >Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.</p>
            </div>
        </div>

);
}

export  default HomeScreen;