import React from 'react'
import Styles from "./Bar.module.css";
import Hands from "../../assets/images/hands.jpg";
import Logo from "../../assets/images/logo1.png";

export default function Bar() {
  return (
    <div className={Styles.main}>
        <img src={Hands} alt="hands" className={Styles.picture} />
          <div className={Styles.nav}>
            <img src={Logo} alt="logo" className={Styles.logo} />
            <h1>Welcome To Churchly</h1>
          </div>
    </div>
  )
}
