import React from "react";
import Styles from "./signIn.module.css";
import Hands from "../../assets/images/hands.jpg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className={Styles.container}>
      <div className={Styles.bg}>
        <img src={Hands} alt="hands" className={Styles.picture} />
        <div className={Styles.right}>
          <h2>Login to continue</h2>
          <div className={Styles.signIn__content}>
            <>
              <label>Email</label>
              <div className={Styles.input_holder}>
                <input type="email" required />
                <AiOutlineMail className={Styles.icon} />
              </div>
            </>

            <>
              <label>Password</label>
              <div className={Styles.input_holder}>
                <input type="password" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </>

            <div className={Styles.buttons_holder}>
              <button className={Styles.signup}>Login</button>
              <div className={Styles.row}>
              <p className={Styles.text}>Do not have account?</p>
              <Link to='/signUp' className={Styles.colored}>signUp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
