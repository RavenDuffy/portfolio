import React from 'react'

interface SectionProps {
  sectionName: string
  isWidthCapped?: boolean
  children?: React.ReactNode
}

export const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  return (
    <div
      id={props.sectionName}
      aria-label='section'
      style={{
        minHeight: '100vh',
        maxWidth: props.isWidthCapped ? '946px' : 'unset',
      }}
      className={props.className}
    >
      {props?.children}
    </div>
  )
}
