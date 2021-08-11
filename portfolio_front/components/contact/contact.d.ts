import { RefObject } from 'react'

export interface FormData {
  name?: string
  email?: string
  details?: string
}

export interface FormRefs {
  name: RefObject<HTMLInputElement>
  email: RefObject<HTMLInputElement>
  details: RefObject<HTMLTextAreaElement>
}

export interface FormValids {
  [key: string]: boolean
  name: boolean
  email: boolean
  details: boolean
}
