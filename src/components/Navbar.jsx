/* import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <div className="logo">
                    <h2>Altiora Global Enterprises ltd</h2>
                </div>
                <ul className="nav-links">
                    <li><Link to='/' className="active">Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/fees'>Fees</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/apply' className="apply-btn">Apply Now</Link></li>
                </ul>
            </div>
        </nav>
    )
} */

import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    // State to track if mobile menu is open
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <div className="logo">
                    <h2>Altiora Global Enterprises ltd</h2>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaXmark /> : <FaBars />}
                </div>

                {/* Dynamic 'open' class based on state */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to='/' className="active" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to='/about' onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to='/courses' onClick={() => setIsOpen(false)}>Courses</Link></li>
                    <li><Link to='/fees' onClick={() => setIsOpen(false)}>Fees</Link></li>
                    <li><Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to='/apply' className="apply-btn" onClick={() => setIsOpen(false)}>Apply Now</Link></li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar