import React, {Component} from 'react';
import UserCard from './user-card.js';
import '../css/user.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.userMetaData = {};
    }
    async componentDidMount() {
        let userMetaData =  this.userMetaData,
            userData = this.props.userData;
        // fetch user meta data asfet mounting
        userMetaData.publicRepos = await fetch(userData.repos_url).then(res=>res.json()).then(data=>data.filter(repo=>repo.private === false));
        userMetaData.followers = await fetch(userData.followers_url).then(res=>res.json()).then(data=>data);
        userMetaData.following = await fetch(userData.following_url.split('{')[0]).then(res=>res.json()).then(data=>data);
        userMetaData.profileInfo = await fetch(userData.url).then(res=>res.json()).then(data=>data);
    }
    render(){
        let userData = this.props.userData;
        return (
            <div className="user-card-container">
                <UserCard avatarURL={userData.avatar_url} userName={userData.login} userScore={Math.round(userData.score)}/>
            </div>
        );
    }
}

export default User;
