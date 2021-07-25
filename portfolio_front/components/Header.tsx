import Head from 'next/head'
import { useRouter } from 'next/router'
import defaultImage from '/public/images/logo/Magpie512.png'

interface HeaderProps {
    headTitle?: string,
    prevImage?: StaticImageData
}

export const Header = ({ headTitle, prevImage }: HeaderProps) => {
    const pageTitle = (headTitle === undefined) 
        ? "Raven Duffy" 
        : `Raven Duffy | ${headTitle}`
    const previewImage = (prevImage === undefined)
        ? defaultImage
        : prevImage

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={pageTitle} key="title" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={previewImage.src} />
            <meta property="og:url" content={useRouter().asPath} />
        </Head>
    )
}