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
                minHeight: '100vh', 
                // marginBottom: '5.5rem',
                maxWidth: props.isWidthCapped ? '946px' : 'unset',
            }} 
            className={props.className}
        >
            {props?.children}
        </div >
    )
}