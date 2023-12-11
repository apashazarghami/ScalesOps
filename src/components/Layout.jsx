import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Layout = ({ children }) => {
    return(
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;