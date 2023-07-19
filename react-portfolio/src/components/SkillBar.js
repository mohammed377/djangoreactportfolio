// SkillBar.js

const SkillBar = ({name, level}) => {
    return (
      <div className="skill">
        <div className="skill-info">
          <h4>{name}</h4>
          <span>{level}%</span>  
        </div>
        
        <div className="skill-bar">
          <div className="skill-progress" style={{width: `${level}%`}}></div>
        </div>
      </div>
    );
  }


export default SkillBar;