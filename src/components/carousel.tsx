import Card from "./card";
import { useState, useEffect } from "react";
import MovingSquareCanvas from "./square3d";
import styles from "@/styles/Carousel.module.css";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
} from "../../data/projects";

interface SkillsProps {
  addTargetRef: (ref: Element | null) => void;
  isVisible: { [key: string]: boolean };
}
export enum carouselPositions {
  front = "front",
  backLeft = "backLeft",
  backRight = "backRight",
  middleLeft = "middleLeft",
  middleRight = "middleRight",
}

const Carousel: React.FC<SkillsProps> = ({ addTargetRef, isVisible }) => {
  useEffect(() => {
    // Add the target div ref when the component mounts
    addTargetRef(document.getElementById("card0"));
    addTargetRef(document.getElementById("card1"));
    addTargetRef(document.getElementById("card2"));
    addTargetRef(document.getElementById("card3"));
    addTargetRef(document.getElementById("card4"));
  }, [addTargetRef]);
  const [focusedCard, setFocusedCard] = useState(0);
  const [positions, setPositions] = useState([
    carouselPositions.front,
    carouselPositions.middleRight,
    carouselPositions.backRight,
    carouselPositions.backLeft,
    carouselPositions.middleLeft,
  ]);
  const getPosition = (card: number) => {
    const currPosition = positions[card];
    switch (currPosition) {
      case carouselPositions.front:
        return styles.front;
      case carouselPositions.backLeft:
        return styles.backLeft;
      case carouselPositions.backRight:
        return styles.backRight;
      case carouselPositions.middleLeft:
        return styles.middleLeft;
      case carouselPositions.middleRight:
        return styles.middleRight;

      default:
        break;
    }
  };
  const handleLeftClick = () => {
    if (focusedCard == 0) {
      handleCardClick(4);
    } else {
      handleCardClick(focusedCard - 1);
    }
  };
  const handleRightClick = () => {
    if (focusedCard == 4) {
      handleCardClick(0);
    } else {
      handleCardClick(focusedCard + 1);
    }
  };
  const handleCardClick = (cardId: number) => {
    setFocusedCard(cardId);
    switch (cardId) {
      case 0:
        setPositions([
          carouselPositions.front,
          carouselPositions.middleRight,
          carouselPositions.backRight,
          carouselPositions.backLeft,
          carouselPositions.middleLeft,
        ]);
        break;
      case 1:
        setPositions([
          carouselPositions.middleLeft,
          carouselPositions.front,
          carouselPositions.middleRight,
          carouselPositions.backRight,
          carouselPositions.backLeft,
        ]);
        break;
      case 2:
        setPositions([
          carouselPositions.backLeft,
          carouselPositions.middleLeft,
          carouselPositions.front,
          carouselPositions.middleRight,
          carouselPositions.backRight,
        ]);
        break;
      case 3:
        setPositions([
          carouselPositions.backRight,
          carouselPositions.backLeft,
          carouselPositions.middleLeft,
          carouselPositions.front,
          carouselPositions.middleRight,
        ]);
        break;
      case 4:
        setPositions([
          carouselPositions.middleRight,
          carouselPositions.backRight,
          carouselPositions.backLeft,
          carouselPositions.middleLeft,
          carouselPositions.front,
        ]);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className="w-100 flex-row content-center">
          <div className="divider bg-dark"></div>
        </div>

        <div className={styles.carousel}>
          <div
            ref={addTargetRef}
            id="card-0"
            className={`${styles.cardContainer} ${getPosition(0)} ${
              focusedCard == 0 && styles.selectedCard
            } ${
              isVisible["card-2"]
                ? styles.card0Animation
                : styles.beforeAnimation
            }`}
            onClick={() => handleCardClick(0)}
          >
            <Card project={project1} selected={focusedCard == 0} />
          </div>
          <div
            ref={addTargetRef}
            id="card-1"
            className={`${styles.cardContainer} ${getPosition(1)} ${
              focusedCard == 1 && styles.selectedCard
            } ${
              isVisible["card-2"]
                ? styles.card1Animation
                : styles.beforeAnimation
            }`}
            onClick={() => handleCardClick(1)}
          >
            <Card project={project2} selected={focusedCard == 1} />
          </div>
          <div
            ref={addTargetRef}
            id="card-2"
            className={`${styles.cardContainer} ${getPosition(2)} ${
              focusedCard == 2 && styles.selectedCard
            } ${
              isVisible["card-2"]
                ? styles.card2Animation
                : styles.beforeAnimation
            }`}
            onClick={() => handleCardClick(2)}
          >
            <Card project={project3} selected={focusedCard == 2} />
          </div>
          <div
            ref={addTargetRef}
            id="card-3"
            className={`${styles.cardContainer} ${getPosition(3)} ${
              focusedCard == 3 && styles.selectedCard
            } ${
              isVisible["card-2"]
                ? styles.card3Animation
                : styles.beforeAnimation
            }`}
            onClick={() => handleCardClick(3)}
          >
            <Card project={project4} selected={focusedCard == 3} />
          </div>
          <div
            ref={addTargetRef}
            id="card-4"
            className={`${styles.cardContainer} ${getPosition(4)} ${
              focusedCard == 4 && styles.selectedCard
            } ${
              isVisible["card-2"]
                ? styles.card4Animation
                : styles.beforeAnimation
            }`}
            onClick={() => handleCardClick(4)}
          >
            <Card project={project5} selected={focusedCard == 4} />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${styles.left}`}
            onClick={() => {
              handleLeftClick();
            }}
          >
            Left
          </button>
          <button
            className={`${styles.button} ${styles.right}`}
            onClick={() => {
              handleRightClick();
            }}
          >
            Right
          </button>
        </div>
        <div className="w-100 flex-row content-center">
          <div className="divider bg-dark"></div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
