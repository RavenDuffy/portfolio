import Link from 'next/link'
import styles from './nav.module.scss'

interface NavLinksProps {
    isMobile?: boolean
    isHamburgerOpen?: boolean
}

export const NavLinks = ({ isMobile, isHamburgerOpen }: NavLinksProps) => {
    if (!isMobile) return (
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
    )
    else return (
        <>
            {isHamburgerOpen &&
                <>
                    <Link href="#" passHref>
                        <h2>About</h2>
                    </Link>
                    <Link href="#" passHref>
                        <h2>Projects</h2>
                    </Link>
                    <Link href="#" passHref>
                        <h2>Contact</h2>
                    </Link>
                </>
            }
        </>
    )
}