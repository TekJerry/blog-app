import "./Layout.css";
import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <Nav />

    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
