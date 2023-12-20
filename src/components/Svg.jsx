
import React from "react";
import { useSpring, animated } from '@react-spring/web';


function Svg() {
  const [hoveredFirst, setHoveredFirst] = React.useState(false);
  const [hoveredSecond, setHoveredSecond] = React.useState(false);
  const [hoveredThird, setHoveredThird] = React.useState(false);
  const [hoveredFourth, setHoveredFourth] = React.useState(false);
  const [hoveredFifth, setHoveredFifth] = React.useState(false);
  const [hoveredSixth, setHoveredSixth] = React.useState(false);
  // Ajoute des états similaires pour chaque composant SVG

  const { y: yFirst } = useSpring({
    y: hoveredFirst ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const { y: ySecond } = useSpring({
    y: hoveredSecond ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const { y: yThird } = useSpring({
    y: hoveredThird ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const { y: yFourth } = useSpring({
    y: hoveredFourth ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const { y: yFifth } = useSpring({
    y: hoveredFifth ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const { y: ySixth } = useSpring({
    y: hoveredSixth ? 10 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });
  // Ajoute des animations similaires pour chaque composant SVG

  return (
    <>
      <div
        className="first-svg"
        onMouseEnter={() => setHoveredFirst(true)}
        onMouseLeave={() => setHoveredFirst(false)}
      >
        <animated.svg
          width="481"
          height="382"
          style={{ transform: yFirst.interpolate((val) => `translateY(-${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 481 382"
          fill="none"
        >
      <svg xmlns="http://www.w3.org/2000/svg" width="481" height="382" viewBox="0 0 481 382" fill="none">
                <g filter="url(#filter0_d_43_44)">
                    <path d="M475.5 373L310.822 132.759C272.657 77.0818 209.495 43.801 141.993 43.801V43.801C111.053 43.8011 80.5023 36.9065 52.561 23.6185L5.00005 1.00005" stroke="#9A7752" stroke-width="1.5"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_44" x="0.677734" y="0.322754" width="479.441" height="381.101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_44"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_44" result="shape"/>
                    </filter>
                </defs>
            </svg>         
        </animated.svg>
      </div>

      <div
        className="second-svg"
        onMouseEnter={() => setHoveredSecond(true)}
        onMouseLeave={() => setHoveredSecond(false)}
      >
        <animated.svg
          width="191"
          height="376"
          style={{ transform: ySecond.interpolate((val) => `translateY(-${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 191 376"
          fill="none"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="191" height="376" viewBox="0 0 191 376" fill="none">
                <g filter="url(#filter0_d_43_60)">
                <path d="M185.5 367L32.5866 102.251C14.6318 71.1651 5.17887 35.8991 5.17858 0.000149517V0.000149517" stroke="#9A7752" stroke-width="1.5"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_60" x="0.428711" y="0.00012207" width="189.721" height="375.375" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_60"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_60" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </animated.svg>
      </div>

      <div
        className="third-svg"
        onMouseEnter={() => setHoveredThird(true)}
        onMouseLeave={() => setHoveredThird(false)}
      >
        <animated.svg
          width="345"
          height="410"
          style={{ transform: yThird.interpolate((val) => `translateY(-${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 345 410"
          fill="none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="345" height="410" viewBox="0 0 345 410" fill="none">
                <g filter="url(#filter0_d_43_56)">
                    <path d="M340 1.50002L324.576 10.8627C256.169 52.387 237.862 143.509 284.923 208.232V208.232C338.114 281.385 289.366 384.418 199.072 389.683L5.00024 401" stroke="#9A7752" stroke-width="1.5"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_56" x="0.956543" y="0.858887" width="343.433" height="408.89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_56"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_56" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </animated.svg>
      </div>

      <div
        className="fourth-svg"
        onMouseEnter={() => setHoveredFourth(true)}
        onMouseLeave={() => setHoveredFourth(false)}
      >
        <animated.svg
          width="371"
          height="316"
          style={{ transform: yFourth.interpolate((val) => `translateY(${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 371 316"
          fill="none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="371" height="316" viewBox="0 0 371 316" fill="none">
                <g filter="url(#filter0_d_42_53)">
                    <path d="M5 307L164.811 224.29C192.625 209.895 207.101 178.441 199.945 147.951V147.951C189.665 104.154 213.391 59.5115 255.443 43.5264L366 1.5" stroke="#9A7752" stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_42_53" x="0.25" y="0.749756" width="370.5" height="315" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_53"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_53" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </animated.svg>
      </div>

      <div
        className="fifth-svg"
        onMouseEnter={() => setHoveredFifth(true)}
        onMouseLeave={() => setHoveredFifth(false)}
      >
        <animated.svg
          width="134"
          height="374"
          style={{ transform: yFifth.interpolate((val) => `translateY(${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 374"
          fill="none"
        >
                      <svg xmlns="http://www.w3.org/2000/svg" width="134" height="374" viewBox="0 0 134 374" fill="none">
                <g filter="url(#filter0_d_43_42)">
                    <path d="M85.501 365V365C136.287 306.319 142.957 221.411 101.957 155.519L5.49993 0.499961" stroke="#9A7752" stroke-width="1.5"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_42" x="0.863281" y="0.10376" width="132.581" height="373.387" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_42"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_42" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </animated.svg>
      </div>

      <div
        className="sixth-svg"
        onMouseEnter={() => setHoveredSixth(true)}
        onMouseLeave={() => setHoveredSixth(false)}
      >
        <animated.svg
          width="533"
          height="386"
          style={{ transform: ySixth.interpolate((val) => `translateY(${val}px)`) }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 533 386"
          fill="none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="533" height="386" viewBox="0 0 533 386" fill="none">
                <g filter="url(#filter0_d_43_58)">
                    <path d="M528 377L364.687 328.469L357.986 327.349C286.676 315.427 222.391 277.299 177.734 220.439L4.99997 0.499988" stroke="#9A7752" stroke-width="1.5"/>
                </g>
                <defs>
                    <filter id="filter0_d_43_58" x="0.410156" y="0.0367432" width="531.804" height="385.682" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_58"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_58" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </animated.svg>
      </div>
    </>
  );
}

export default Svg;
