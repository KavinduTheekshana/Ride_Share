import React from "react";
import "./works.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Image
import number1 from "../../assest/1.svg";
import number2 from "../../assest/2.svg";
import number3 from "../../assest/3.svg";
import number4 from "../../assest/4.svg";
import phone from "../../assest/phone.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Works = () => {
  return (
    <div class="works">
      <h1>
        HOW <span>TERE</span> WORKS
      </h1>
      <p class="m-auto text-center">
        Download and install the tere app. Enter your phone number and make your
        user account. when approved you may start driving.
      </p>

      <div class="row mt-5">
        <div class="col-4">
          <div class="detail right">
            <img class="" src={number1} alt="number"></img>
            <h2 class="">REQUEST A RIDE</h2>
            <p class="ml-auto text-right">
              Have to reach office or going for shopping ? Just put your current
              location and destination and search a ride that suits you
            </p>
          </div>

          <div class="detail right mt-5">
            <img class="" src={number3} alt="number"></img>
            <h2 class="">INSTANT NOTIFICATIONS</h2>
            <p class="ml-auto text-right">
              Get instant notifications for your rides and be in contact with
              fellow riders all the time
            </p>
          </div>
        </div>
        <div class="col-4 position-relative circle">
         
        

     <Swiper
            class="swiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={phone} alt="phone"/></SwiperSlide>
            <SwiperSlide><img src={phone} alt="phone"/></SwiperSlide>
            <SwiperSlide><img src={phone} alt="phone"/></SwiperSlide>
            <SwiperSlide><img src={phone} alt="phone"/></SwiperSlide>
           
          </Swiper> 
        </div>
        <div class="col-4">
          <div class="detail left">
            <img class="" src={number2} alt="number"></img>
            <h2 class="">POST A RIDE</h2>
            <p>
              Going somewhere but hate to travel alone - just post your ride
              details and publish it <br></br> <br></br><br></br>
            </p>
          </div>
          <div>
            <div class="detail left">
              <img class="" src={number4} alt="number"></img>
              <h2 class="">CASHLESS PAYMENT</h2>
              <p>
                Payment made easy by using your own Wallet - no more cash to
                carry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
