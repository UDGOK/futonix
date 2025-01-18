"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is design-build construction?</AccordionTrigger>
        <AccordionContent>
          Design-build is a construction delivery method where both design and construction services are contracted with a single entity, streamlining the process and improving communication.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What types of projects do you handle?</AccordionTrigger>
        <AccordionContent>
          We specialize in commercial construction, including office buildings, retail spaces, industrial facilities, and mixed-use developments.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do you ensure project quality?</AccordionTrigger>
        <AccordionContent>
          We implement rigorous quality control processes, use premium materials, and employ experienced professionals to ensure every project meets our high standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What safety measures do you follow?</AccordionTrigger>
        <AccordionContent>
          Safety is our top priority. We follow OSHA regulations, conduct regular safety training, and implement comprehensive safety plans on all job sites.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can you work within my budget?</AccordionTrigger>
        <AccordionContent>
          Absolutely. We provide detailed cost estimates and work closely with clients to deliver projects that meet both their needs and budget constraints.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}