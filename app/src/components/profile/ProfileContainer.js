import React, {useParams} from 'react';
import Profile from './Profile';

const ProfileContainer = () => {
    const { id }= useParams();
    return (
      <div className={"profile-container"}>
          <Profile uid={id}/>
      </div>
    );
};
export default ProfileContainer;