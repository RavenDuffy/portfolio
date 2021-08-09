import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Section } from '../section'
import styles from './contact.module.scss'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { modal } from '../modal'

export interface FormData {
  name?: string
  email?: string
  details?: string
}

interface FormRefs {
  name: RefObject<HTMLInputElement>
  email: RefObject<HTMLInputElement>
  details: RefObject<HTMLTextAreaElement>
}

interface FormValids {
  [key: string]: boolean
  name: boolean
  email: boolean
  details: boolean
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

  const formRefs: FormRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    details: useRef<HTMLTextAreaElement>(null),
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
  }, [formRefs.name, formRefs.email, formRefs.details])

  useEffect(() => {
    setTooltipMounted(true)
    ReactTooltip.rebuild()

    if (Object.values(formValids).every((value) => value)) {
      sendInfo()
      wipeForm()
    }
  }, [isTooltipMounted, formValids, sendInfo, wipeForm])

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
        <button type='submit' className={`${styles.submit} ${styles.spanTwo}`}>
          Get in Touch
        </button>
      </form>
    </Section>
  )
}
