import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.jsx";
import LoginPge from "./pages/loginpage.jsx";
import ProfileUsers from "./pages/usersprofile.jsx";
import Navbar from "./components/NavBar.jsx";
import ProDucts from "./pages/products.jsx";
import BlogPage from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/UseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPge />} />
          <Route path="/profileuser" element={<ProfileUsers />} />
          <Route path="/ProDucts" element={<ProDucts />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
