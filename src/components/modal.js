import React from 'react';
import UserCard from './user-card.js';
import '../css/modal.css';

const hideModalStyle = {
    display: 'none'
},
showModalStyle = {
    display: ''
},
dateFormatter = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

const Modal = (props) => {
    let {showModal, selectedUser, setModalDisplayHandler} = props,
        {publicRepos, followers, following, profileInfo} = (selectedUser || {}),
        handleCrossButtonClick = ()=>{
            setModalDisplayHandler(false);
        },
        buildRepoDom = (publicRepos = [])=>{
            return publicRepos.map((repo)=>{
                return (
                    <div key={repo.id} className="repo-link">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </div>
                );
            })
        },
        getUserList = (users = [])=>{
            return users.map((user)=>{
                return (
                    <div className="followers-card-container" key={user.id}>
                        <UserCard avatarURL={user.avatar_url} userName={user.login} height="150px" width="180px"/>
                    </div>
                );
            });
        } 
    const headingStyleObj = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: '20px',
        marginBottom: '10px' 
    };
    return (
        <div className="modal-container" style={showModal ? showModalStyle : hideModalStyle}>
            <div className="modal-content">
                <div className="close-action-container" onClick={handleCrossButtonClick}>
                    <span className="close-button">x</span>
                </div>
                <div className="public-repos-container">
                    <div style={headingStyleObj}>Public Repositories({(publicRepos|| []).length})</div>
                    <div className="repo-links-container">
                        {buildRepoDom(publicRepos)}
                    </div>
                    <hr className="modal-dividers"></hr>
                </div>
                <div className="followers-container">
                    <div style={headingStyleObj}>Followers({(followers|| []).length})</div>
                    <div className="followers-list">
                        {getUserList(followers)}
                    </div>
                    <hr className="modal-dividers"></hr>    
                </div>
                <div className="following-container">
                    <div style={headingStyleObj}>Following({(following|| []).length})</div>
                    <div className="followers-list">
                        {getUserList(following)}
                    </div>
                    <hr className="modal-dividers"></hr>  
                </div>
                {
                 profileInfo ? 
                    <div className="profile-info">
                        <div className="created-at-text">
                            <b>Created at:</b> {new Date(profileInfo.created_at).toLocaleDateString("en-US", dateFormatter)}
                        </div>
                        <div className="admin-flag-text">
                            <b>Admin:</b> {profileInfo.site_admin? 'Yes' : 'No'}
                        </div>
                    </div>
                :
                    <div></div>
                }
            </div>
        </div>    
    );
}

export default Modal;
