import React, {useRef, useEffect} from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";


function Footer() {
    const footerLottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@dotlottie/player-component").then(() => {
      if (footerLottieRef.current && !footerLottieRef.current.hasChildNodes()) {
        const playerElement = document.createElement("dotlottie-player");
        playerElement.setAttribute("src", "/lottie.json");
        playerElement.setAttribute("background", "transparent");
        playerElement.setAttribute("speed", "1");
        playerElement.setAttribute("loop", "");
        playerElement.setAttribute("autoplay", "");
        playerElement.style.width = "200px";
        playerElement.style.height = "200px";
        footerLottieRef.current.appendChild(playerElement);
      }
    });
  }, []);
  return (
    <section className="py-20 md:py-32 bg-[#E6F4EA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={footerLottieRef} className="mb-8 md:mb-0"></div>
          <div className="text-center md:text-left md:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#202124]">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-6 text-[#5f6368]">
              Become a part of something extraordinary. Join us today!
            </p>
            <a href="mailto:gdscdgi@gmail.com">
              <Button
                size="lg"
                className="bg-[#34a853] text-white hover:bg-[#2d9248]"
              >
                Connect with us <ArrowRight className="ml-2 h-5 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
