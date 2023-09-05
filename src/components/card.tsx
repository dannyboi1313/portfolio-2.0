import React, { useState, useEffect } from "react";
import styles from "@/styles/ProjectCard.module.css";
import Modal from "./modal";
import Image from "next/image";
interface CardProps {
  project: project;
  selected: boolean;
  darkMode: boolean;
}

const Card: React.FC<CardProps> = ({ project, selected, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => {
    setIsHovered(false);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsHovered(false);
    setIsModalOpen(false);
  };
  const handleHover = () => {
    if (selected) {
      setIsHovered(true);
    }
  };
  const handleLeaveHover = () => {
    setIsHovered(false);
  };
  useEffect(() => {}, [isHovered]);

  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeaveHover()}
      onClick={() => handleHover()}
      className={`${selected ? styles.cardSelected : styles.cardContainer}`}
    >
      {/* modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={project}
        darkMode={darkMode}
      />
      {/* contents */}
      <div className={styles.cardContent}>
        <div className={styles.cardWords}>
          <h3>{project.types}</h3>
          <h1>{project.title}</h1>
          <h2>{project.jingle}</h2>
        </div>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnail}>
            <img src={project.thumbnail} alt="a" className={styles.image} />
          </div>
        </div>
        <div className={styles.tagWrapper}>
          {project.tags.map((val, index) => {
            return (
              <div key={index} className={styles.tag}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
      {/* overlay */}(
      <div
        onClick={openModal}
        className={`${styles.overlay} ${
          isHovered ? styles.overlayShow : styles.overlayNoShow
        } `}
      >
        {
          <div className={styles.overlayWrapper}>
            <div className={styles.overlayContent}>
              <div className={styles.types}>
                <h3>{project.types}</h3>
              </div>
              <div className={styles.title}>
                <h2>{project.title}</h2>
              </div>

              <div className={styles.description}>
                <p>{project.short_description}</p>
              </div>
            </div>

            <div
              className={`${styles.learnMore} ${
                isHovered ? "" : styles.hide
              } "flex-row content-center p-1"`}
            >
              <p>
                <b>Click to learn More!</b>
              </p>
            </div>
          </div>
        }
        <p
          className={`${styles.learnMore} ${
            isHovered ? styles.hide : styles.show
          }`}
        >
          <b>Learn More!</b>
        </p>
      </div>
      )
    </div>
  );
};

export default Card;
