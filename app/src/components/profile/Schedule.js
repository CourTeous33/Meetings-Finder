import React from 'react';
import ScheduleBlock from './ScheduleBlock';
import { Row, Col } from 'antd';

const Schedule = ({ events }) => {
    console.log('schedule', events)

    let blockList = [];
    let blockSubList = [];
    let i;
    for (i = 1 ; i <= 7 ; i++) {
        let j;
        for (j = 0 ; j <= 1440 ; j += 15) {
            blockSubList = blockSubList.concat([...blockSubList, {"day": i, "time": j, "checked": false}]);
        }
        blockList = blockList.concat([...blockList, blockSubList]);
        blockSubList = [];
    }

    console.log('block list', blockList);
    return (
        <div className={"profile-schedule"}>
            <Row>
                {blockList.map(item =>
                    <Col span={3}>
                        {/*<ScheduleBlock*/}
                        {/*day={subItem.name}*/}
                        {/*time={subItem.time}*/}
                        {/*checked={subItem.checked}*/}
                        {/*/>*/}
                        <p>1</p>
                    </Col>
                )}
            </Row>
            {blockList.map(item =>
                <Row>
                    {item.map(subItem => {
                        console.log('sub:', subItem);
                        return <Col span={3}>
                            {/*<ScheduleBlock*/}
                            {/*day={subItem.name}*/}
                            {/*time={subItem.time}*/}
                            {/*checked={subItem.checked}*/}
                            {/*/>*/}
                            <p>1</p>
                        </Col>
                    })}
                </Row>
            )}
        </div>
    );
};

export default Schedule;