import React from 'react'

function FormField({ children, className }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={`sectionYellowLight h-full rounded-md p-5 ${className}`} noValidate>
      {children}
    </form>
  )
}

export default FormField