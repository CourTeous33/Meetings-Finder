import React from 'react';
import axios from 'axios';
import {Button, Icon} from 'antd';
import {Link} from 'react-router-dom';
import "../styles/InvitePage.css"

export default class InvitePage extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            meetingUser: [
                {id: 1,
                 name: "user1"},
                {id: 2,
                 name: "user2"}
            ]
        }
        this.handleInvite = this.handleInvite.bind(this);
    }

    handleInvite = (event) => {
        event.preventDefault();
        axios
            .post()
            .then(res => {
                // TODO: interpret response into this
                this.setState(prevState =>({
                        meetingUser: [prevState.meetingUser, {newUser: "a"}]
                    })
                )
            })
            .catch(err=>{
                alert("Some error happened. Please try again later.");
            });
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

        const users = this.state.meetingUser.map((user, key) =>
            <div className="member" key={user.id}>{user.name}</div>
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
                        <textarea id="textareabox" name="textarea1" placeholder="Member's Username">
                        </textarea>
                        <div>
                            <Icon type="plus-circle" style={plusStyle} onClick={this.handleInvite}/>
                        </div>
                    </div>
                </div>
                <div className="find">
                    <Button style={buttonStyle}>Find time</Button>
                </div>
            </div>
        )
    }
}