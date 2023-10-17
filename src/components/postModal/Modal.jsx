import React from "react";
import styles from "./Modal.module.css";

export default function Modal() {
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
            <p>Picture</p>
            <input type="text" alt="image" />
          </>

          <>
            <p>Testimonial</p>
            <textarea />
          </>


          <div className={styles.buttonHolder}>
            
          </div>
        </div>
      </div>
    </div>
  );
}
