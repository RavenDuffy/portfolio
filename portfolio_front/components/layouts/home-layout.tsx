import { BasePage } from '../base-page'
import { Navbar } from '../nav/nav'
import { Landing } from '../landing/landing'
import { About } from '../about/about'
import { Footer } from '../footer/footer'
import { Projects } from '../projects/projects'

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <BasePage>
        <Landing />
        <About />
        <Projects />
        <Footer />
      </BasePage>
    </>
  )
}
