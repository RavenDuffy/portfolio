import Image from "next/image"
import styles from './desc-box.module.scss'

interface DescBoxProps {
    imageName?: string
    imageWidth?: string
    imageHeight?: string
    children?: React.ReactNode
}

interface DescBoxWrapperProps {
    children?: React.ReactNode
}

// imageWidth and imageHeight should never exceed 100
export const DescBox = ({imageName, imageWidth, imageHeight, children}: DescBoxProps) => {
    

    return (
        <div className={styles.descbox}>
            {imageName && 
            <div className={styles.descImage}>
                <Image 
                    alt={imageName.split('.')[0]} 
                    src={require(`../public/images/${imageName}`)}
                    width={imageWidth || imageHeight ? imageHeight : '0'}
                    height={imageHeight || imageWidth ? imageWidth : '0'}
                />
            </div>}
            <div>{children}</div>
        </div>
    )
}

export const DescBoxWrapper = ({ children }: DescBoxWrapperProps) => {


    return (
        <div className={styles.descboxwrapper}>
            {children}
        </div>
    )
}