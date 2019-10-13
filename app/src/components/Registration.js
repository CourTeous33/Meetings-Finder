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
            field: {},
            toProfile: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        fetch('/api/create-user/',{
            method: 'GET',
            body: {
                'uid': this.state.field['username'],
                'password': this.state.field['password'],
            }
        }).then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            response.json().then((data) => {
                this.setState({
                    toProfile: this.state.field['username'],
                });
            })
        })
    };

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({field: {...this.state.field, [fieldName]: fleldVal}});
    };

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
                            <Form.Control
                                name={"username"}
                                type="username"
                                maxLength = "12"
                                placeholder="Enter username within 12 characters"
                                defaultValue={this.state.field.username}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Text className="text-muted">
                                Any names you want to display on schedule
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name={"password"}
                                type="password"
                                placeholder="Password"
                                defaultValue={this.state.field.password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit()}
                                variant="secondary"
                                type="submit"
                                data-toggle="modal"
                                data-target="#popup">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>

        );
    }
}

export default Registration;
