import { useEffect } from 'react'

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
        <div
          id='overlay'
          style={{
            backgroundColor: '#0007',
            position: 'fixed',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
            zIndex: 999,
          }}
        >
          {text}
        </div>
      )}
    </>
  )
}
