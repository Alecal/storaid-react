import React, { useState } from 'react';

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='grid gap-1' role="region" aria-label="Frequently Asked Questions">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
          id: `accordion-button-${index}`,
          ariaControls: `accordion-panel-${index}`,
        })
      )}
    </div>
  );
}

export default Accordion;