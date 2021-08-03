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
                    <h3>Frontend Dev</h3>
                    <p>The frontend space is one of the most rewarding places to work and I love every minute of it. 
                        I’ve been building websites for years using a wide range of technologies.</p>
                    <h4>Languages I use:</h4>
                    <p>HTML, CSS, SASS, JavaScript, TypeScript</p>
                    <h4>My favourite frameworks:</h4>
                    <p>React, Next.js, Node.js, Cypress, Selenium</p>
                </DescBox>
                <DescBox imageName="DevBack.svg" imageWidth="96">
                    <h3>Backend Dev</h3>
                    <p>Backend is where I started my development journey. I have a huge range of experience 
                        including: machine learning, test suites, APIs, pipelining and much more. </p>
                    <h4>Languages I use:</h4>
                    <p>JavaScript, TypeScript, Python, Elixir, Java, C++</p>
                    <h4>My favourite libraries:</h4>
                    <p>Express, Mongoose, Axios, Mocha/chai</p>
                </DescBox>
            </DescBoxWrapper>
        </Section>
    )
}