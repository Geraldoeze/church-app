import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css'

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to='/' exact>HOME</NavLink>
        </li>
            
        
        <li>
            <NavLink to='/contact'>CONTACT</NavLink>
        </li>
        
    </ul>
     
}
 
export default NavLinks;