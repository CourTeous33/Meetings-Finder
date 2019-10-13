import React, { useState } from 'react';

const ScheduleBlock = ({ day, time, checked  }) => {
    const[isChecked, setIsChecked] = useState(checked);
    const onClick = (e, day, time) => {
        setIsChecked(!isChecked);
    };

    return isChecked ? (
            <div
                className={"profile-schedule-block-checked"}
                onClick={(e) => onClick(e, day, time)}
            >
                <p>1</p>
            </div>
        ) : (
            <div
                className={"profile-schedule-block-unchecked"}
                onClick={(e) => onClick(e, day, time)}
            >
                <p>1</p>
            </div>
        );

};

export default ScheduleBlock;