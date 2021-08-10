import { useEffect } from 'react'

export interface ModalProps {
  open: boolean
  text?: string
}

export const Modal = ({ open, text }: ModalProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  })

  return (
    <>
      {open ? (
        <div
          style={{
            backgroundColor: '#0007',
            position: 'fixed',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
            zIndex: 999,
            overflow: 'auto',
            overscrollBehavior: 'contain',
          }}
        >
          {text}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
