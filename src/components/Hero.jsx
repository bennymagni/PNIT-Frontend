import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Prestige Nexus Institute Of Technology</h1>
        <p>Providing the opportunity for a better career through tailored professional training solutions across Africa and beyond.</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Hero