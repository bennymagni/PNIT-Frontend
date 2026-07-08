const statsData = [
  { value: "15+", label: "Years of Experience" },
  { value: "250+", label: "Tailored Courses Offered" },
  { value: "10k+", label: "Global Alum & Executives Trained" },
  { value: "12+", label: "International Training Locations" }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-number">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats