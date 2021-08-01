import { useState } from "react"
import styles from './nav.module.scss'

interface HamburgerProps {
    children: React.ReactNode
}

export const Hamburger = (props: HamburgerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? styles.hamClosed : styles.hamOpen}
            />
            {isOpen && props.children}
        </>
    )
}