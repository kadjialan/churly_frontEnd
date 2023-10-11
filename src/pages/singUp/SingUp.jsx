import React from "react";
import Styles from "./SignUp.module.css";
import Hands from "../../assets/images/hands.jpg";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className={Styles.container}>
      <div className={Styles.bg}>
        <img src={Hands} alt="hands" className={Styles.picture} />
        <div className={Styles.right}>
          <h2>Create your account</h2>
          <div className={Styles.signup__content}>
            <div className={Styles.div}>
               <label>User name</label> 
              <div className={Styles.input_holder}>
                <input type="email" required />
                <BiUser className={Styles.icon} />
              </div>
            </div>

            <div className={Styles.div}>
              <label>Email</label>
              <div className={Styles.input_holder}>
                <input type="email" required />
                <AiOutlineMail className={Styles.icon} />
              </div>
            </div> 

            <div className={Styles.div}>
              <label>Password</label>
              <div className={Styles.input_holder}>
                <input type="password" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </div> 

            <div className={Styles.div}>
              <label>Confirm password</label>
              <div className={Styles.input_holder}>
                <input type="password" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </div> 

            <div className={Styles.buttons_holder}>
              <button className={Styles.signup}>Sign up</button>
              <div className={Styles.row}>
                <p className={Styles.text}>Already have account?</p>
                <Link to='/signIn' className={Styles.colored}>signIn</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
