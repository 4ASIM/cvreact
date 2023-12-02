import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "Spanish", level: 10 },
    { name: "English", level: 9},
    { name: "Swedish", level: 7 },
    { name: "HTML5", level: 10 },
    { name: "CSS", level: 7 },
    { name: "JS", level: 9 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
