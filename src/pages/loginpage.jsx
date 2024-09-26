import React, { useEffect, useState } from "react";
import "./LoginPage.scss";
import axios from "axios";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Post = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        `https://66f56f0a9aa4891f2a2533c2.mockapi.io/usersProfile`,
        {
          email: email,
          password: password,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    if (email !== "" && password !== "") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      toast.error("Please fill in the form!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: navigate("/home"),
      });
    }
  };

  if (localStorage.getItem("email") !== null) {
    setTimeout(() => {
      navigate("/profileuser");
    }, 3000);

    toast.success("you are logined ✔️", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  useEffect(() => {
    toast.info("pleas login in!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }, []);

  return (
    <div className="login-container">
      <ToastContainer />
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onInput={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onInput={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button" onClick={Post}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
