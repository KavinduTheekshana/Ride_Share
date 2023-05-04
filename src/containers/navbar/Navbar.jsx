import React from "react";
import "./navbar.scss";
import logo from "../../assest/logo.svg";

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} alt="logo"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#works">How tere works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#benifits">Tere benefits</a>
      </li>
      <li class="nav-item">
        <a class="button nav-link" href="#help">Help Center</a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
