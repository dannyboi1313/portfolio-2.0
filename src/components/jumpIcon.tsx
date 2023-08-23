import Image from "next/image";
import React from "react";
import Logo from "public/logo.svg";
import styles from "@/styles/JumpIcon.module.css";

interface CardProps {
  icon: any;
  bg_1: any;
  bg_2: any;
  bg_3: any;
  size: number;
  scale: number;
  showBg_1: boolean;
  label: string;
  sideBar: boolean;
}

const JumpIcon: React.FC<CardProps> = ({
  icon,
  bg_1,
  bg_2,
  bg_3,
  size,
  scale,
  showBg_1,
  label,
  sideBar,
}) => {
  const getBg2 = () => {
    if (!bg_1 || showBg_1) {
      return styles.iconBg2Narrow;
    }
    return styles.iconBg2;
  };
  const getBg3 = () => {
    if (!bg_1 || showBg_1) {
      return styles.iconBg3Narrow;
    }
    return styles.iconBg3;
  };
  return (
    <div className={`${styles.wrapper} ${sideBar && styles.sideBar}`}>
      <div
        className={`${styles.iconContainer} `}
        style={{ width: `${size * 1.7}px`, height: `${size * 1.7}px` }}
      >
        <div className={styles.border}></div>
        <div className={`${styles.icon} ${styles.iconMain}`}>
          <Image src={icon} alt="Logo" height={size} />
        </div>
        {bg_1 && (
          <div
            className={`${styles.icon} 
          ${showBg_1 ? styles.iconBg1 : styles.iconBg1Hide}`}
          >
            <Image src={bg_1} alt="Logo" height={size * scale} />
          </div>
        )}

        <div className={`${styles.icon} ${getBg2()}`}>
          <Image src={bg_2} alt="Logo" height={size * scale} />
        </div>
        <div className={`${styles.icon} ${getBg3()}`}>
          <Image src={bg_3} alt="Logo" height={size * scale} />
        </div>
        <div className={styles.label}>
          {" "}
          <h2>{label}</h2>
        </div>
      </div>
    </div>
  );
};

export default JumpIcon;
