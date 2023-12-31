import React from "react";
import Styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";
import Bar from "../../components/welcomeBar/Bar";

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className={Styles.container}>
      <div className={Styles.bg} >
        <Bar/>
        <div className={Styles.right}>
          <div className={Styles.right__content}>
            <p>We are here to help you live a faithful life with Christ</p>
            <h1> PROVIDE TOP TESTIMONIALS AND INMPACT THE COMMUNITY</h1>
            <div className={Styles.buttons_holder}>
              <button className={Styles.signup} onClick={()=> navigate('/signUp') }>SING UP</button>
              <button  className={Styles.signup} onClick={()=> navigate('/signIn') }>SING IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
