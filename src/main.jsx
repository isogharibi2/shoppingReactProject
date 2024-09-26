import React from 'react'
import ReactDOM from "react-dom/client";

import LoginPge from "./pages/loginpage.jsx";
import ProfileUsers from './pages/usersprofile.jsx';
import ProductPage from './pages/products.jsx';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPge />}/>
        <Route path='/profileuser' element={<ProfileUsers />} />
        <Route path='/productgage' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
