import React from "react";
import "./header.scss";
import map from "../../assest/map.svg";
import apple from "../../assest/apple.svg";
import play from "../../assest/play.svg";

const Header = () => {
  return (
    <div class="row mt-5">
      <div class="col">
        <div class="centered-element">
          <h1>
            DOWNLOAD APP, <br></br> SAVE MONEY, MAKE <br></br> FRIENDS!
          </h1>
          <p>
            Its simple and its free. Play your part in reducing Carbon Footprint
            and help Mother Nature to sustain its beauty. So what are you
            waiting for ? Lets ride together
          </p>
          <div class="row button_row">
<a href="#"><img src={play}/> DOWNLOAD</a>
<a href="#"><img src={apple}/> DOWNLOAD</a>
          </div>
        </div>
      </div>
      <div class="col">
        <img src={map} />
      </div>
    </div>
  );
};

export default Header;
