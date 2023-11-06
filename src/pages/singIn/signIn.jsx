import React from "react";
import Styles from "./signIn.module.css";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import Bar from "../../components/welcomeBar/Bar";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      email: target.email.value,
      password: target.password.value,
    };
    console.log(user);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.bg}>
        <Bar />
        <form onSubmit={handleSubmit} className={Styles.right}>
          <h2>Login to continue</h2>
          <div className={Styles.signIn__content}>
            <>
              <label>Email</label>
              <div className={Styles.input_holder}>
                <input type="email" name="email" required />
                <AiOutlineMail className={Styles.icon} />
              </div>
            </>

            <>
              <label>Password</label>
              <div className={Styles.input_holder}>
                <input type="password" name="password" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </>

            <div className={Styles.buttons_holder}>
              <button type="submit" className={Styles.signup}>Login</button>
              <div className={Styles.row}>
                <p className={Styles.text}>Do not have account?</p>
                <Link to="/signUp" className={Styles.colored}>
                  signUp
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
