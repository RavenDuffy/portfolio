import React, { useState } from 'react'
import { Section } from '../section'
import styles from './contact.module.scss'

interface FormData {
  name?: string
  email?: string
  details?: string
}

export const ContactMe = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    })
  }

  const [formData, setFormData] = useState<FormData>()

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
      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className={styles.inputLabelWrapper}>
          <label htmlFor='name'>Name</label>
          <input id='name' placeholder='my name is...'></input>
        </div>
        <div className={styles.inputLabelWrapper}>
          <label>Email</label>
          <input id='email' placeholder='my email is...'></input>
        </div>
        <div className={`${styles.inputLabelWrapper} ${styles.spanTwo}`}>
          <label>Project Details</label>
          <textarea
            id='details'
            placeholder='my project is about...'
          ></textarea>
        </div>
        <button type='submit' className={`${styles.submit} ${styles.spanTwo}`}>
          Get in Touch
        </button>
      </form>
    </Section>
  )
}
