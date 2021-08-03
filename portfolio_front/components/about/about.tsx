import { DescBox, DescBoxWrapper } from "../desc-box"
import { Section } from "../section"
import styles from './about.module.scss'

export const About = () => {


    return (
        <Section sectionName="about" id="about" isWidthCapped>
            <h1 className={styles.header}>Hi I’m Raven, a <span className="highlightText">fullstack web developer</span>.</h1>
            <p className={styles.blurb}>I’ve been working with web tech stacks for years both commercially and personally. 
                I love working within the constantly evolving world of web dev because I can 
                always learn something new. I’m currently working at Sycous but I’m happy to get 
                in contact for small projects.</p>
            <DescBoxWrapper>
                <DescBox imageName="DevFront.svg" imageWidth="96">
                    
                </DescBox>
                <DescBox imageName="DevBack.svg" imageWidth="96">
                    
                </DescBox>
            </DescBoxWrapper>
        </Section>
    )
}