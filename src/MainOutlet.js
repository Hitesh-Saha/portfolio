import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const MainOutlet = () => {
  return (
    <>
        <Navbar/> 
        <Outlet />
        <Footer/>
    </>
  )
}

export default MainOutlet