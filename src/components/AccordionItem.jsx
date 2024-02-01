import { useState } from 'react';

export default function AccordionItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>

      <p className="title">{faq.title}</p>

      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
