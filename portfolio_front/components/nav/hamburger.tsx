import { useState } from 'react'
import { NavLinks } from './links'
import styles from './nav.module.scss'

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.linksMobile} ${isOpen && styles.background}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={!isOpen ? styles.hamClosed : styles.hamOpen}
      />
      <NavLinks isMobile isHamburgerOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
