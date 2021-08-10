import { useEffect } from 'react'
import styles from './modal.module.scss'

export interface ModalProps {
  open: boolean
  text?: string
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ open, text, setOpen }: ModalProps) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setOpen && setOpen(false)
  }

  const handleClick = (event: any) => {
    if (event.target.id === 'overlay') setOpen && setOpen(false)
  }

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  })

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('click', handleClick)
    }
  })

  return (
    <>
      {open && (
        <div id='overlay' className={styles.overlay}>
          <div className={styles.thanksText}>{text}</div>
          <div className={styles.tipText}>
            {window.visualViewport.width > 480
              ? 'Press escape to close'
              : 'Tap anywhere to close'}
          </div>
        </div>
      )}
    </>
  )
}
