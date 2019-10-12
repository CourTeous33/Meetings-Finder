import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert("Your registration is submitted");
        event.preventDefault();
    }

    render() {
        return (
            <div className={"registrationTable"} >
                <h3>Register</h3>
                <form method="post" name="registrationForm" onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type="text" name = "username" value={this.state.field.username}/>
                    </label>
                    <label>
                        Password:
                        <input type="text" name = "password" value={this.state.field.password}/>
                    </label>
                    <label>
                        <input type="submit" className="button" value="Register"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Registration;
