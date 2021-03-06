import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Section } from '../section'
import styles from './contact.module.scss'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { Modal } from '../modal'
import { isEmpty, isValidEmail } from '../../utils/general'
import { FormData, FormRefs, FormValids } from './contact.d'

export const ContactMe = () => {
  const validateFields = (): void => {
    ReactTooltip.hide(formRefs.name.current!)
    ReactTooltip.hide(formRefs.email.current!)
    ReactTooltip.hide(formRefs.details.current!)

    const newFormData = {
      name: true,
      email: true,
      details: true,
    }

    if (isEmpty(formData?.name)) {
      ReactTooltip.show(formRefs.name.current!)
      newFormData.name = false
    }
    if (isEmpty(formData?.email) || !isValidEmail(formData?.email)) {
      ReactTooltip.show(formRefs.email.current!)
      newFormData.email = false
    }
    if (isEmpty(formData?.details)) {
      ReactTooltip.show(formRefs.details.current!)
      newFormData.details = false
    }

    setFormValids(newFormData)
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
  const [formValids, setFormValids] = useState<FormValids>({
    name: false,
    email: false,
    details: false,
  })
  const [sentData, setSentData] = useState<boolean>(false)

  const formRefs: FormRefs = {
    name: useRef(null),
    email: useRef(null),
    details: useRef(null),
  }

  const sendInfo = useCallback(() => {
    axios.post('/api/email', {
      formData,
    })
  }, [formData])

  const wipeForm = useCallback((): void => {
    formRefs.name.current!.value = ''
    formRefs.email.current!.value = ''
    formRefs.details.current!.value = ''

    setFormData(undefined)
    setFormValids({
      name: false,
      email: false,
      details: false,
    })

    setSentData(true)
  }, [formRefs.name, formRefs.email, formRefs.details])

  useEffect(() => {
    setTooltipMounted(true)
    ReactTooltip.rebuild()

    if (Object.values(formValids).every((value) => value)) {
      sendInfo()
      wipeForm()
    }
  }, [isTooltipMounted, formValids, sendInfo, wipeForm])

  useEffect(() => {
    if (sentData) {
      setTimeout(() => setSentData(false), 5000)
    }
  }, [sentData])

  return (
    <>
      <Modal
        open={sentData}
        text='Thanks for reaching out, I???ll get back to you as soon as I can.'
        setOpen={setSentData}
      />
      <Section
        sectionName='contact'
        id='contact'
        isWidthCapped
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'calc(100vh - 120px)',
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
            <label htmlFor='name'>
              Name <span className={styles.compulsory}>*</span>
            </label>
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
            <label htmlFor='email'>
              Email <span className={styles.compulsory}>*</span>
            </label>
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
          <div className={`${styles.inputLabelWrapper}`}>
            <label htmlFor='details'>
              Project Details <span className={styles.compulsory}>*</span>
            </label>
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
          <button
            type='submit'
            className={`${styles.submit} ${styles.spanTwo}`}
          >
            Get in Touch
          </button>
        </form>
      </Section>
    </>
  )
}
