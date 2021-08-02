import Image from "next/image"
import styles from './desc-box.module.scss'

interface DescBoxProps {
    imageName: string
    children?: React.ReactNode
}

export const DescBox = ({imageName, children}: DescBoxProps) => {
    

    return (
        <div className={styles.descbox}>
            <Image 
                alt={imageName.split('.')[0]} 
                src={require(`../public/images/${imageName}`)} 
            />
            <div>{children}</div>
        </div>
    )
}