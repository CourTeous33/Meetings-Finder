import React from 'react';
import {Button, Icon} from 'antd';
import {Link} from 'react-router-dom';
import "../styles/InvitePage.css"

export default class InvitePage extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            meetingUser: []
        }
    }

    render() {
        const plusStyle = {
            fontSize: '6em',
            cursor: 'pointer'
        }

        const buttonStyle={
            fontSize: '1.5em',
            borderRadius: '8pt',
            cursor: 'pointer',
            width: '10em'
        }
        return (
            <div className="InvitePage">
                <div className="otherThings">
                    <p>Invite your meeting members!</p>
                </div>
                <div className="invitees">
                    <div className='input'>
                        <textarea id="textareabox" name="textarea1" placeholder="Username">
                        </textarea>
                        <div>
                            <Icon type="plus-circle" style={plusStyle}/>
                        </div>
                    </div>
                </div>
                <div className="find">
                    <Button style={buttonStyle}>Find</Button>
                </div>
            </div>
        )
    }
}