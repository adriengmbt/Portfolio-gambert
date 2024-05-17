import React, { useEffect, useState } from "react";
import video2 from "../assets/video/Sucre_1.webm";
import video1 from "../assets/video/Sucre_5.webm";
import arrow from "../assets/image/icons8-flèche-droite-50.png";
import insta from "../assets/image/icons8-instagram-50.png";
import linkedin from "../assets/image/icons8-linkedin-50.png";
import github from "../assets/image/icons8-github-50.png";
import { Fade } from "react-awesome-reveal";
import ArrowAnimation from "../assets/arrowAnimation.json"
import Lottie from "lottie-react";
function Header() {
  const [videoSource, setVideoSource] = useState(video1);
  const [showBars, setShowBars] = useState(false);
const [showText, setShowText] = useState(false);





  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        setVideoSource(video2);
        setShowText(true);
        setShowBars(true);
        removeEventListeners();


      }
    };
  
    const handleTouchMove = () => {
      setVideoSource(video2);
      setShowBars(true);
      removeEventListeners();
    };
  
    const addEventListeners = () => {
      window.addEventListener("wheel", handleWheel);
      window.addEventListener("touchmove", handleTouchMove);
    };
  
    const removeEventListeners = () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  
    addEventListeners();
  
    return () => {
      removeEventListeners();
    };
  }, []);
  


  return (
    <>
    
      <div className="header__video-container">
      {!showText && (
        <Fade delay={1000} triggerOnce >
        <div className="header__scroll-container">
        <p className="header__scroll">Scroll down to reveal more</p>
        </div>
        </Fade>
      )}
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
            <span className="header__subtitle"> Based in Albi </span>
            <span className="header__subtitle">21 years</span>
            </Fade>
            </div>
            <Fade delay={1500} triggerOnce>
            <Lottie animationData={ArrowAnimation} className="header__arrow" loop autoPlay />
            </Fade> 
          </div>
          <div className="header__container-social-links">
          <Fade cascade damping={0.5} delay={2000} triggerOnce>
            <a href="https://www.linkedin.com/in/adrien-gambert/">
            <img src ={linkedin} alt="linkedin" className="header__social-img" />
            </a>
            <a href="https://github.com/adriengmbt/">
            <img src ={github} alt="github" className="header__social-img" />
            </a>
            <a href="https://www.instagram.com/gmbt_adri/">
            <img src ={insta} alt="insta" className="header__social-img" />
            </a>
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
