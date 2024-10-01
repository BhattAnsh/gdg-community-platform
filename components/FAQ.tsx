import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqItems = [
  {
    question: "What is GDG On Campus?",
    answer: "GDG On Campus is a student community that empowers individuals to learn, share, and build technology solutions. We're backed by Google Developers and aim to bring together students passionate about technology."
  },
  {
    question: "Do I need prior experience to join?",
    answer: "Absolutely not! We welcome students from all levels—whether you're a beginner or an experienced developer. Our goal is to create a supportive environment where everyone can learn and grow together."
  },
  {
    question: "What kind of events do you organize?",
    answer: "Our events range from hands-on workshops and tech talks to networking sessions, hackathons, and community projects. No matter your interest, you'll find something that excites you!"
  },
  {
    question: "How can I contribute to the community?",
    answer: "You can contribute by participating in events, joining projects, or even leading workshops! We're always open to ideas and initiatives that bring value to our members."
  }
]

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#484848]">FAQ</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-gray-900 hover:text-[#4285f4] py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ