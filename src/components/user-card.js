import React from 'react';


const UserCard = (props) => {
    let { avatarURL, userName, userScore, width, height} = props;
    const avatarStyle  = {
        backgroundImage: 'url(' + avatarURL + ')',
        width: '50%',
        height: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
      const styleObj = {
        width: width || '300px',
        height: height || '300px'
      }
    return (
        <div className="user-card-item" style={styleObj}>
            <div className="user-avatar" style={avatarStyle}></div>
            <div className="username-data"><b>Username:</b> {userName}</div>
            {
                userScore && <div className="total-score-data"><b>Total Score:</b> {userScore}</div>
            }
        </div>
    );
}

export default UserCard;
