import { scrollToElement } from '../../utils/scroll-to-element'
import styles from './nav.module.scss'

interface NavLinksProps {
  isMobile?: boolean
  isHamburgerOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}

const Links = ({ isHamburgerOpen, setIsOpen }: NavLinksProps) => {
  return (
    <>
      <button
        onClick={() => {
          scrollToElement('about')
          setIsOpen && setIsOpen(!isHamburgerOpen)
        }}
      >
        <h2>About</h2>
      </button>
      <button
        onClick={() => {
          scrollToElement('projects')
          setIsOpen && setIsOpen(!isHamburgerOpen)
        }}
      >
        <h2>Projects</h2>
      </button>
      <button
        onClick={() => {
          scrollToElement('contact')
          setIsOpen && setIsOpen(!isHamburgerOpen)
        }}
      >
        <h2>Contact</h2>
      </button>
    </>
  )
}

export const NavLinks = ({
  isMobile,
  isHamburgerOpen,
  setIsOpen,
}: NavLinksProps) => {
  if (!isMobile)
    return (
      <div className={styles.links}>
        <Links />
      </div>
    )
  else
    return (
      <>
        {isHamburgerOpen && (
          <Links isHamburgerOpen={isHamburgerOpen} setIsOpen={setIsOpen} />
        )}
      </>
    )
}
