import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [PurchasesProDucts, SetPurchasesProDucts] = useState([]);
  const [NotBought, SetNotBought] = useState([]);
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

    // if (localStorage.getItem("email") === null) {
    //   toast.error("Please Login in and contine!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     onClose: () => Navigat("/LoginPage"),
    //   });
    // }
  }, []);

  useEffect(() => {
    const NotBought = async () => {
      try {
        const Notbought = await axios.get(
          `https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products?id=12`
        );
        SetNotBought(Notbought.data);
      } catch (error) {
        console.log(error);
      }
    };
    NotBought();
  }, []);

  useEffect(() => {
    const Purchase = async () => {
      try {
        const ProductPurchase = await axios.get(
          `https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products`
        );
        SetPurchasesProDucts(ProductPurchase.data);
      } catch (error) {
        console.log(error);
      }
    };
    Purchase();
  });

  function LogOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

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
        {localStorage.getItem("email") !== null ? (
          <div className="PurPro">
            {PurchasesProDucts.map((Purchases) => (
              <div className="Purname" key={Purchases.Purchase}>
                <span> you are purchase the : {Purchases.name} </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="PurPro">please Login First</div>
        )}
        {localStorage.getItem("email") !== null ? (
          <div className="PurPro">
            {PurchasesProDucts.map((Purchases) => (
              <div className="Purname" key={Purchases.Purchase}>
                <span> you are purchase the : {Purchases.name} </span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {NotBought.map((Bought) => (
              <div key={Bought.Boughts}>
                <h1> {Bought.title} </h1>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="Btns" onClick={LogOut}>
        {" "}
        LogOut{" "}
      </button>
    </section>
  );
};

export default UserProfile;
