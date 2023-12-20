import React from "react";
import { Fade } from "react-awesome-reveal";





function Project({ title, image, description }) {
  return (
    <div className="project__container">
      <h2 className="project__h2">{title}</h2>
      <div className="project__container-img">
        <Fade direction="left" delay={100} triggerOnce>
        <img className="project__img" src={image} alt="img" />
        </Fade>
        <div className="project__position-sellotape">
          <div className="project__sellotape">
            <Fade delay={500}>
            <p>{description}</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="project__empty">
        <h2 className="project__p">L </h2>
      </div>
    </div>
  );
}

export default Project;
