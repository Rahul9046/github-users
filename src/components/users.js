import React from 'react';
import User from './user.js';
import '../css/users.css';

const Users = (props) => {
   let handleUserCardClick = (userData)=>{
        props.setSelectedUserState({
            selectedUser: userData,
            showModal: true
        });
    },
    userList = props.users.map((user)=>{
        return (
            <User key={user.id} userData={user} handleUserCardClick={handleUserCardClick}/>
        );
    });
    return (
        <div className="users-container">
            {userList}
        </div>
    );
}

export default Users;
