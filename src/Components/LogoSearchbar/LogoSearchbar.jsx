import React from "react";
import logo from "../../assets/images/logo.png";

const LogoSearchbar = () => {
  return (
    <div className="container-fluid search-container pt-2 d-flex justify-content-center align-items-center">
    <a href="/">  <img className="img-fluid" width='150' src={logo} alt="logo of baraz" /></a>
    <input type="text" name="" id="" className="search-bar" placeholder="search in baraz" />
    <button>Search</button>
    </div>
  );
};

export default LogoSearchbar;
