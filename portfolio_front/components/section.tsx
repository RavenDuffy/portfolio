import React from 'react'

interface SectionProps {
  sectionName: string
  isWidthCapped?: boolean
  children?: React.ReactNode
  externalPadding?: boolean
  style?: React.CSSProperties
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
        padding: props.externalPadding ? '' : '0 0.5rem',
        paddingBottom: '2rem',
        ...props.style,
      }}
      className={props.className}
    >
      {props?.children}
    </div>
  )
}
