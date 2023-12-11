import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Layout = ({ children }) => {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;