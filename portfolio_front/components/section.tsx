import React from "react";

interface SectionProps {
    sectionName: string
    children?: React.ReactNode
}

export const Section = (props: SectionProps) => {
    <div id={props.sectionName} style={{ minHeight: 'calc(100vh - 3rem)' }}>
        {props.children}
    </div >
}