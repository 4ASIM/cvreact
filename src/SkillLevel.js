// SkillLevel.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to include Bootstrap CSS
import { ProgressBar } from "react-bootstrap";

const SkillLevel = ({ level }) => {
  const progressValue = level * 10; // Adjust based on your needs

  return (
    <div className="skills">
      <ProgressBar now={progressValue} style={{ width: `${100}%` }} />
    </div>
  );
};

export default SkillLevel;
