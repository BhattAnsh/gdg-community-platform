'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  { name: "Team Member 1", position: "Position 1" },
  { name: "Team Member 2", position: "Position 2" },
  { name: "Team Member 3", position: "Position 3" },
  { name: "Team Member 4", position: "Position 4" },
  { name: "Team Member 5", position: "Position 5" },
  { name: "Team Member 6", position: "Position 6" },
  { name: "Team Member 7", position: "Position 7" },
  { name: "Team Member 8", position: "Position 8" },
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
                        src={`/placeholder.svg?height=160&width=256&text=Team+Member+${(i % teamMembers.length) + 1}`}
                        alt={`Team member ${(i % teamMembers.length) + 1}`}
                        width={256}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#4285f4] mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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