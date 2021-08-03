import { BasePage } from "../base-page"
import { Navbar } from "../nav/nav"
import { Landing } from "../landing/landing"
import { About } from "../about/about"

export const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <BasePage>
                <Landing />
                <About />
            </BasePage>
        </>
    )
}