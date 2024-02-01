import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ faqs }) {
  const [currentNumber, setCurrentNumber] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          faq={faq}
          key={faq.title}
          index={i}
          currentNumber={currentNumber}
          onOpen={setCurrentNumber}
        />
      ))}
    </div>
  );
}
