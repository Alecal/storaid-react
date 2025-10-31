import React, { useState } from 'react';

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
    {/* Stort tack till Gemini för denna delen! */}
    <div className='grid gap-1'>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
    </>
  );
}

export default Accordion;
