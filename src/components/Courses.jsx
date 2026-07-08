import { FaDownload } from "react-icons/fa6";


const Courses = ({ coursesData, handleCourseDisplay }) => {
  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2>Courses</h2>
        </div>
        <div className="courses-grid">
          {coursesData?.map((course, index) => (
            <div key={index} className="course-card" onClick={(e) => handleCourseDisplay(e, index) }>
              <div className="course-badge">{course.category}</div>
              <h3>{course.name}</h3>
              <a href={course.href} download={course.download}><button className="download-btn"><FaDownload /> Click to Download Syllabus</button></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses