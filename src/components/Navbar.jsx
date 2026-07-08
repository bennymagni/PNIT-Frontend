import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-flex">
                <div className="logo">
                    <h2>Prestige Nexus Institute Of Technology</h2>
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
}
export default Navbar