import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { FaRegUser, FaTrash } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { AiTwotoneSetting, AiOutlineArrowRight } from "react-icons/ai";
import { ChurchlyContext } from "../../Context";

export default function SideBar() {
  const { setSidebarVisible } = useContext(ChurchlyContext);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <FaRegUser className={styles.profile__icon} />
          <span>
            <p>Kadji Alan</p>
            <p className={styles.top}>Alankadji@gmail</p>
            <p className={styles.top}>status: User</p>
          </span>
        </div>
        <div className={styles.actions}>
          <div>
            <div className={styles.row}>
              <h4>Favorites</h4>
              <BsFillHeartFill />
            </div>

            <div className={styles.row}>
              <h4>Trash</h4>
              <FaTrash />
            </div>

            <div className={styles.row}>
              <h4>settings</h4>
              <AiTwotoneSetting />
            </div>
          </div>

          <div className={styles.row2}>
            <h4>Logout</h4>
            <BiLogIn />
          </div>
        </div>

        <AiOutlineArrowRight className={styles.back} onClick={() => setSidebarVisible(false)} />
      </div>
    </div>
  );
}
