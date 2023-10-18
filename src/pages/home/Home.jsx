import React, { useContext } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import { BiPlus } from "react-icons/bi";
import Modal from "../../components/postModal/Modal";
import { ChurchlyContext } from "../../Context";
import Typing from "../../assets/images/Typing .gif";
import SideBar from "../../components/sideBar/SideBar";

export default function Home() {
  const { modalVisible, setModalVisible, SidebarVisible } = useContext(ChurchlyContext);
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.post}>
        <BiPlus
          className={styles.plus}
          title="post testimonials"
          onClick={() => setModalVisible(true)}
        />
      </div>
      <div className={styles.imageContent}>
         <img src={Typing} alt="person" className={styles.Typing} /> 
        <h3>No testimonial available.</h3>
      </div>
      {modalVisible && <Modal />}
      {SidebarVisible && <SideBar/>}

    </div>
  );
}
