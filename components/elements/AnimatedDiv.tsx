// Importez les modules nécessaires
import React, { useEffect, useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
// Créez votre composant Next.js avec Framer Motion
const AnimatedDiv = ({ faqs }: any) => {
    const faqRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('faq-item-visible');
            } else {
              entry.target.classList.remove('faq-item-visible');
            }
          });
        },
        { threshold: 0.5 }
      );
  
      if (faqRef.current) {
        observer.observe(faqRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []); 
  
    return (
      <div>
        <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: any, index: any) => (
            
            
                <AccordionItem key={index} ref={faqRef} className="faq-item" value={"item-"+index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
           
        ))}
        </Accordion>
      </div>
    );
  };
  
export default AnimatedDiv;
