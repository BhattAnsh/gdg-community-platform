"use client";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/navbar";
import Team from "@/components/Team";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {


  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-white font-sans">
        <Navbar/>
        <main className="flex-1">
          <Hero/>
          <Events />
          <Gallery />
          <Team />
          <FAQ />
        </main>
      </div>
      <Image
        src={"./blob.svg"}
        alt="blob"
        width={1100}
        height={1100}
        className="hidden md:block absolute right-[-8vw] top-[-1vh] w-[60vw] z-0"
      ></Image>
    </>
  );
}
