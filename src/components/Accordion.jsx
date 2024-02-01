import AccordionItem from './AccordionItem';

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem faq={faq} key={faq.title} index={i} />
      ))}
    </div>
  );
}
