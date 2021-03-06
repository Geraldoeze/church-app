import React, {useState} from "react";
import MainHeader from "./MainHeader";
import {Link} from 'react-router-dom';
import SideDrawer from "./SideDrawer";

import './MainNavigation.css'
import NavLinks from "./NavLinks";
import Backdrop from '../../components/UIElements/Backdrop/Backdrop'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }; 
    return (
        <React.Fragment>
            <MainHeader>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
                <h2 className="sm-logo">LOGO</h2>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
            </SideDrawer> 
          
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to='/' >LOGO </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
          </MainHeader>
        </React.Fragment>
     );
}
 
export default MainNavigation;