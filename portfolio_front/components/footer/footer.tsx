import Image from 'next/image'
import Link from 'next/link'
import GitLink from '../../public/images/footer/GithubLink.svg'
import EmailLink from '../../public/images/footer/EmailLink.svg'
import LinkedinLink from '../../public/images/footer/LinkedinLink.svg'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.images}>
        <Link href='https://github.com/RavenDuffy' passHref>
          <Image className={styles.imageLink} alt='git' src={GitLink} />
        </Link>
        <Link href='mailto:ravend2013@gmail.com' passHref>
          <Image className={styles.imageLink} alt='email' src={EmailLink} />
        </Link>
        <Link href='https://linkedin.com/in/ravenduffy/' passHref>
          <Image
            className={styles.imageLink}
            alt='linkedin'
            src={LinkedinLink}
          />
        </Link>
      </div>
    </footer>
  )
}
