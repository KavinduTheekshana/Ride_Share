import React from "react";
import "./benefits.scss";
import hours from "../../assest/hours.svg";
import earnings from "../../assest/earnings.svg";
import customer from "../../assest/customer.svg";

const Benefits = () => {
  return (
    <div class="benefits">
      <h1>
        <span>TERE</span> BENEFITS
      </h1>

      <div class="cards">
        <div class="single-card">
          <div class="row">
            <div class="col center-card">
              <div class="content">
                <div class="position-relative">
                  <h2>01.</h2>
                  <h3>
                    Flexible <br></br> working hours
                  </h3>
                </div>
                <div>
                  <p>
                    You can decide when, and how much time you want to drive.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <img src={hours} alt="hours" />
            </div>
          </div>
        </div>

        <div class="single-card ml-auto">
          <div class="row">
            <div class="col">
              <img src={earnings} alt="hours" />
            </div>
            <div class="col center-card">
              <div class="">
                <div class="position-relative">
                  <h2>02.</h2>
                  <h3>Earnings</h3>
                </div>
                <div>
                  <p>By driving with tere you can earn more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-card">
          <div class="row">
            <div class="col center-card">
              <div class="content">
                <div class="position-relative">
                  <h2>03.</h2>
                  <h3>Customer <br></br> support 24/7</h3>
                </div>
                <div>
                  <p>
                    Tere is a local service provider and we are proud to support
                    you in your local language. We are proud to be at your
                    service 24/7!
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <img src={customer} alt="hours" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
