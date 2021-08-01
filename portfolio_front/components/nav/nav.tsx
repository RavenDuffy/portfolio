import Link from 'next/link'
import { useWindowSize } from '../../hooks/useWindowSize'
import styles from './nav.module.scss'

export const Navbar = () => {
    const windowSize = useWindowSize()

    return (
        <div id="navbar" className={styles.navbar}>
            <Link href="#" passHref>
                <h1 className={styles.home}>RD</h1>
            </Link>
            <div className={styles.links}>
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
        </div>
    )
}