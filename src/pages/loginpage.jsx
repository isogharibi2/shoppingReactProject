import React, { useState } from 'react';
import './LoginPage.scss';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const Post = async () => {
    try {
      const res = await axios.post(`https://66f52fbd9aa4891f2a243624.mockapi.io/loginusers`, {
        email: email,
        password: password
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button" onClick={(event) => Post(event.target.value)}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;