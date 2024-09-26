import React from 'react'
import ReactDOM from "react-dom/client";

import Home from "./pages/home.jsx"
import LoginPge from "./pages/loginpage.jsx";
import ProfileUsers from './pages/usersprofile.jsx';
import Navbar from './components/NavBar.jsx';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPge />}/>
        <Route path='/profileuser' element={<ProfileUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
