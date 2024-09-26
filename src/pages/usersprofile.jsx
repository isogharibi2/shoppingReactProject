import React, { useEffect , useState } from 'react';
import './UserProfile.scss';
import axios from 'axios';

const UserProfile = () => {

    const [ userData , setUserData ] = useState([]);

    useEffect(() => {
        const GetUsers = async () => {
            try {
                const users = await axios.get(`https://66f56f0a9aa4891f2a2533c2.mockapi.io/usersProfile`)
                setUserData(users.data)
                console.log(users)
            } catch (error) {
                console.log(error)
            }
        }
        GetUsers();
    })

    return (
        <div className="user-profile">
            {userData.map((users) => (
                <div key={users.user}>
                        <label htmlFor="">your information</label>
                    <div className="profile-picture">
                        <img src='/assets/Human-Iamge.jpeg' />
                    </div>
                    <div className="profile-info">
                        <h2 className="user-name">{users.email}</h2>
                        <p className="user-bio">{users.password}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserProfile;
