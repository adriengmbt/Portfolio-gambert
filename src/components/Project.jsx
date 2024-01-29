import React from "react";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";



function Project({ title, image, description, tilte2, description2, image2,link }) {
  const [show, setShow] = useState(false);

  return (
    <div className="project__container">
      <h2 className="project__h2">{title}</h2>
      <div className="project__container-img">
        <Fade direction="left" delay={100} triggerOnce>
        <img className="project__img" src={image} alt="img" onClick={() => setShow(!show)} />
        </Fade>
        <div className="project__position-sellotape">
          <div className="project__sellotape">
            <Fade delay={500}>
            <p className="project__p">{description}</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="project__empty">
        <h2 className="project__p">L </h2>
      </div>


        <div  className={`project__container project__container-popup ${show ? "active" : ""}`}  >
          <div>
            <button className="project__button-close" onClick={() => setShow(!show)}>X</button>
          </div>
            <h2 className="project__h2 project__title">
              {tilte2}
            </h2>
            <div className="project__position-element">
                  <img className="project__img-popup" src={image2} alt="img" />
                  <p className="project__description">{description2}</p>
            </div>
  
          <div className="project__sellotape project__sellotape-popup">
          <a href={link} target="_blank" rel="noreferrer" className="project__link">
            <span >you can click on this button to access the site</span>
          </a>
          </div>
        </div>
    </div>
  );
}

export default Project;
