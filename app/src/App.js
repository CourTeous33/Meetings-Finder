import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import ProfileContainer from './components/profile/ProfileContainer';
import Registration from "./components/Registration";
import HomePage from './ui/HomePage';
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route path={"/register"}>
                    <Registration />
                </Route>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Route path="/profile">
                    <ProfileContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
