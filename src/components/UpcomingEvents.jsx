import { FaCalendar } from "react-icons/fa6";

const eventsData = [
  { title: "CyberSecurity Bootcamp", date: "July 26 - Aug 2026", location: "GHANA" },
  { title: "The Role Of AI in Software Development", date: "January 2026 - February 2027", location: "CAPE VERDE" },
  { title: "Network Security in the 21st Century", date: "November 2026", location: "ZAMBIA" },
  { title: "System Architecture Fundamentals", date: "Mar 30 - Apr 10, 2026", location: "KENYA" }
];

const UpcomingEvents = () => {

  return (
    <section className="events-section container">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <p>Join our professional cohorts scheduled across international training hubs</p>
      </div>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <span className="event-location">{event.location}</span>
            <h3>{event.title}</h3>
            <p className="event-date"><FaCalendar /> {event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents