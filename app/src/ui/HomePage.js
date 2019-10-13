import React from 'react';
import {Button} from 'antd';
import {Link} from "react-router-dom";
import '../styles/HomePage.css';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {
            fontSize: '1.5em',
            borderRadius: '8pt',
            cursor: 'pointer'
        }
        return (
            <div className="HomePage">
                <div className="name">
                    <p>T
                        <a id="first">o </a>
                        B
                        <a id="second">e </a>
                        D
                        <a id="third">etermined</a>
                    </p>
                </div>
                <div className="buttons">
                    <Link to="/signup">
                        <Button className="signup" style={myStyle}>Sign Up</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="login" style={myStyle}>Log In</Button>
                    </Link>
                </div>
            </div>
        );
    }

}