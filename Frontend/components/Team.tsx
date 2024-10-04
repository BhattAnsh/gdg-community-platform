'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  { 
    name: "Kartikey", 
    position: "Organiser", 
    description: "Ensuring smooth coordination and success of all club activities",
    image: "/kartikeya.jpg"
  },
  { 
    name: "Vivek Mishra", 
    position: "Coordinator", 
    description: "Guiding and Supporting the team with academic insights",
    image: "/vivek_misra.jpg"
  },
  { 
    name: "Aarushi", 
    position: "Management Lead", 
    description: "Driving efficient event planning and execution",
    image: "/aarushi.jpg"
  },
  { 
    name: "Moksha Kohli", 
    position: "Management Co-Lead", 
    description: " I assist in organizing events and community outreach.",
    image: "/moksh.jpg"
  },
  { 
    name: "Poorvi Parshar", 
    position: "Management Co-Lead", 
    description: "I ensure seamless management and team collaboration.",
    image: "/poorvi.jpg"
  },
  { 
    name: "Sudipta Sarkar", 
    position: "AI-ML Lead", 
    description: "Leading our community’s AI/ML initiatives with innovative projects.",
    image: "/sudipta.jpg"
  },
  { 
    name: "Nishchay Chaurasia", 
    position: "AI/ML Co-Lead", 
    description: "I support AI/ML development and knowledge-sharing within the team.",
    image: "/nishchay.jpg"
  },
  { 
    name: "Shreyanshi Singhal", 
    position: "Web Lead", 
    description: "As the Web Lead, I spearhead web development efforts to deliver impactful solutions.",
    image: "/shreya.jpg"
  },
  { 
    name: "Ansh Bhatt", 
    position: "Web Co-Lead", 
    description: "I assist in crafting efficient and responsive web projects.",
    image: "/ansh.jpg"
  },
  { 
    name: "Swati Sharma", 
    position: "Android Lead", 
    description: "I drive mobile app development and engage the community in Android initiatives.",
    image: "/swati.jpg"
  },
  { 
    name: "Harsh Kumar", 
    position: "Cloud Lead", 
    description: "I empower the community to explore the limitless possibilities of cloud computing.",
    image: "/harsh.jpg"
  },
  { 
    name: "Abhinav Jain", 
    position: "Graphic Design Lead", 
    description: "Creating visually appealing designs for events and promotions.",
    image: "/abhinav.jpg"
  },
  { 
    name: "Kanika Sharma", 
    position: "Graphic Design Co-Lead", 
    description: "I support in designing captivating visual content for the club.",
    image: "/kanika.jpg"
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
                    <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
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