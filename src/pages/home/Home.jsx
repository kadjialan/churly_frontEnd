import React from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import { BiPlus } from "react-icons/bi";
import Modal from "../../components/postModal/Modal";

export default function Home() {
  return (
    <div className={styles.main}>
{/*       <Navbar />
      <div className={styles.post}>
        <BiPlus className={styles.plus} title="post testimonials"/>
      </div> */}
      <Modal/>
    </div>
  );
}
