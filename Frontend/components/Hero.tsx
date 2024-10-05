import {useEffect, useRef} from "react";
import { Button } from "./ui/button";

function Hero() {
    const heroLottieRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        import("@dotlottie/player-component").then(() => {
          if (heroLottieRef.current && !heroLottieRef.current.hasChildNodes()) {
            const playerElement = document.createElement("dotlottie-player");
            playerElement.setAttribute("src", "/college-animation.json");
            playerElement.setAttribute("background", "transparent");
            playerElement.setAttribute("speed", "1");
            playerElement.setAttribute("loop", "");
            playerElement.setAttribute("autoplay", "");
            playerElement.style.width = "100%";
            playerElement.style.height = "50vh";
            heroLottieRef.current.appendChild(playerElement);
          }
        });
      }, []);
  return (
    <section className="flex items-start justify-start md:block py-0 md:py-32 bg-[#f8f9fa] h-[100vh] pl-[10px] md:pl-[30px]">
      <div className="container mx-auto px-4 text-start md:text-left">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row items-left">
          <div className="md:w-1/2 text-left md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#202124] mb-6">
              Welcome to <br />
              <span className="text-[#1a73e8]">GDG On Campus!</span>
            </h1>
            <p className="text-xl relative z-10 md:text-l text-[#5f6368] mb-8">
              Step into a world where innovation meets collaboration. Whether
              youre here to learn, lead, or create, our vibrant community is
              here to help you thrive. Participate in our technical events, and
              you might even grab some cool goodies—we believe every achievement
              deserves a little celebration. Your journey starts here, join us
              today!
            </p>
            <div className="space-x-4">
              <a href="https://gdg.community.dev/gdg-on-campus-dronacharya-group-of-institutions-greater-noida-india/">
                <Button
                  variant="outline"
                  className="bg-button hidden md:inline-flex border-[#dadce0] text-white hover:bg-buttonHover hover:border-buttonHover"
                >
                  Join Now
                </Button>
              </a>
            </div>
          </div>
          <div
            className="relative z-10 md:w-1/2 h-[fit-content] md:h-[500px]"
            ref={heroLottieRef}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
