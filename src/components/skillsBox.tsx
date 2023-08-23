import React, { useEffect } from "react";
import styles from "@/styles/SkillsBox.module.css"; // Import your CSS module
interface SkillsProps {
  title: string;
  skills: string[];
  isTwoCol: boolean;
  addTargetRef: (ref: Element | null) => void;
  isVisible: { [key: string]: boolean };
  darkMode: boolean;
}
const SkillsBox: React.FC<SkillsProps> = ({
  title,
  skills,
  isTwoCol,
  addTargetRef,
  isVisible,
  darkMode,
}) => {
  useEffect(() => {
    // Add the target div ref when the component mounts
    addTargetRef(document.getElementById("div-I-want-to-animate"));
  }, [addTargetRef]);
  return (
    <div className={styles.wrapper}>
      <div
        id="div-I-want-to-animate"
        className={`${styles.accent} ${
          isVisible["div-I-want-to-animate"]
            ? styles.tiltExpandAnimation
            : styles.beforeAnimation
        } `}
      ></div>

      <div
        className={`${styles.container} ${
          darkMode ? styles.darkMode : styles.lightMode
        }`}
      >
        <div className={styles.content}>
          <div className="flex-row content-center">
            <h2>{title}</h2>
          </div>
          <div className={styles.skillTable}>
            {isTwoCol ? (
              <div className={styles.twoCols}>
                <div className={styles.col}>
                  {skills.map((val, index) => {
                    return index % 2 == 0 && <p id="index">{val}</p>;
                  })}
                </div>
                <div className={styles.col}>
                  {skills.map((val, index) => {
                    return index % 2 != 0 && <p>{val}</p>;
                  })}
                </div>
              </div>
            ) : (
              skills.map((val) => {
                return <p>{val}</p>;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
