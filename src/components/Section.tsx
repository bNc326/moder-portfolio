import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <section className="px-container my-section relative" {...props}>
      <div className="container mx-auto">{children}</div>
    </section>
  )
}

export default Section
