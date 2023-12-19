import React from "react";
import Project from "./Project"; // Assurez-vous de donner le bon chemin

import img1 from "../assets/image/Diapo_soutenance.png";
import img2 from "../assets/image/fondasol.png";
import img3 from "../assets/image/Goweb.png";
// Importez les images pour vos autres projets

function ProjectOne() {
  return (
    <Project
      title="First Project"
      image={img1}
      description="I was part of the development of the application as a full stack developer"
    />
  );
}

function ProjectTwo() {
  return (
    <Project
      title="Second Project"
      image={img2}
      description="Description for the second project"
    />
  );
}


function ProjectThree() {
    return (
      <Project
        title="Second Project"
        image={img3}
        description="Description for the second project"
      />
    );
  }

export { ProjectOne, ProjectTwo, ProjectThree };