import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from './NavBar';
export const AppRouter = () => {
    return (
        <Router>
        <div>
         <NavBar />

         <div className="conteiner">
         <Switch>
            <Route exact path="/" component={HomeScreen} /> 
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} /> 
            <Router component={ HomeScreen } />
          </Switch>
         </div>
  

        </div>
      </Router>
    )
}
