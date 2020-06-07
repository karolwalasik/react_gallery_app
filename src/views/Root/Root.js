import React, { useState, useEffect } from "react";
import "./index.css";
import styles from "views/Root/Root.module.scss"
import Loader from "components/Loader/Loader";
import SingleImage from "components/SingleImage/SingleImage";
import ImageModal from "components/ImageModal/ImageModal";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'

const Root = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setModalState] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  useEffect(() => {
    fetchImages()
  }, []);

  const fetchImages = () =>{
       const api = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(
        `${api}/photos/random?client_id=${accessKey}&count=15`
      )
      .then((res) => setImages([...images, ...res.data]));
  }

  const openModal = (photoUrl) => {
    setModalState(true);
    setModalUrl(photoUrl);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <React.Fragment>
      <h1 className={styles.mainHeading}>Gallery App</h1>
      <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} loader={<Loader/>}>
      <div className={`${styles.imagesContainer} ${isModalOpen ? styles.galleryUnactive :null}`}>
        {images.map((image) => (
          <div
            className={styles.singleImageContainer}
            onClick={() => openModal(image.urls.full)}
            key={image.id}
          >
            <SingleImage
              url={image.urls.small}
            />
          </div>
        ))}
      </div>
      {isModalOpen && <ImageModal photoUrl={modalUrl} closeModal={closeModal}/>}
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default Root;

