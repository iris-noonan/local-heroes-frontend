import styles from '../NavBar/NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'


const NavBar = ({ user, handleSignOut }) => {

    const [menuOpen, setMenuOpen] = useState(false)



    return (
        
        <div className={styles.navContainer}>
            <img src="/images/header-background.svg" alt="" />
            <NavLink to="/">
                <h1>Local Heroes</h1>
            </NavLink>
            <nav>
                <div 
                className={styles.menu} 
                onClick={() => {
                    setMenuOpen(!menuOpen)
                    console.log("menu clicked!");
                    console.log(menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? `${styles.open}` : ""}>
                    
                    { user ? <>
                        <li><NavLink to="/">Dashboard</NavLink></li>
                        <li><NavLink to="/jobs">See Jobs</NavLink></li>
                        <li><NavLink to="/helpers">See helpers</NavLink></li>
                        <li><NavLink to="" onClick={handleSignOut}>Sign Out</NavLink></li>
                    </>
                        : 
                    <>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </>}
                </ul>
            </nav>
        </div>

        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}

export default NavBar;