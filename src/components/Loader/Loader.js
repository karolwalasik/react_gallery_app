import React from "react";
import styles from "components/Loader/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div class={styles['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
