import React from "react";

interface SectionProps {
    sectionName: string
    children?: React.ReactNode
}

export const Section: React.FC<SectionProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div id={props.sectionName} style={{ minHeight: 'calc(100vh - 5.5rem)' }} className={props.className}>
            {props?.children}
        </div >
    )
}