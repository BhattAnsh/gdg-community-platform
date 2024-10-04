import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

const events = [
  {
    color: "#4285f4",
    name: "Info Session",
    date: { day: "02", month: "Oct", year: "2024" },
    description: "Curious about what GDG On Campus is all about? Join our Info Session to learn how you can be a part of our community, explore the benefits, and get insights on how to kickstart your journey with us. A perfect opportunity to meet like-minded peers and discover what's in store!",
    location: "Google Meet",
    link:"https://gdg.community.dev/events/details/google-gdg-on-campus-dronacharya-group-of-institutions-greater-noida-india-presents-gdg-dronacharya-group-of-instituitions-info-session-2024/"
  },
  {
    color: "#34a853",
    name: "Introduction to AI Technologies",
    date: { day: "00", month: "", year: "" },
    description: "Step into the fascinating world of Artificial Intelligence! This session will cover the basics of AI, its current trends, and how it's transforming industries worldwide. If you're a beginner or simply interested in tech, this is your chance to build a strong foundation in AI.",
    location: "Yet to be revealed",
    link:"#"
  },
  {
    color: "#fbbc04",
    name: "Build with AI Event",
    date: { day: "00", month: "", year: "" },
    description: "Bring your ideas to life with AI! Join us for an exciting hands-on event where you'll team up to create innovative solutions using cutting-edge AI tools. Whether you're a coder or a designer, everyone has a role to play. Let's build the future together!",
    location: "Yet to be revealed",
    link:'#'
  }
]

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-[#202124]">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <Card
              key={i}
              className="border border-[#dadce0] shadow-sm rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    style={{ backgroundColor: event.color }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-xl"
                  >
                    {event.date.day}
                  </div>
                  <div>
                    <p className="text-sm text-[#5f6368]">{`${event.date.month} ${event.date.year}`}</p>
                    <h3 className="text-xl font-medium text-[#202124]">
                      {event.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#5f6368] mb-4 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5f6368]">{event.location}</span>
                  <a href={event.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#1a73e8] hover:bg-[#e8f0fe]"
                    >
                      Register Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}