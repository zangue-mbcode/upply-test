// Importez les modules nécessaires
import React, { useEffect, useMemo, useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
// Créez votre composant Next.js avec Framer Motion
const AnimatedDiv = ({ faqs }: any) => {
  const faqRefs = useMemo(() => faqs.map(() => React.createRef()), [faqs]);
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

    // Utilisez un objet pour stocker les références

    faqRefs.forEach((faqRef: any) => {
      if (faqRef.current) {
        observer.observe(faqRef.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [faqs]);

  
    return (
      <div>
        <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: any, index: any) => (
            
            
                <AccordionItem key={index} ref={faqRefs[index]} className="faq-item w-full  border-[1px] border border-gray-400 dark:border-slate-600 rounded-sm mb-5  "  value={"item-"+index}>
                    <AccordionTrigger className='hover:no-underline w-full px-5 py-[25px]'>{faq.question}</AccordionTrigger>
                    <AccordionContent className='px-5'>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
           
        ))}
        </Accordion>
      </div>
    );
  };
  
export default AnimatedDiv;
