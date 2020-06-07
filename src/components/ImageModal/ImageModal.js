import React from "react";
import styles from "components/ImageModal/ImageModal.module.scss"

const ImageModal = ({ photoUrl,closeModal }) => {
  return (
    <div className={styles.imageModal}>
    <button className={styles.closeButton} onClick={()=>closeModal()}>X</button>
    <div className={styles.imageContainer}>
      <img src={photoUrl} alt="large random photo" />
      </div>
    </div>
  );
};

export default ImageModal;
