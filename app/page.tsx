"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
        playerElement.style.height = "50vh";
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
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-white font-sans">
        <div className="bg-[#FBEBE9] text-[#C5221F] py-2 px-4 text-center relative z-10">
          <p className="text-sm font-medium">
            New event announced! Join us for the Info Session on October 2nd.{" "}
            <Link href="#" className="underline hover:text-[#ea4335]">
              Learn more
            </Link>
          </p>
        </div>
        <header className="sticky top-0 z-50 bg-white border-b border-[#dadce0] transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link className="text-2xl font-medium text-[#202124]" href="#">
              <Image src={"/GDGLogo.png"} alt="logo" width={200} height={100}></Image>
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
            <div className="md:hidden">
              <button
                className="text-[#202124] focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <svg
                    className="w-6 h-6 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`md:hidden bg-white border-t border-[#dadce0] transition-max-height duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            {menuOpen && (
              <nav>
                <ul className="flex flex-col space-y-4 p-4">
                  {["Events", "Gallery", "Team", "FAQ"].map((item) => (
                    <li key={item}>
                      <Link
                        className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Button
                      variant="outline"
                      className="bg-button border-[#dadce0] text-white hover:bg-buttonHover hover:border-buttonHover w-full"
                      onClick={() => setMenuOpen(false)}
                    >
                      Join Now
                    </Button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>
        <main className="flex-1">
          <section className="flex items-start justify-start md:block py-0 md:py-32 bg-[#f8f9fa] h-[100vh] pl-[10px] md:pl-[30px]">
            <div className="container mx-auto px-4 text-start md:text-left">
              <div className="flex flex-col-reverse md:flex-row items-left">
                <div className="md:w-1/2 text-left md:text-left mb-8 md:mb-0">
                  <h1 className="text-xl md:text-6xl font-medium tracking-tight text-[#202124] mb-6">
                    Welcome to{" "}
                    <span className="text-[#1a73e8]">GDG On Campus!</span>
                  </h1>
                  <p className="text-xl relative z-10 md:text-l text-[#5f6368] mb-8">
                  Step into a world where innovation meets collaboration. 
                  Whether youre here to learn, lead, or create, our vibrant community 
                  is here to help you thrive. Participate in our technical events, and you 
                  might even grab some cool goodies—we believe every achievement deserves a 
                  little celebration. Your journey starts here, join us today!
                  </p>
                  <div className="space-x-4">
                    <Button
                      size="lg"
                      className="bg-[#1a73e8] text-white hover:bg-[#174ea6]"
                    >
                      Join Now
                    </Button>
                    <Button size="lg" variant="outline" className="text-[#1a73e8] border-[#dadce0] hover:bg-[#f1f3f4] hover:border-[#d2e3fc]">
                    Learn More
                  </Button>
                  </div>
                </div>
                <div className="relative z-10 md:w-1/2 h-[fit-content] md:h-[500px]" ref={heroLottieRef}></div>
              </div>
            </div>
          </section>
          <Events />
          <Gallery />
          <Team />
          <FAQ />
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
      <Image src={"./blob.svg"} alt="blob" width={1100} height={1100} className="hidden md:block absolute right-[-8vw] top-[-1vh] w-[60vw] z-0"></Image>
    </>
  );
}
