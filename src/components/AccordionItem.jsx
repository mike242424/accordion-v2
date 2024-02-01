export default function AccordionItem({ faq, index, currentNumber, onOpen }) {
  function handleToggle() {
    onOpen(index);
  }

  return (
    <div
      className={`item ${currentNumber === index ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>

      <p className="title">{faq.title}</p>

      <p className="icon">{currentNumber === index ? '-' : '+'}</p>

      {currentNumber === index && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
