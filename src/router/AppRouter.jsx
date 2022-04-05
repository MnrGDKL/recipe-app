import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
         
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
