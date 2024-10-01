'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  { 
    name: "Sarah Johnson", 
    position: "Community Lead", 
    description: "Passionate about building inclusive tech communities and fostering innovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sarah-johnson-RWkZkj8NXDtpL0Kd9X3fhGhrOWQIbA.jpg"
  },
  { 
    name: "Michael Chen", 
    position: "Technical Coordinator", 
    description: "Full-stack developer with a knack for solving complex problems and mentoring peers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/michael-chen-0ISoMpzrO5Wd9Ue6Zy9Ij5Iy1Hs9Hy.jpg"
  },
  { 
    name: "Emily Rodriguez", 
    position: "Event Organizer", 
    description: "Creative mind behind our engaging workshops and networking events.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emily-rodriguez-Wd9Ue6Zy9Ij5Iy1Hs9HyRWkZkj8NX.jpg"
  },
  { 
    name: "David Kim", 
    position: "AI Research Lead", 
    description: "Exploring the frontiers of AI and machine learning to drive innovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/david-kim-Dtpj5Iy1Hs9HyRWkZkj8NXL0Kd9X3f.jpg"
  },
  { 
    name: "Aisha Patel", 
    position: "Outreach Coordinator", 
    description: "Bridging the gap between our community and industry partners.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aisha-patel-hGhrOWQIbA0ISoMpzrO5Wd9Ue6Zy9I.jpg"
  },
  { 
    name: "Carlos Mendoza", 
    position: "Web Development Lead", 
    description: "Crafting beautiful and functional web experiences for our community.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carlos-mendoza-j5Iy1Hs9HyRWkZkj8NXL0Kd9X3fhG.jpg"
  },
  { 
    name: "Lila Wong", 
    position: "UX/UI Designer", 
    description: "Creating intuitive and visually appealing designs for our projects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lila-wong-hrOWQIbA0ISoMpzrO5Wd9Ue6Zy9Ij5.jpg"
  },
  { 
    name: "Alex Novak", 
    position: "Cybersecurity Specialist", 
    description: "Ensuring the safety and integrity of our digital infrastructure.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alex-novak-Iy1Hs9HyRWkZkj8NXL0Kd9X3fhGhrO.jpg"
  },
]

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const container = containerRef.current
    if (!scrollContainer || !container) return

    let animationFrameId: number
    let scrollDirection = 1
    let scrollPosition = 0

    const scroll = () => {
      if (!scrollContainer || !container) return

      scrollPosition += 0.5 * scrollDirection
      scrollContainer.scrollLeft = scrollPosition

      if (scrollPosition <= 0 || scrollPosition >= scrollContainer.scrollWidth - container.clientWidth) {
        scrollDirection *= -1
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrameId = requestAnimationFrame(scroll)
          } else {
            cancelAnimationFrame(animationFrameId)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(container)

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="team" className="py-20 md:py-32 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#fbbc05]">Meet the Team</h2>
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-6 pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {teamMembers.concat(teamMembers).map((member, i) => (
            <div key={i} className="flex-none w-64">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.position}`}
                        width={256}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#4285f4] mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500">{member.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}