import React from 'react';


const UserCard = (props) => {
    let { avatarURL, userName, userScore} = props;
    const avatarStyle  = {
        backgroundImage: 'url(' + avatarURL + ')',
        width: '150px',
        height: '150px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    return (
        <div className="user-card-item">
            <div className="user-avatar" style={avatarStyle}></div>
            <div className="username-data"><b>Username:</b> {userName}</div>
            <div className="total-score-data"><b>Total Score:</b> {userScore}</div>
        </div>
    );
}

export default UserCard;
