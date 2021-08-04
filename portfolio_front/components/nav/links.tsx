import { scrollToElement } from '../../utils/scroll-to-element'
import styles from './nav.module.scss'

interface NavLinksProps {
  isMobile?: boolean
  isHamburgerOpen?: boolean
}

const Links = () => {
  return (
    <>
      <button onClick={() => scrollToElement('about')}>
        <h2>About</h2>
      </button>
      <button onClick={() => scrollToElement('')}>
        <h2>Projects</h2>
      </button>
      <button onClick={() => scrollToElement('')}>
        <h2>Contact</h2>
      </button>
    </>
  )
}

export const NavLinks = ({ isMobile, isHamburgerOpen }: NavLinksProps) => {
  if (!isMobile)
    return (
      <div className={styles.links}>
        <Links />
      </div>
    )
  else return <>{isHamburgerOpen && <Links />}</>
}
