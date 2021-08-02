import { DescBox } from "../desc-box"
import { Section } from "../section"

export const About = () => {


    return (
        <Section sectionName="about" id="about" isWidthCapped>
            <h1>Hi I’m Raven, a <span className="highlightText">fullstack web developer</span>.</h1>
            <p>I’ve been working with web tech stacks for years both commercially and personally. 
                I love working within the constantly evolving world of web dev because I can 
                always learn something new. I’m currently working at Sycous but I’m happy to get 
                in contact for small projects.</p>
            <DescBox imageName="DevFront.svg">
                
            </DescBox>
        </Section>
    )
}