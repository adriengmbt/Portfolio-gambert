import React, { useEffect, useState } from "react";
import video2 from "../assets/video/Sucre_1.mp4";
import video1 from "../assets/video/Sucre_5.mp4";
import arrow from "../assets/image/icons8-flèche-droite-50.png";
import insta from "../assets/image/icons8-instagram-50.png";
import linkedin from "../assets/image/icons8-linkedin-50.png";
import github from "../assets/image/icons8-github-50.png";
import { Fade } from "react-awesome-reveal";

function Header() {
  const [videoSource, setVideoSource] = useState(video1);
  const [showBars, setShowBars] = useState(false);






  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        setVideoSource(video2);
        setShowBars(true);
        window.removeEventListener("wheel", handleWheel);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);


  return (
    <>
      <div className="header__video-container">
      <video className="header__video" autoPlay loop muted src={video2} preload="auto" style={{display: "none"}} />
        <video className="header__video" autoPlay loop muted src={videoSource} preload="auto"  />
        
      </div>

      {showBars && (
        <div className="header__container">
          
          <div className="header__container-title">
            <Fade delay={500} triggerOnce>
            <h1 className="header__title">Gambert Adrien</h1>
            </Fade>
          </div>
          <div className="header__container-information">
            <div className="header__container-subtitle">
            <Fade cascade delay={1000} triggerOnce>
            <span className="header__subtitle">Full-stack developer</span> 
            <span className="header__subtitle"> Based in Calais </span>
            <span className="header__subtitle">20 years</span>
            </Fade>
            </div>
            <Fade delay={1500} triggerOnce>
            <img src={arrow} alt="arrow" className="header__arrow" />   
            </Fade> 
          </div>
          <div className="header__container-social-links">
          <Fade cascade damping={0.5} delay={2000} triggerOnce>
            <img src ={linkedin} alt="linkedin" className="header__social-img" />
            <img src ={github} alt="github" className="header__social-img" />
            <img src ={insta} alt="insta" className="header__social-img" />
          </Fade>
          </div>
        </div>
      )
      }
      
      <div className={`header__bar-top ${showBars ? "visible" : ""}`} />

        <div className={`header__bar-bottom ${showBars ? "visible" : ""}`} />
    </>
  );
}

export default Header;
