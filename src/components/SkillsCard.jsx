
import React from "react";

function SkillCard({cardNumber, title, description, technologies }) {
const cardClassName = `skills__card skills__card-${cardNumber}`;
const skillPosition = `skills__position skills__position-${cardNumber}`;

  return (
    <>
    <div className= {skillPosition}>
    <div className={cardClassName}>
        <div className="skills__circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
        <path d="M9 5.5C9 8.26142 6.98528 10.5 4.5 10.5C2.01472 10.5 0 8.26142 0 5.5C0 2.73858 2.01472 0.5 4.5 0.5C6.98528 0.5 9 2.73858 9 5.5Z" fill="#01000A"/>
        </svg>
        </div>

        <div className="skills__card-text">
            <div className="skills__card-title">
            <h2 className="skills__card-h2">{title}</h2>
        </div>

        <div className="skills__card-content">
            <span>{description}</span>
        </div>

        <div className="skills__card-content-end">
            <span className="skills__card-techno">{technologies}</span>
        </div>

        </div>
      
    </div>
    </div>
    </>
  );
}

export default SkillCard;
