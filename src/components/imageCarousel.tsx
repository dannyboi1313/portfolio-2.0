import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/ImageCarousel.module.css";
interface AboutCardProps {
  images: any[];
  darkMode: boolean;
  mobile: boolean;
}

const ImageCarousel: React.FC<AboutCardProps> = ({
  images,
  darkMode,
  mobile,
}) => {
  const [imageCarouselPosition, setImageCarouselPosition] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(20);

  const handleImageCarouselClickRight = (num: number) => {
    let newNum = imageCarouselPosition + num;
    if (newNum >= images.length) {
      newNum = 0;
    } else if (newNum < 0) {
      newNum = images.length - 1;
    }
    setImageCarouselPosition(newNum);
  };
  const getPositionClass = () => {
    switch (imageCarouselPosition) {
      case 1:
        if (mobile) return styles.position1Mobile;
        return styles.position1;
      case 2:
        if (mobile) return styles.position2Mobile;
        return styles.position2;
      case 3:
        if (mobile) return styles.position3Mobile;
        return styles.position3;
      case 4:
        if (mobile) return styles.position4Mobile;
        return styles.position4;
      case 5:
        if (mobile) return styles.position5Mobile;
        return styles.position5;
      case 6:
        if (mobile) return styles.position6Mobile;
        return styles.position6;
      case 7:
        if (mobile) return styles.position7Mobile;
        return styles.position7;
      case 8:
        if (mobile) return styles.position8Mobile;
        return styles.position8;
      default:
        return null;
    }
  };
  return (
    <div
      className={`${styles.imageCarousel} ${
        darkMode ? styles.bgSecondaryDark : styles.bgSecondary
      } "`}
    >
      <div className="w-100 h-100p relative">
        <div className={styles.buttonOverlay}>
          <button
            onClick={() => {
              handleImageCarouselClickRight(-1);
            }}
            className={`${styles.imageCarouselButton} ${styles.left}`}
          >
            <img src="/small-icons/arrow-right.svg" />
          </button>
          <button
            onClick={() => {
              handleImageCarouselClickRight(1);
            }}
            className={`${styles.imageCarouselButton}`}
          >
            <img src="/small-icons/arrow-right.svg" />
          </button>
        </div>

        <div className={`${styles.imageCarouselItems} ${getPositionClass()}`}>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`${
                  mobile ? styles.imageWrapperMobile : styles.imageWrapper
                } ${styles.marginLeft} ${styles.max100}`}
              >
                <div className={styles.carouselImage}>
                  <img
                    src={image}
                    alt="image"
                    className={mobile ? styles.imageMobile : styles.image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
