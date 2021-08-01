import { Section } from "../section"
import styles from './landing.module.scss'

export const Landing = () => {
    return (
        <Section sectionName="landing" className={styles.landing}>
            <h1>RAVEN</h1>
            <h1>DUFFY</h1>
            <h2>Web Developer</h2>
        </Section>
    )
}