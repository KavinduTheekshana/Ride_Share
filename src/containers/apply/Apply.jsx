import React from "react";
import ReactDOM from "react-dom/client";
import "./apply.scss";

const Apply = () => {
  return (
    <div class="apply">
      <div class="row">
        <div class="col-md-4">
          <h6>
            Let’s go. Get a link <br></br> to download the app.
          </h6>
        </div>
        <div class="col-md-8">
          <div class="form">
            <form class="row" type="submit">
              <input
                type="text"
                placeholder="Enter mobile phone number"
              ></input>
              <button type="submit">APPLY TO DRIVE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
