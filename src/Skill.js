// Skill.js
import React from "react";
import SkillLevel from "./SkillLevel";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to include Bootstrap CSS

const Skill = ({ name, level }) => {
  return (
    <div className="display-skills">
      <h4>{name}</h4>
      <SkillLevel level={level} />
    </div>
  );
};

export default Skill;
