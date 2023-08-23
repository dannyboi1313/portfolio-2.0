import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import ImageCarousel from "./imageCarousel";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: project;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalCard} ${"bg-light"}`}>
        <div className={styles.modalBar}>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className={styles.modalContent}>
          <div className={`${styles.cardPadding}`}>
            <div className="flex-col">
              <h2>{project.types}</h2>

              <div className={styles.modalTitle}>
                <h1>{project.title}</h1>
                <h3>{project.jingle}</h3>
              </div>
            </div>
          </div>
          <ImageCarousel
            images={project.images}
            darkMode={false}
            mobile={project.mobile}
          />

          <div className={`${styles.modalBody} ${"p-large-card"}`}>
            <div></div>
            <div className="modal-body-section modal-margin">
              <h4>Description</h4>
              <p>{project.description}</p>
            </div>
            <div className="modal-tags flex-row flex-bottom w-100 modal-margin">
              <p>Technologies Used:</p>{" "}
              {project.tags.map((val) => {
                return <div className="tag">{val}</div>;
              })}
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Highlights</h4>
              <ul>
                {project.lessons_learned.map((val) => {
                  return <li>{val}</li>;
                })}
              </ul>
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Challenges</h4>
              <ul>
                {project.lessons_learned.map((val) => {
                  return <li>{val}</li>;
                })}
              </ul>
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Things Learned</h4>
              <ul>
                {project.lessons_learned.map((val) => {
                  return <li>{val}</li>;
                })}
              </ul>
            </div>
            <hr></hr>
            <div className={styles.modalFooter}>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
