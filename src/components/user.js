import React, {Component} from 'react';
import UserCard from './user-card.js';
import '../css/user.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/';

class User extends Component {
    constructor(props) {
        super(props);
        this.userMetaData = {};
    }
    handleCardClick = async ()=> {
        let {showLoaderHandler, userData, handleUserCardClick} = this.props,
            userMetaData =  this.userMetaData;
        showLoaderHandler(true);
        // fetch user meta data asfet mounting
        userMetaData.publicRepos = await fetch(`${PROXY}${userData.repos_url}`).then(res=>res.json()).then(data=>data.filter(repo=>repo.private === false));
        userMetaData.followers = await fetch(`${PROXY}${userData.followers_url}`).then(res=>res.json()).then(data=>data);
        userMetaData.following = await fetch(`${PROXY}${userData.following_url.split('{')[0]}`).then(res=>res.json()).then(data=>data);
        userMetaData.profileInfo = await fetch(`${PROXY}${userData.url}`).then(res=>res.json()).then(data=>data);
        handleUserCardClick(userMetaData);
    }
    render(){
        let userData = this.props.userData;
        return (
            <div className="user-card-container" onClick={this.handleCardClick}>
                <UserCard avatarURL={userData.avatar_url} userName={userData.login} userScore={Math.round(userData.score)}/>
            </div>
        );
    }
}

export default User;
