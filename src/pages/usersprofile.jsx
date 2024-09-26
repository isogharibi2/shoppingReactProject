import React, { useEffect } from 'react';
import './UserProfile.scss';
import axios from 'axios';

const UserProfile = () => {

    useEffect(() => {
        const GetUsers = async () => {
            try {
                const users = await axios.get(`https://66f52fbd9aa4891f2a243624.mockapi.io/loginusers`)
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div className="user-profile">
            {GetUsers.map((users) => (
                <div key={users.user}>
                    <div className="profile-picture">
                        <img src='../assest/Human-Iamge.jpeg' />
                    </div>
                    <div className="profile-info">
                        <h2 className="user-name">{users.name}</h2>
                        <p className="user-bio">{users.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserProfile;
