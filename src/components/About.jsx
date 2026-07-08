
const About = () => {
  return (
    <div className="pnit-page-container">
      {/* Hero Section */}
      <section className="pnit-page-header pnit-hero-banner">
        <div className="itic-hero-overlay">
          <h1>About Prestige Nexus</h1>
          <p>Prestige Nexus Institute of Technology is dedicated to providing 
             practical IT education, industry-focused training, and career 
             development programs that prepare students for success in 
             the technology sector.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pnit-section container">
        <div className="pnit-grid-2">
          <div className="pnit-card highlight-border">
            <h2>Our Mission</h2>
            <p>To provide world-class, professional training and certification 
               programs in computer science that meet global standards and drive institutional 
               excellence</p>
          </div>
          <div className="pnit-card highlight-border">
            <h2>Our Vision</h2>
            <p>To be the premier institute of choice for professional development in computer science</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pnit-section bg-light" style={{marginBottom: '2rem'}}>
        <div className="container text-center">
          <h2>Our Core Values</h2>
          <div className="pnit-grid-3" style={{ marginTop: '2rem' }}>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We maintain uncompromising standards in our training modules and delivery methods.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Adopting modern educational tools and evolving curricula to match shifting industry landscapes.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Fostering transparent processes, professional ethics, and accountability in all our dealings.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;