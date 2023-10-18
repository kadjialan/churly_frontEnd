import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { ImFolderUpload, ImCross } from "react-icons/im";
import { ChurchlyContext } from "../../Context";

export default function Modal() {
  const { setModalVisible } = useContext(ChurchlyContext);

  function handleclose() {
    setModalVisible(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h2>Post testimonial</h2>
          <>
            <p>Name</p>
            <input type="text" />
          </>

          <>
            <p>Testimonial</p>
            <textarea />
          </>

          <div className={styles.upload}>
            <p>Upload image</p>
            <ImFolderUpload title="upload" className={styles.iconUpload} />
          </div>

          <ImCross className={styles.cross} onClick={handleclose}/>
          <div className={styles.buttonHolder}>
            <button className={styles.close} onClick={handleclose}>close</button>
            <button className={styles.post}>post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
