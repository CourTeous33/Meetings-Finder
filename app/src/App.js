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

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route path={"/regist"}>
                    <Registration />
                </Route>
                <Route path="/profile">
                    <ProfileContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
