import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Home } from "./Home"
import { Login } from "./login"
import { SignUp } from "./signup"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<SignUp />} path="/signup" />
                <Route element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
        </ScrollToTop>
    )
}