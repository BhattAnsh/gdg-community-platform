import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

import React from "react";
function Events() {
  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-[#202124]">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { color: "#4285f4", name: "Tech Talk" },
            { color: "#34a853", name: "Eco Fair" },
            { color: "#fbbc04", name: "Career Expo" },
          ].map((event, i) => (
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
                    {i + 11}
                  </div>
                  <div>
                    <p className="text-sm text-[#5f6368]">May 2024</p>
                    <h3 className="text-xl font-medium text-[#202124]">
                      {event.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#5f6368] mb-4">
                  Join us for an exciting community gathering!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5f6368]">Student Center</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1a73e8] hover:bg-[#e8f0fe]"
                  >
                    Register <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
