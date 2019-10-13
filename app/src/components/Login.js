import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Helmet from "react-helmet";
import '../styles/Registration.css';
import Link from "react-router-dom/Link";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            field: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="formregis">
                <Helmet>
                    <style>{'body { background-color: #eeeeee; }'}</style>
                </Helmet>

                <Container>
                    <h1>
                        Login
                    </h1>
                    <Form>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" value={this.state.field.username}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.field.password}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link to="/Profile">
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Link>
                    </Form>
                </Container>

            </div>
        );
    }

}
export default Login;