import React from 'react';
import {Button} from 'antd';
import {Link, Redirect} from "react-router-dom";
import '../styles/HomePage.css';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {
            fontSize: '1.5em',
            borderRadius: '8pt',
            cursor: 'pointer',
            MarginColor: 'transparent'
        };
        return (
            <div className="HomePage">
                <div className="name">
                    <p>T
                        <a id="first">o </a>
                        B
                        <a id="second">e </a>
                    </p>
                    <div>
                        D
                        <a id="third">etermined</a>
                    </div>
                </div>
                <div className="buttons">
                    <Link to="/register">
                        <Button className="signup" style={myStyle}>Sign Up</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="login" style={myStyle}>Log In</Button>
                    </Link>
                    <Link to='/InvitePage'>
                        tester
                    </Link>
                </div>
            </div>
        );
    }

}