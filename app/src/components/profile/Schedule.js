import React, { Component }from 'react';
import ScheduleBlock from './ScheduleBlock';
import '../../styles/Shedule.css';
import PropTypes from 'prop-types';

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state= {
            blockList: []
        };
        console.log(props.events);
    }

    componentDidMount() {
        let blockList = [];
        let blockSubList = [];
        let i;
        for (i = 0 ; i < 96 ; i += 1) {
            let j;
            for (j = 1 ; j <= 7 ; j += 1) {
                blockSubList = blockSubList.concat([{"day": j, "time": i, "checked": this.props.events[j].includes(i)}]);
            }
            blockList = blockList.concat([blockSubList]);
            blockSubList = [];
        }
        this.setState({
            blockList: blockList,
        });
        console.log(this.props.events);
    }

    render() {
        return (
            <div className={"profile-schedule"}>
                {this.state.blockList.map(item =>
                    <div className="profile-schedule-row">
                        {item.map(subItem =>
                            <ScheduleBlock
                                day={subItem.name}
                                time={subItem.time}
                                checked={subItem.checked}
                            />
                        )}
                    </div>
                )}
            </div>
        );
    };
}


export default Schedule;