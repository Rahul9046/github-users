import React from 'react';
import '../css/user.css';

const User = (props) => {
    let userData = props.userData;
    let avatarStyle  = {
        backgroundImage: 'url(' + userData.avatar_url + ')',
        width: '150px',
        height: '150px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    return (
        <div className="user-card-item">
            <div className="user-avatar" style={avatarStyle}></div>
            <div className="username-data"><b>Username:</b> {userData.login}</div>
            <div className="total-score-data"><b>Total Score:</b> {Math.round(userData.score)}</div>
        </div>
    );
}

export default User;
