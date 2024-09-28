import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const Navigat = useNavigate();

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const users = await axios.get(
          `https://66f56f0a9aa4891f2a2533c2.mockapi.io/usersProfile`
        );
        setUserData(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();

    if (localStorage.getItem("email") === null) {
      toast.error("Please Login in and contine!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => Navigat("/LoginPage"),
      });
    }
  }, []);

  return (
    <section className="ProfileCard">
      <ToastContainer />
      <div className="user-profile">
        {userData.map((users) => (
          <div className="PrfUi" key={users.user}>
            <label htmlFor="">your information</label>
            <div className="profile-picture">
              <img src="/assets/Human-Iamge.jpeg" />
            </div>
            <div className="profile-info">
              <h2 className="user-name">name : {users.email}</h2>
              <p className="user-bio">password : {users.password}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfile;
