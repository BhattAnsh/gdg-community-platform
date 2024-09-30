"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Image from "next/image";

export default function GoogleInspiredCollegeCommunityLandingPage() {
  const heroLottieRef = useRef<HTMLDivElement>(null);
  const footerLottieRef = useRef<HTMLDivElement>(null);

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
        playerElement.style.height = "100%";
        heroLottieRef.current.appendChild(playerElement);
      }

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
  }, []); // <-- Corrected useEffect closing properly

  return (
    <>
    <div className="relative flex flex-col min-h-screen bg-white font-sans">
      <div className="bg-[#FBEBE9] text-[#C5221F] py-2 px-4 text-center relative z-10">
        <p className="text-sm font-medium">
          New event announced! Join us for the Summer Fest on June 15th.{" "}
          <Link href="#" className="underline hover:text-[#ea4335]">
            Learn more
          </Link>
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-[#dadce0]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="text-2xl font-medium text-[#202124]" href="#">
            College Community
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["Events", "Gallery", "Team", "FAQ"].map((item) => (
              <Link
                key={item}
                className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            className="bg-button hidden md:inline-flex border-[#dadce0] text-white hover:bg-buttonHover hover:border-buttonHover"
          >
            Join Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-[#f8f9fa] h-[100vh]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#202124] mb-6">
                  Welcome to Our{" "}
                  <span className="text-[#1a73e8]">College Community</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#5f6368] mb-8">
                  Join us in creating unforgettable memories and building
                  lasting connections.
                </p>
                <div className="space-x-4">
                  <Button
                    size="lg"
                    className="bg-[#1a73e8] text-white hover:bg-[#174ea6]"
                  >
                    Join Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white bg-grey border-none hover:bg-darkGrey hover:border-darkGrey hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative z-10 md:w-1/2 h-[500px]" ref={heroLottieRef}></div>
            </div>
          </div>
        </section>
        <Events />
        <Gallery />
        <Team/>
        <FAQ/>
        <section className="py-20 md:py-32 bg-[#e8f0fe]">
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
                <Button
                  size="lg"
                  className="bg-[#34a853] text-white hover:bg-[#2d9248]"
                >
                  Connect with us <ArrowRight className="ml-2 h-5 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#202124] py-4">{/* Empty black footer */}</footer>
    </div>
    <Image src={"./blob.svg"} alt="blob" width={1100} height={1100} className="absolute right-[-8vw] top-[-1vh] w-[60vw]"></Image>
    </>
  );
}
