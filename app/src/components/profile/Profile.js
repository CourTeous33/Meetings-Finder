import React, { Component } from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';

class Profile extends Component{

    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
        };
    };

    componentDidMount() {
        fetch('/api/user-schedule/' + this.props.uid)
            .then((response) =>{
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then((data) => {
                        console.log(data[1]);
                        const events = {
                            1: [1],
                            2: [1],
                            3: [],
                            4: [],
                            5: [],
                            6: [],
                            7: [],
                        };
                        const requests = data.map(item => {
                            events[item.weekDay] = events[item.weekDay].concat(item.startTime);
                        });
                        Promise.all(requests).then(() => {
                            this.setState({
                                events: events,
                                isLoading: false,
                            })
                        });
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render () {

        return this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
          <div className={"profile-content-container"}>
              <p>This is profile</p>
              <Schedule events={this.state.events}/>
          </div>
        );
    }
}

Profile.propTypes = {
    uName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
};

export default Profile;