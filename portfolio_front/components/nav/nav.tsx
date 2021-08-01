import Link from 'next/link'
import { useWindowSize } from '../../hooks/useWindowSize'
import { NavLinks } from './links'
import styles from './nav.module.scss'

export const Navbar = () => {
    const windowSize = useWindowSize()

    return (
        <div id="navbar" className={styles.navbar}>
            <Link href="#" passHref>
                <h1 className={styles.home}>RD</h1>
            </Link>

            {windowSize.width && windowSize.width > 620 
                ? <NavLinks /> 
                : <NavLinks isMobile />
            }
        </div>
    )
}