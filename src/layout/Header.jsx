import React, { useEffect, useState } from "react";
import video2 from "../assets/video/Sucre_1.mp4";
import video1 from "../assets/video/Sucre_5.mp4";

function Header() {
  const [videoSource, setVideoSource] = useState(video1);
  const [showBars, setShowBars] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY != 0) {
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
        <video className="header__video" autoPlay loop muted src={videoSource}  />
 

      </div>

      <div className="header__container">
        <h1 className="header__title">Gambert Adrien</h1>
      </div>

      <div className={`header__bar-top ${showBars ? "visible" : ""}`} />

        <div className={`header__bar-bottom ${showBars ? "visible" : ""}`} />
    </>
  );
}

export default Header;
