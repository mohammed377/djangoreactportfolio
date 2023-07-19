import React from 'react';
import SkillBar from './SkillBar';
const Skills = () => {

// Skills.js

const skills = [
  {name: 'HTML', level: 90},
  {name: 'CSS', level: 80}, 
  {name: 'JavaScript', level: 70},
  {name: 'React', level: 60},

];

return (
  <div className="skills-container">
    <h1>Skills</h1>
    
    {skills.map(skill => ( 
      <SkillBar 
        key={skill.name}
        name={skill.name}
        level={skill.level} 
      />
    ))}
  
  </div>
);
}

export default Skills;