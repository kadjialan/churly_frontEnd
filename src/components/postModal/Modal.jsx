import React, { useContext, useState } from "react";
import styles from "./Modal.module.css";
import { ImCross } from "react-icons/im";
import { ChurchlyContext } from "../../Context";

export default function Modal() {
  const { setModalVisible } = useContext(ChurchlyContext);
  const [file, setFile] = useState();

  function handleclose() {
    setModalVisible(false);
  }
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h2>Post testimonial</h2>
          <div className="nameInput">
            <p>Name</p>
            <input type="text" />
          </div>

          <>
            <p>Testimonial</p>
            <textarea />
          </>

          <div className={styles.upload}>
            <p>Image</p>
            <input className="uploadInput" type="file" onChange={handleChange} />
          </div>

          <img src={file} width={200} alt="images" />
          <ImCross className={styles.cross} onClick={handleclose} />
          <div className={styles.buttonHolder}>
            <button className={styles.close} onClick={handleclose}>
              close
            </button>
            <button className={styles.post}>post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
