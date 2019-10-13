import React from 'react';
import axios from 'axios';
import {Button, Icon} from 'antd';
import "../styles/InvitePage.css";
import Schedule from "../components/profile/Schedule";

export default class InvitePage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            meetingUser: [],
            counter: 3,
            username: "",
            timeFind: false,
            timeData: []
        };
        this.handleInvite = this.handleInvite.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        /*
        axios
            .get()
            .then(res => {
                // TODO: interpret response into this
                this.setState({
                        timeData: [res.timeData]
                    })
                )
            })
            .catch(err=>{
                alert("Some error happened. Please try again later.");
            });*/
        this.setState({
            timeFind: true
        })
    };

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    handleInvite = (event) => {
        event.preventDefault();
        let users = this.state.meetingUser;
        users.push({key: this.state.counter,
                    name: this.state.username});
    /*    axios
            .get('')
            .then(res => {
                // TODO: interpret response into this
                this.setState(prevState =>({
                        meetingUser: [prevState.meetingUser, {newUser: "a"}]
                    })
                )
            })
            .catch(err=>{
                alert("Some error happened. Please try again later.");
            });*/
        this.setState((prevState) =>({
                meetingUser: users,
                counter: prevState.counter + 1
            })
        )
    };

    handleClose = (event, key) => {
        event.persist();
        let newMeetingUser = this.state.meetingUser.filter(curUser => {
            return curUser.key !== key;
        });
        this.setState( {
            meetingUser: newMeetingUser
        });
        console.log(this.state.meetingUser);
    };

    render() {
        const plusStyle = {
            fontSize: '6em',
            cursor: 'pointer'
        };

        const buttonStyle={
            fontSize: '1.5em',
            borderRadius: '8pt',
            cursor: 'pointer',
            width: '10em'
        };

        const users = this.state.meetingUser.map((curUser) =>
            <div className="member" key={curUser.key} >
                <div className="closeButton" onClick={(e) => this.handleClose(e, curUser.key)}>
                    <Icon type="close" /></div>
                <p>{curUser.name}</p>
            </div>
        );

        return (
            <div className="InvitePage">
                <div className="otherThings">
                    <p>Invite your meeting members!</p>
                </div>
                <div className="invitees">
                    <div className='members'>
                        {users}
                    </div>
                    <div className='input'>
                        <input type="text" value={this.state.username} id="textareabox"
                               placeholder="Member's Username"
                                onChange={this.handleChange}>
                        </input>
                        <div>
                            <Icon type="plus-circle" style={plusStyle} onClick={this.handleInvite}/>
                        </div>
                    </div>
                </div>
                <div className="find">
                    <Button style={buttonStyle} onClick={this.handleSubmit}>Find time</Button>
                </div>
                <div>
                    {this.state.timeFind ?
                        /* TODO: use proper  props name here */
                        <Schedule blockList={this.state.timeData} /> :
                        <p> </p>
                    }
                </div>
            </div>
        )
    }
}