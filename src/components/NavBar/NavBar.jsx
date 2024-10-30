import styles from '../NavBar/NavBar.module.scss';
import { Link } from 'react-router-dom'


function NavBar({ user, handleSignOut }) {
    return (
        <div className={styles.navContainer}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { user ? <> 
                        <li><Link to="/jobs">See Jobs</Link></li>
                        <li><Link to="/jobs/new">Create a Job</Link></li>
                        <li><Link to="/helpers">See helpers</Link></li>
                        <li><Link to="/helpers/new">Become a helper</Link></li>
                        <li><Link to="" onClick={handleSignOut}>Sign Out</Link></li>
                    </>
                        : 
                    <>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
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