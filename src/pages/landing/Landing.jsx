import React from "react";
import "./Landing.css";
import Hands from "../../assets/images/hands.jpg";

export default function Landing() {
  return (
    <div className="container">
      <div id="bg">
        <img src={Hands} alt="hands" className="picture" />
        <div className="right">
          <div className="right__content">
            <p>We are here to help you live a faithful life with Christ</p>
            <h1> PROVIDE TOP TESTIMONIALS AND INMPACT THE COMMUNITY</h1>
            <div className="buttons_holder">
              <button className="signup">SING UP</button>
              <button className="signup">SING IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
