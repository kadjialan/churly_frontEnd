import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from "./Chats.module.css";
import { BiPlus } from "react-icons/bi";
import Modal from "../../components/postModal/Modal";
import { ChurchlyContext } from "../../Context";
import Chats from "../../assets/images/chats.gif";
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
         <img src={Chats} alt="person" className={styles.chats} /> 
        <h3>No chats available.</h3>
      </div>
      {modalVisible && <Modal />}
      {SidebarVisible && <SideBar/>}

    </div>
  );
}