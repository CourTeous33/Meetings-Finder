import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import ProfileContainer from './components/profile/ProfileContainer'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/profile">
                    <ProfileContainer />
                </Route>
                <Route path={"/"}>
                    <p>This is home page</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
