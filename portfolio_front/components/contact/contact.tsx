import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { Section } from '../section'
import styles from './contact.module.scss'
import ReactTooltip from 'react-tooltip'

interface FormData {
  name?: string
  email?: string
  details?: string
}

interface FormRefs {
  name: RefObject<HTMLInputElement>
  email: RefObject<HTMLInputElement>
  details: RefObject<HTMLTextAreaElement>
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
  const validateFields = (): void => {
    ReactTooltip.hide(formRefs.name.current!)
    ReactTooltip.hide(formRefs.email.current!)
    ReactTooltip.hide(formRefs.details.current!)

    if (isEmpty(formData?.name)) {
      ReactTooltip.show(formRefs.name.current!)
    }
    if (isEmpty(formData?.email) || !isValidEmail(formData?.email)) {
      ReactTooltip.show(formRefs.email.current!)
    }
    if (isEmpty(formData?.details)) {
      ReactTooltip.show(formRefs.details.current!)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    validateFields()
  }

  const [formData, setFormData] = useState<FormData>()
  const [isTooltipMounted, setTooltipMounted] = useState<boolean>(false)

  const formRefs: FormRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    details: useRef<HTMLTextAreaElement>(null),
  }

  useEffect(() => {
    setTooltipMounted(true)
    ReactTooltip.rebuild()
  }, [isTooltipMounted])

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
            data-tip='Please enter your name'
            data-for='nameTip'
            placeholder='my name is...'
            ref={formRefs.name}
          ></input>
          {isTooltipMounted && (
            <ReactTooltip
              id='nameTip'
              place='bottom'
              effect='solid'
              type='error'
              offset={{ top: 4 }}
              event='none'
            />
          )}
        </div>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            data-tip='Please enter a valid email'
            data-for='emailTip'
            placeholder='my email is...'
            ref={formRefs.email}
          ></input>
          {isTooltipMounted && (
            <ReactTooltip
              id='emailTip'
              place='bottom'
              effect='solid'
              type='error'
              offset={{ top: 4 }}
              event='none'
            />
          )}
        </div>
        <div className={`${styles.inputLabelWrapper} ${styles.spanTwo}`}>
          <label htmlFor='details'>Project Details</label>
          <textarea
            id='details'
            data-tip='Please give me some details about your project'
            data-for='detailsTip'
            placeholder='my project is about...'
            ref={formRefs.details}
          ></textarea>
          {isTooltipMounted && (
            <ReactTooltip
              id='detailsTip'
              place='bottom'
              effect='solid'
              type='error'
              offset={{ top: 4 }}
              event='none'
            />
          )}
        </div>
        <button type='submit' className={`${styles.submit} ${styles.spanTwo}`}>
          Get in Touch
        </button>
      </form>
    </Section>
  )
}
