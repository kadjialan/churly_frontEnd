import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import icon from "../../assets/images/logo1.png";
import { FaRegUser } from "react-icons/fa";
import { ChurchlyContext } from "../../Context";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { currentView, setCurrentView } = useContext(ChurchlyContext);

  function changeView(id) {
    setCurrentView(id);
  }

  const { setSidebarVisible } = useContext(ChurchlyContext);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={icon} alt="logo" className={styles.icon} />
        <h3>Churchly</h3>
      </div>

      <div className={styles.links}>
        <Link to="/home" className={styles.links}>
          <li
            className={currentView === 1 ? styles.active : styles.inActive}
            onClick={() => changeView(1)}
          >
            Testimonials
          </li>
        </Link>

        <Link to="/chats" className={styles.links}>
          <li
            className={currentView === 2 ? styles.active : styles.inActive}
            onClick={() => changeView(2)}
          >
            Chats
          </li>
        </Link>
      </div>

      <FaRegUser
        className={styles.user}
        onClick={() => setSidebarVisible(true)}
        title="user"
      />
    </div>
  );
}
