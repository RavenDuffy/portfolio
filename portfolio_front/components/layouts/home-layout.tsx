import { BasePage } from '../base-page'
import { Navbar } from '../nav/nav'
import { Landing } from '../landing/landing'
import { About } from '../about/about'
import { Footer } from '../footer/footer'

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <BasePage>
        <Landing />
        <About />
        <Footer />
      </BasePage>
    </>
  )
}
