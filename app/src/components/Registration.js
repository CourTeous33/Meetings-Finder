import React, { Component } from "react";
import '../styles/Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Helmet from "react-helmet";
import Link from "react-router-dom/Link";


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
            <div className="formregis">
                <Helmet>
                    <style>{'body { background-color: #eeeeee; }'}</style>
                </Helmet>

                <Container>
                    <h1>
                        Sign up
                    </h1>
                    <Form>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="username" maxLength = "12" placeholder="Enter username within 12 characters" value={this.state.field.username}/>
                            <Form.Text className="text-muted">
                                Any names you want to display on schedule
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.field.password}/>
                        </Form.Group>
                        <Link to="/Login">
                            <Button variant="secondary" type="submit" data-toggle="modal" data-target="#popup">
                                Submit
                            </Button>
                        </Link>
                    </Form>
                </Container>
            </div>

        );
    }
}

export default Registration;
