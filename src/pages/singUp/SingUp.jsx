import React from "react";
import Styles from "./SignUp.module.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Bar from "../../components/welcomeBar/Bar";
import { register } from "../../api/auth";

export default function SignUp() {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      Name: target.userName.value,
      email: target.email.value,
      password: target.password.value,
      passwordConfirmation: target.confirmPassWord.value,
    };
    console.log(data)
    if (data.password === data.passwordConfirmation) {
      await register(data);
      navigate('/home');
    } else {
      console.log('error');
    }
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.bg}>
        <Bar />
        <form onSubmit={handleSubmit} className={Styles.right}>
          <h2>Create your account</h2>
          <div className={Styles.signup__content}>
            <div className={Styles.div}>
              <label>User name</label>
              <div className={Styles.input_holder}>
                <input type="text" name="userName" required />
                <BiUser className={Styles.icon} />
              </div>
            </div>

            <div className={Styles.div}>
              <label>Email</label>
              <div className={Styles.input_holder}>
                <input type="email" name="email" required />
                <AiOutlineMail className={Styles.icon} />
              </div>
            </div>

            <div className={Styles.div}>
              <label>Password</label>
              <div className={Styles.input_holder}>
                <input type="password" name="password" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </div>

            <div className={Styles.div}>
              <label>Confirm password</label>
              <div className={Styles.input_holder}>
                <input type="password" name="confirmPassWord" required />
                <AiOutlineLock className={Styles.icon} />
              </div>
            </div>

            <div className={Styles.buttons_holder}>
              <button className={Styles.signup}>Sign up</button>
              <div className={Styles.row}>
                <p className={Styles.text}>Already have account?</p>
                <Link to="/signIn" className={Styles.colored}>
                  signIn
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
