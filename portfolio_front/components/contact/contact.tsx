import { Section } from '../section'
import styles from './contact.module.scss'

export const ContactMe = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.target)
  }

  return (
    <Section
      sectionName='contact'
      id='contact'
      isWidthCapped
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <h1 className={styles.contactTitle}>
        Like what you see? Lets get in contact!
      </h1>
      <form className={styles.formWrapper}>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor='name'>Name</label>
          <input id='name'></input>
        </div>
        <div className={styles.inputLabelWrapper}>
          <label>Email</label>
          <input id='email'></input>
        </div>
        <div className={`${styles.inputLabelWrapper} ${styles.spanTwo}`}>
          <label>Project Details</label>
          <textarea id='details'></textarea>
        </div>
      </form>
      <button type='submit' className={styles.submit} onClick={handleSubmit}>
        Get in Touch
      </button>
    </Section>
  )
}
