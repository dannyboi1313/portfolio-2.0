import React from "react";

interface AboutCardProps {
  title: string;
  paragraph: string;
  color: string;
  icon: any;
  darkMode: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  paragraph,
  icon,
  color,
  darkMode,
}) => {
  return (
    <div
      className={`about-card-container ${
        darkMode ? "dark-mode-card-bg" : "light-mode-card-bg"
      }`}
    >
      <div className="about-icon " style={{ backgroundColor: color }}>
        <img src={icon} />
      </div>
      <h3 className="card-spacing">{title}</h3>
      <p className="card-spacing">{paragraph}</p>
    </div>
  );
};

export default AboutCard;
