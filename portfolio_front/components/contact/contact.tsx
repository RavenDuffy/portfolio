import React, { RefObject, useEffect, useRef, useState } from 'react'
import { Section } from '../section'
import styles from './contact.module.scss'
import ReactTooltip from 'react-tooltip'

interface FormData {
  name?: string
  email?: string
  details?: string
}

const isEmpty = (field: string | undefined): boolean => {
  return field === undefined || field === ''
}

const isValidEmail = (email: string | undefined) => {
  if (email === undefined) return false
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export const ContactMe = () => {
  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!isEmpty(formData?.name)) {
    }
    if (!isEmpty(formData?.email) && isValidEmail(formData?.email)) {
    }
    if (!isEmpty(formData?.details)) {
    }
    console.log(
      formData,
      !isEmpty(formData?.email) && isValidEmail(formData?.email)
    )
    ReactTooltip.show(nameRef.current)
  }

  const [formData, setFormData] = useState<FormData>()
  const [isTooltipMounted, setTooltipMounted] = useState<boolean>(false)
  const nameRef = useRef<any>(null)

  useEffect(() => {
    setTooltipMounted(true)
    ReactTooltip.rebuild()
  }, [])

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
          <input
            id='name'
            data-tip='test'
            data-for='nameTip'
            placeholder='my name is...'
            ref={nameRef as RefObject<HTMLInputElement>}
          ></input>
          {isTooltipMounted && (
            <ReactTooltip
              id='nameTip'
              place='bottom'
              effect='solid'
              type='error'
              offset={{ top: 4 }}
              event={'none'}
            />
          )}
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
