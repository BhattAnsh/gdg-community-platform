'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function AppleInspiredCollegeCommunityLandingPage() {
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("@dotlottie/player-component").then(() => {
      if (lottieRef.current && !lottieRef.current.hasChildNodes()) {
        const playerElement = document.createElement("dotlottie-player")
        playerElement.setAttribute("src", "/college-animation.json")
        playerElement.setAttribute("background", "transparent")
        playerElement.setAttribute("speed", "1")
        playerElement.setAttribute("loop", "")
        playerElement.setAttribute("autoplay", "")
        playerElement.style.width = "100%"
        playerElement.style.height = "100%"
        lottieRef.current.appendChild(playerElement)
      }
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <p className="text-sm font-medium">
          New event announced! Join us for the Summer Fest on June 15th.{" "}
          <Link href="#" className="underline hover:text-blue-200">
            Learn more
          </Link>
        </p>
      </div>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="text-2xl font-semibold text-gray-900" href="#">
            College Community
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["Events", "Gallery", "Team", "FAQ"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Join Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Welcome to Our College Community
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Join us in creating unforgettable memories and building lasting connections.
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                    Join Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 h-[300px]" ref={lottieRef}></div>
            </div>
          </div>
        </section>
        
        <section id="events" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-none shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-900">{10 + i}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">May 2024</p>
                        <h3 className="text-xl font-semibold text-gray-900">Community Event {i}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Join us for an exciting community gathering!</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Student Center</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="gallery" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Image
                src="/banner-2650x500.png"
                alt="Google Developer Groups banner"
                width={2650}
                height={500}
                className="w-full h-auto"
              />
              <Image
                src="/banner-1440x500.png"
                alt="Google Developer Groups banner"
                width={1440}
                height={500}
                className="w-full h-auto hidden md:block"
              />
              <Image
                src="/banner-640x500.png"
                alt="Google Developer Groups banner"
                width={640}
                height={500}
                className="w-full h-auto hidden lg:block"
              />
            </div>
          </div>
        </section>
        
        <section id="team" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="text-center">
                  <div className="mb-4 relative">
                    <div className="aspect-square rounded-full overflow-hidden border-4 border-gray-200">
                      <Image
                        src={`/team-member-${i}.jpg`}
                        alt={`Team member ${i}`}
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Team Member {i}</h3>
                  <p className="text-gray-600 mb-2">Position {i}</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="faq" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 hover:text-gray-900 py-4">
                    Question {i}?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">College Community</h3>
              <p className="text-sm text-gray-400">© 2024 College Community. All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase">Quick Links</h4>
              <ul className="space-y-2">
                {["Events", "Gallery", "Team", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link className="text-sm text-gray-400 hover:text-white transition-colors" href={`#${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase">Legal</h4>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase">Connect</h4>
              <ul className="space-y-2">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}