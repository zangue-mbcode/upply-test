

import React, { useEffect, useMemo, useRef } from 'react';

const RoadMap = ({roads}: any) => {
  const faqRefs = useMemo(() => roads.map(() => React.createRef()), [roads]);
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
  }, [roads]);
  return (
    <>
      <div>
        {roads.map((faq: any, index: any) => (

          <>
              {
                index % 2 === 0 && <div key={index} ref={faqRefs[index]} className="faq-item mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                  <h4 className="mb-3 font-bold text-md md:text-2xl">Registration</h4>
                  <p className="text-sm md:text-base leading-snug paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-opacity-100">
                    Pick your favourite event(s) and register in that event by filling the form corresponding to that
                    event. Its that easy 
                  </p>
                </div>
              </div>
              }
              {
                index % 2 !== 0 && <div key={index} ref={faqRefs[index]} className="faq-item mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                  <p className="text-sm md:text-base leading-snug paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-opacity-100">
                    Participate online. The links for your registered events will be sent to you via email and whatsapp
                    groups. Use those links and show your talent.
                  </p>
                </div>
              </div>
              }
          </>
            
            
            
                // <AccordionItem key={index} ref={faqRefs[index]} className="faq-item w-full  border-1 border border-gray-400 dark:border-slate-600 rounded-sm mb-5  "  value={"item-"+index}>
                //     <AccordionTrigger className='hover:no-underline w-full px-5 py-[25px]'>{faq.question}</AccordionTrigger>
                //     <AccordionContent className='px-5'>
                //         {faq.answer}
                //     </AccordionContent>
                // </AccordionItem>
           
        ))}
      </div>
    </>
  );
};

export default RoadMap;