import { Link } from "react-router-dom";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>PNIT</h3>
          <p style={{textAlign:'Justify'}}>Prestige Nexus Institute Of Technology is dedicated 
            to empowering international students through 
            specialized programs in Cybersecurity, Networking, and Software Development.</p>
        </div>
        <div className="footer-col">
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/apply">Apply</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h4>Our Office</h4>
          <p><FaLocationDot /> 8th St. Port Saeed Deira City Centre, Dubai UAE</p>
          <p ><span style={{display:'inline-flex', alignItems:'center', gap:'0.3rem'}}><FaPhone  />(+971) 3 001 1113</span></p>
          <p ><span style={{display:'inline-flex', alignItems:'center', gap:'0.3rem'}}><FaEnvelope  />info@prestigenexusit.com</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prestige Nexus Institute Of Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer