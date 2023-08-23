import React, { useState } from "react";
import styles from "@/styles/ProjectCard.module.css";
import Modal from "./modal";
interface CardProps {
  project: project;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ project, selected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`${selected ? styles.cardSelected : styles.cardContainer}`}>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={project} />

      {/* <div className={styles.accent}>
        <img src="/accents/triangles-accent.svg" />
      </div>
      <div className={styles.embellishment}>
        <img src={project.embellishment} />
      </div> */}
      <div className={styles.tagWrapper}>
        <div className={styles.tag}>React</div>
        <div className={styles.tag}>React</div>
        <div className={styles.tag}>React</div>
      </div>
      <div className={styles.thumbnail}>
        <img src={project.thumbnail} />
      </div>

      <div onClick={openModal} className={styles.overlay}>
        <div className={styles.overlayContentWrapper}>
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

          <div className="flex-row content-center p-1">
            <p>
              <b>Click to learn More!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
