// Skills.js

import React from "react";
import SkillCard from "./SkillsCard";

function Skills() {
  return (
    <>
    <h2 className="project__h2 skills__h2">Skills</h2>

    <div className="skills__container">
    
      <SkillCard 
        cardNumber="1"
        title="Javascript"
        description="Good knowledge and environmental practice JavaScript with preference for"
        technologies="ReactJS VueJS"
      />
        <SkillCard
            cardNumber="2"
            title="Database"
            description="Managing a database in order to make API requests with "
            technologies="PostgreSQL MongoDB"
        />
        <SkillCard
            cardNumber="3"
            title= "Figma"
            description="Mastery of Figma, 
            creation of models and wireframes.
            Awareness
            in "
            technologies="UX/UI"
        />
        <SkillCard
            cardNumber="4"
            title="Versioning"
            description="mastery of version management software during projects such as"
            technologies="Git"
        />
    </div>
    </>
  );
}

export default Skills;
