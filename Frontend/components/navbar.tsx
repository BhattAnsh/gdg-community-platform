"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#dadce0] transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link className="text-2xl font-medium text-[#202124]" href="#">
          <Image
            src={"/GDGLogo.png"}
            alt="logo"
            width={200}
            height={100}
          ></Image>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {["Events", "Gallery", "Team", "FAQ"].map((item) => (
            <Link
              key={item}
              className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
              href={`/User`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <a href="https://gdg.community.dev/gdg-on-campus-dronacharya-group-of-institutions-greater-noida-india/">
          <Button
            variant="outline"
            className="bg-button hidden md:inline-flex border-[#dadce0] text-white hover:bg-buttonHover hover:border-buttonHover"
          >
            Join Now
          </Button>
        </a>
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
                <a href="1https://gdg.community.dev/gdg-on-campus-dronacharya-group-of-institutions-greater-noida-india/">
                  <Button
                    variant="outline"
                    className="bg-button border-[#dadce0] text-white hover:bg-buttonHover hover:border-buttonHover w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Join Now
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
