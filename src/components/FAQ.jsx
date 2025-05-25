import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import faqData from './FaqData'
const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full mt-8 rounded p-4" >
   
   {
    faqData.map((faq)=>{
        return (
            <AccordionItem className="mb-5 hover:bg-blue-600/20 p-4 rounded  md:border-2 border-black" key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="md:text-3xl text-xl font-semibold text-[#014B5E]">{faq.id}. {faq.question}</AccordionTrigger>
                <AccordionContent className="md:text-2xl text-lg text-[#032E3C]">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
        )
    })
   }
  </Accordion>
  )
}

export default FAQ



  

  