import React from "react";
import video from "../assets/video/Sucre_1.mp4";


function Additionnal() {
    return (
        <>
            <div className="additional__video-container">
                <div className="additional__container-text">
                <h2 className="additional__h2">keep scrolling to see the 
                    end of my portfolio</h2>
                </div>

                <div className="additional__video-wrapper">
                    <video className="additional__video" autoPlay loop muted src={video} />
                </div>            </div>
        </>
    );
}

export default Additionnal;