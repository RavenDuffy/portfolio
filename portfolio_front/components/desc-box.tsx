import Image from 'next/image'
import React from 'react'
import styles from './desc-box.module.scss'

interface DescBoxProps {
  imageName?: string
  imageWidth?: string
  imageHeight?: string
  full?: boolean
  children?: React.ReactNode
}

interface DescBoxWrapperProps {
  style?: React.CSSProperties
  children?: React.ReactNode
}

// imageHeight should always be 96
export const DescBox = ({
  imageName,
  imageWidth,
  imageHeight,
  full,
  children,
}: DescBoxProps) => {
  return (
    <div
      className={styles.descbox}
      style={(imageName && { margin: '35px 0.5rem' }) || {}}
    >
      {imageName && (
        <div className={styles.descImage}>
          <Image
            alt={imageName.split('.')[0]}
            src={require(`../public/images/${imageName}`)}
            width={imageWidth || imageHeight ? imageHeight : '0'}
            height={imageHeight || imageWidth ? imageWidth : '0'}
          />
        </div>
      )}
      <div
        className={styles.descText}
        style={(full && { width: '100%', height: '100%' }) || {}}
      >
        {children}
      </div>
    </div>
  )
}

export const DescBoxWrapper = ({
  style,
  children,
}: DescBoxWrapperProps & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={styles.descboxwrapper} style={style}>
      {children}
    </div>
  )
}
