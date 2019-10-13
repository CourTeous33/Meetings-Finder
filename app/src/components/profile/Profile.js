import React, { Component } from 'react';
import Schedule from './Schedule';

class Profile extends Component{

    constructor() {
        super();
        this.state = {
            uname: "cra4lasp"

        }
    };

    nScheduleClick = (e, day, time) => {
        console.log("");
    };

    render () {
        return (
          <div className={"profile-content-container"}>
              <p>This is profile</p>
              <Schedule/>
          </div>
        );
    }
}

export default Profile;