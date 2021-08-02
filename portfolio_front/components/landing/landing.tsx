import Link from "next/link"
import Image from 'next/image'
import { Section } from "../section"
import styles from './landing.module.scss'
import ArrowDown from '../../public/images/Arrow.svg'

export const Landing = () => {
    return (
        <Section sectionName="landing" className={styles.landing}>
            <h1>RAVEN</h1>
            <h1>DUFFY</h1>
            <h2>Web Developer</h2>
            <Link href="#" passHref>
                <div className={styles.more}>
                    <span >FIND OUT MORE</span>
                    <Image 
                        alt="arrow-down" 
                        src={ArrowDown}
                    />
                </div>
            </Link>
        </Section>
    )
}