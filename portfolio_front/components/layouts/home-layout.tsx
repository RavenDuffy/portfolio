import { About } from "../about/about"
import { BasePage } from "../base-page"
import { Landing } from "../landing/landing"
import { Navbar } from "../nav/nav"

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