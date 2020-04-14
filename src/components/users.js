import React from 'react';
import User from './user.js';
import '../assets/css/users.css';

const Users = (props) => {
   let {showLoaderHandler, setSelectedUserState, users} = props;
   let handleUserCardClick = (userData)=>{
        setSelectedUserState({
            selectedUser: userData,
            showModal: true
        });
        showLoaderHandler(false);
    },
    userList = users.map((user)=>{
        return (
            <User key={user.id} userData={user} handleUserCardClick={handleUserCardClick} showLoaderHandler={showLoaderHandler}/>
        );
    });
    return (
        <div className="users-container">
            {userList}
        </div>
    );
}

export default Users;
