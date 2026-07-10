import { RxHamburgerMenu } from "react-icons/rx";

import "../css/navbar.css"
import { navitems } from "../Data"

const Hamburger = () => {
    return(
        <div className="hamburger"><RxHamburgerMenu style={{height: "100%", width: "100%"}} /></div>
    )
}

const Logo = () => {
    return (
        <p className="logo">ALBANY PARK</p>
    )
}
const Menu = () => {
    return(
        <ul className="menu-ul">
            {
                navitems.map((item) => <li className="menu-li">{item}</li>)
            }
        </ul>
    )
}
const Actions = () => {
    return(
        <div className="actions">
            <img className="customer" src="/customer.svg" alt=""/>
            <img className="card" src="/cart.svg" alt=""/>
        </div>
    )
}
export default function Navbar(){
    return(
        <div className="navbar b1px">
            <Hamburger/>
            <Logo/>
            <Menu/>
            <Actions/>
        </div>
    )
}