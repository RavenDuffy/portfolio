import { Header } from "./header"

interface BasePageProps {
  children: React.ReactNode
}

export const BasePage = (props: BasePageProps) => {
    return (
        <>
          <Header />
          <div style={{padding: '0 2rem'}}>
            {props.children}
          </div>
        </>
      )
}