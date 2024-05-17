import React from "react";
import Project from "./Project"; // Assurez-vous de donner le bon chemin

import img1 from "../assets/image/Diapo_soutenance.png";
import img2 from "../assets/image/fondasolNew.png";
import img3 from "../assets/image/Goweb.png";
import Svg from "./Svg";
import InfoImg from "../assets/image/infoImg.png";
import InfoImg2 from "../assets/image/fondasol2.png";
import InfoImg3 from "../assets/image/gowebInfo.jpg";
import Anim from "../assets/Anim.json";
import Lottie from "lottie-react";
// Importez les images pour vos autres projets
import imageHopteo from "../assets/image/hopteoScreen.png";
import backgroundHopteo from "../assets/image/ranking_inge_commerce.webp";
import imageHopteo2 from "../assets/image/training_presentation.webp"

function ProjectZero() {
  
  return (
    <>
    <div className="project__container-background project__container-hopteo">
      <img src={backgroundHopteo} alt="img" className="project__img-background-hopteo" />
    </div>
    <Project 
      title="First Project"
      image={imageHopteo}
      description="I was part of the development of the application as a full stack developer"
      tilte2 = "Hopteo"
      description2 = "The Hopteo project is a website for a company specializing in the sale of products. The site is composed of several pages, a home page, a page presenting the company, a page presenting the services, a page presenting the news, a page presenting the contact information and a page presenting the legal information. The main goal is to make this simple, intuitive and secure for users."
      image2 = {imageHopteo2}
      link="https://hopteo.vercel.app/"
    />
    </>
  );
}


function ProjectOne() {
  return (
    <>
    <div className="project__container-svg">
      <Svg />
    </div>

    <Project
      title="Second Project"
      image={img1}
      description="I was part of the development of the application as a full stack developer"
      tilte2 = "Rerseve Ton Logis"
      description2 = "The “Réserve Ton Logis” project offers an accommodation reservation platform, specifically guest rooms in a gîte. The team has implemented several features to improve this experience: a site entirely available online, unit tests to ensure the solidity of the code, a fast and intuitive interface, the creation and management of accounts on the user side, a reservation calendar in order to simplify the reservation system. The main goal is to make this simple, intuitive and secure for users."
      image2 = {InfoImg}
      link="https://reserve-ton-logis.vercel.app/"

    />

    </>
  );
}

function ProjectTwo() {
  return (
    <>
        <Lottie animationData={Anim} className="project__container-background" loop autoPlay	 />

      <Project
        title="Third Project"
        image={img2}
        description="I was part of the development of the application as a front-end developer"
        tilte2= "Fondasol"
        description2= "The Fondasol project is a website for a company specializing in geotechnical studies. The site is composed of several pages, a home page, a page presenting the company, a page presenting the services, a page presenting the news, a page presenting the contact information and a page presenting the legal information. The main goal is to make this simple, intuitive and secure for users."
         image2={InfoImg2}
          link="https://www.groupefondasol.com/fr/filiales/fondasol/"
      />
    </>
  );
}


function ProjectThree() {
    return (
      <>
      <Project
        title="Third fourth"
        image={img3}
        description=" Internship project as a full stack developer at Goweb during my second year of DUT"
        tilte2= "Goweb project"
        description2= "The Goweb project is a project carried out as part of a company internship. The mission consisted of creating a fake web application for the sale of materials and others in order to learn how to manipulate data and display it correctly."
        image2={InfoImg3}
        link="https://github.com/adriengmbt/goweb-project"
      />
      <div className="projectThree__container-stars">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      </div>

      </>
    );
  }

export { ProjectOne, ProjectTwo, ProjectThree , ProjectZero};