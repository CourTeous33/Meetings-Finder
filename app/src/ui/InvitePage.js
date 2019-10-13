import React from 'react';
import {Button} from 'antd';

export default class InvitePage extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            meetingUser: []
        }
    }

    render() {
        return (
            <div className="InvitePage">
                <div></div>
                <Button>Find</Button>
            </div>
        )
    }
}