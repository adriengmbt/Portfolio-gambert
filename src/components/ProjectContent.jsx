import React from "react";
import Project from "./Project"; // Assurez-vous de donner le bon chemin

import img1 from "../assets/image/Diapo_soutenance.png";
import img2 from "../assets/image/fondasol.png";
import img3 from "../assets/image/Goweb.png";
import backgroundimg from "../assets/image/building.png";
import { Fade } from "react-awesome-reveal";
import Svg from "./Svg";
// Importez les images pour vos autres projets

function ProjectOne() {
  return (
    <>
    <div className="project__container-svg">
      <Svg />
    </div>

    <Project
      title="First Project"
      image={img1}
      description="I was part of the development of the application as a full stack developer"
    />

    </>
  );
}

function ProjectTwo() {
  return (
    <>
      <div className="project__container-background">
      <Fade direction="top" triggerOnce delay={1500}  >
        <img className="projectTwo__img-background" src={backgroundimg} alt="img" />
      </Fade>
      </div>
      <Project
        title="Second Project"
        image={img2}
        description="Description for the second project"
      />
    </>
  );
}


function ProjectThree() {
    return (
      <>
      <Project
        title="Second Project"
        image={img3}
        description="Description for the second project"
      />
      <div className="projectThree__container-stars">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      </div>

      </>
    );
  }

export { ProjectOne, ProjectTwo, ProjectThree };