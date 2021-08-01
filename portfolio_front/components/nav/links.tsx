import Link from 'next/link'
import styles from './nav.module.scss'

interface NavLinksProps {
    isMobile?: boolean
}

export const NavLinks = ({ isMobile }: NavLinksProps) => {
    return (
        <div className={!isMobile ? styles.links : styles.linksMobile}>
            <Link href="#" passHref>
                <h2>About</h2>
            </Link>
            <Link href="#" passHref>
                <h2>Projects</h2>
            </Link>
            <Link href="#" passHref>
                <h2>Contact</h2>
            </Link>
        </div>
    )
}