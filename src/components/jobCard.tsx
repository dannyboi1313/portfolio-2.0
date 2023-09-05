import React, { useState } from "react";

interface CardProps {
  job: any;
  darkMode: boolean;
}

const JobCard: React.FC<CardProps> = ({ job, darkMode }) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className={`job-wrapper`}
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className={`${expanded ? "job-card-expanded" : "job-card"} ${
          darkMode ? "dark-mode-card-bg" : "light-mode-card-bg"
        }`}
      >
        <img
          className="job-icon"
          src={
            darkMode && job.company == "Nova Hydromet"
              ? "/logos/nova-logo-dark.svg"
              : job.icon
          }
          alt="hello"
        />
        <div className={`${expanded ? "job-text-show" : "job-text-hide"}`}>
          <div className="w-100">
            <h4>{job.company}</h4>
            <h5>{job.job_title}</h5>

            <h6>{job.dates}</h6>
          </div>

          <p>{job.description}</p>
          {job.job_title_2 ? (
            <>
              <div className="w-100">
                <h5>{job.job_title_2}</h5>

                <h6>{job.dates_2}</h6>
              </div>

              <p>{job.description_2}</p>
            </>
          ) : (
            ""
          )}
          <p className="mt-1">
            <em>Click to close</em>
          </p>
        </div>
      </div>
      <div className="job-accent"></div>
    </div>
  );
};

export default JobCard;
