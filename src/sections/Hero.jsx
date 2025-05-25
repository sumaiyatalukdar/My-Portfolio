//import { Leva, useControls } from 'leva';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from 'react-responsive';
import {calculateSizes} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
const Hero = () => {
  
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

return (
  <section className="relative w-full h-screen overflow-hidden">
    {/* Background Video */}
    <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 min-h-screen w-full object-cover z-[-1]"
  aria-hidden="true"
>

      <source src="assets/galaxy.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Hero Content */}
    <header className="absolute w-full mx-auto flex flex-col items-center text-center gap-3 sm:mt-36 mt-24 px-4">
        <h1 className="sm:text-3xl text-2xl font-medium text-white font-generalsans">
          Hi, I am Sumaiya Talukdar <span className="waving-hand">👋</span> A Web Developer!
        </h1>
        <h2 className="text-[2.5rem] sm:text-[3rem] font-extrabold text-gray_gradient leading-tight">
          Focused on creating seamless digital experience.
        </h2>
      </header>
    <div className="w-full h-full absolute inset-0">
      {/*<Leva />*/}
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
              scale={sizes.deskScale}
            />

          </HeroCamera>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
    </div>

  </section>
);
};

export default Hero;
