import React from "react";

interface CardProps {
  company: string;
  icon: any;
  selected: boolean;
  position: string;
}

const JobCard: React.FC<CardProps> = ({
  company,
  icon,
  selected,
  position,
}) => {
  return (
    <div className={`job-wrapper ${position}`}>
      <div className="job-card">
        <img src={icon} alt="hello" />
      </div>
      <div className="job-accent"></div>
    </div>
  );
};

export default JobCard;
