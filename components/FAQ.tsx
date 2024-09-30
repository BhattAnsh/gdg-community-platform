import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#484848]"><u>Frequently Asked Questions 🤔</u></h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 hover:text-[#4285f4] py-4">
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
  )
}

export default FAQ