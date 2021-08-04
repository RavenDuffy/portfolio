import Link from 'next/link'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Hamburger } from './hamburger'
import { NavLinks } from './links'
import styles from './nav.module.scss'

export const Navbar = () => {
  const { width } = useWindowSize()

  return (
    <div id='navbar' className={styles.navbar}>
      <Link href='/' passHref>
        <h1 className={styles.home}>RD</h1>
      </Link>

      {width && width > 620 ? <NavLinks /> : <Hamburger />}
    </div>
  )
}
