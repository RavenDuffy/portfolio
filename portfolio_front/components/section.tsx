import React from "react";

interface SectionProps {
    sectionName: string
    isWidthCapped?: boolean
    children?: React.ReactNode
}

export const Section: React.FC<SectionProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div 
            id={props.sectionName} 
            style={{ 
                minHeight: 'calc(100vh - 5.5rem)', 
                marginBottom: '3rem',
                maxWidth: props.isWidthCapped ? '946px' : 'unset',
            }} 
            className={props.className}
        >
            {props?.children}
        </div >
    )
}