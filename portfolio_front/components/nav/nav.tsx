import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Hamburger } from './hamburger'
import { NavLinks } from './links'
import styles from './nav.module.scss'

const GoHome = () => {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/' ? (
        <Link href='/' passHref>
          <h1 className={styles.home}>RD</h1>
        </Link>
      ) : (
        <button
          onClick={() =>
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            })
          }
        >
          <h1 className={styles.home}>RD</h1>
        </button>
      )}
    </>
  )
}

export const Navbar = () => {
  const { width } = useWindowSize()

  return (
    <div id='navbar' className={styles.navbar}>
      <GoHome />

      {width && width > 620 ? <NavLinks /> : <Hamburger />}
    </div>
  )
}
