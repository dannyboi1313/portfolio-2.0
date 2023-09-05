import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import ImageCarousel from "./imageCarousel";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: project;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  project,
  darkMode,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div
        className={`${styles.modalCard} ${
          darkMode ? styles.bgDark : "bg-light"
        }`}
      >
        <div
          className={`${styles.modalBar} ${
            darkMode ? styles.modalSecondaryDark : styles.modalSecondary
          } `}
        >
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
            darkMode={darkMode}
            mobile={project.mobile}
          />

          <div className={`${styles.modalBody}`}>
            <div className="modal-body-section modal-margin">
              <h4>Description</h4>
              <hr />

              <p>&emsp;{project.description}</p>
            </div>
            <div className="mt-1 flex-col w-100 modal-margin">
              <h4>Technologies Used</h4>
              <hr />

              <div className={styles.modalTags}>
                {project.tags.map((val, index) => {
                  return (
                    <div key={index} className={styles.tag}>
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Highlights</h4>
              <hr />

              <ul>
                {project.highlights?.map((val, index) => {
                  return <li key={index}>{val}</li>;
                })}
              </ul>
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Challenges</h4>
              <hr />

              <ul>
                {project.challenges?.map((val, index) => {
                  return <li key={index}>{val}</li>;
                })}
              </ul>
            </div>
            <div className={`${styles.modalBodySection} ${styles.modalMargin}`}>
              <h4>Things Learned</h4>
              <hr />

              <ul>
                {project.lessons_learned.map((val, index) => {
                  return <li key={index}>{val}</li>;
                })}
              </ul>
            </div>
            <hr></hr>
            <div className={styles.modalFooter}>
              <div className={styles.links}>
                {project.repo != "" ? (
                  <a className="resume-button flex-row">
                    <p>Repo</p>
                    <div className="button-arrow">&#x2192;</div>
                  </a>
                ) : (
                  ""
                )}
                {project.link != "" ? (
                  <a className="resume-button flex-row">
                    <p>Site</p>
                    <div className="button-arrow">&#x2192;</div>
                  </a>
                ) : (
                  ""
                )}
              </div>

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
