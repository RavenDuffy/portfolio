import { Header } from './header'

interface BasePageProps {
  children: React.ReactNode
}

export const BasePage = (props: BasePageProps) => {
  return (
    <>
      <Header />
      <div
        id='page'
        style={{
          padding: '0 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {props.children}
      </div>
    </>
  )
}
