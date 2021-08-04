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
        <a
          href='https://github.com/RavenDuffy'
          target='_blank'
          rel='noreferrer'
        >
          <Image className={styles.imageLink} alt='git' src={GitLink} />
        </a>
        <a href='mailto:ravend2013@gmail.com' target='_blank' rel='noreferrer'>
          <Image className={styles.imageLink} alt='email' src={EmailLink} />
        </a>
        <a
          href='https://linkedin.com/in/ravenduffy/'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            className={styles.imageLink}
            alt='linkedin'
            src={LinkedinLink}
          />
        </a>
      </div>
    </footer>
  )
}
