import React from "react";
import styles from "./Navbar.module.css";
import icon from "../../assets/images/logo1.png";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={icon} alt="logo" className={styles.icon} />
        <h3>Churchly</h3>
      </div>

      <div className={styles.links}>
        <li className={styles.active}>Testimonials</li>
        <li>Chats</li>
      </div>

      <FaRegUser className={styles.user}  title="user"/>
    </div>
  );
}
