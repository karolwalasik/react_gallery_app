import React from "react";
import styles from "components/SingleImage/SingleImage.module.scss"

const SingleImage = ({ url}) => {
  return (
      <img src={url} alt='radnom image' className={styles.singleImage} />
  );
};

export default SingleImage;
