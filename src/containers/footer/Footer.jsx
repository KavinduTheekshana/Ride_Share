import React from "react";
import "./footer.scss";
import logo_dark from "../../assest/logo_dark.svg";
import apple from "../../assest/apple.svg";
import play from "../../assest/play.svg";

const Navbar = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-3 center-detail">
            <img src={logo_dark} alt="logo" />
          </div>
          <div class="col-3">
            <h5>Be Our Friend</h5>
            <p>3, Season Park, Jakarta</p>
            <p>support@foodyar.co,id</p>
            <p>021 - 1111 - 2222</p>
          </div>
          <div class="col-3">
            <h5>Be Our Friend</h5>
            <p>3, Season Park, Jakarta</p>
            <p>support@foodyar.co,id</p>
            <p>021 - 1111 - 2222</p>
          </div>
          <div class="col-3 center-detail">
            <div class="row button_row">
              <a href="#play">
                <img src={play} alt="play" /> DOWNLOAD
              </a>
              <a href="#apple">
                <img src={apple} alt="apple" /> DOWNLOAD
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <p class="owner">All Rights Reserved tere by Codematics 2022</p>
    </div>
  );
};

export default Navbar;
