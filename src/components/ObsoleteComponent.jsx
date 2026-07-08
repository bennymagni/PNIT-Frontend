
const Obsolete = () => {
    const courseList = [
    { 
      id: 1, 
      title: 'Corporate Governance & Leadership', 
      duration: '4 Weeks', 
      type: 'Executive Certification',
      description: 'Designed for board members and senior executives to master strategic oversight, ethical decision-making frameworks, and modern corporate compliance standards across emerging African markets.'
    },
    { 
      id: 2, 
      title: 'Financial Management & Auditing', 
      duration: '6 Weeks', 
      type: 'Professional Diploma',
      description: 'Advanced methodologies in risk-based internal auditing, public sector financial frameworks, and international financial reporting standards (IFRS).'
    },
    { 
      id: 3, 
      title: 'Strategic Human Resource Management', 
      duration: '4 Weeks', 
      type: 'Advanced Certificate',
      description: 'Focuses on aligning human capital with corporate strategy, navigating changing labor dynamics, talent retention practices, and organizational development leadership.'
    },
    { 
      id: 4, 
      title: 'Project Management & Implementation', 
      duration: '5 Weeks', 
      type: 'Professional Certification',
      description: 'A comprehensive approach to managing large-scale infrastructure and corporate projects from initial feasibility studies through to execution and agile monitoring methodologies.'
    },
    { 
      id: 5, 
      title: 'Public Sector Procurement & Logistics', 
      duration: '4 Weeks', 
      type: 'Executive Masterclass',
      description: 'In-depth analysis of transparent procurement regulations, supply chain resilience strategies, value-for-money frameworks, and strategic logistics optimization.'
    },
    { 
      id: 6, 
      title: 'Information Security & Digital Risk', 
      duration: '8 Weeks', 
      type: 'Technical Diploma',
      description: 'Equipping operational managers with the skills to mitigate cyber threats, oversee data governance regulations, and establish resilient enterprise security architectures.'
    },
  ];

  // Set the first course as the default active single view
  const [activeCourse, setActiveCourse] = useState(courseList[0]);

  return (
    <div className="itic-page-container">
      {/* Institutional Page Header */}
      <section className="pnit-page-header text-center">
        <h1>Our Academic Programs</h1>
        <p>Select a program below to review detailed specifications and core duration timelines.</p>
      </section>

      {/* Main Single-View Interactive Section */}
      <section className="itic-section container">
        <div className="itic-interactive-layout">
          
          {/* Left Side: Course Selector Tabs */}
          <div className="pnit-course-menu">
            <h3>Available Programs</h3>
            <div className="menu-list">
              {courseList.map((course) => (
                <button
                  key={course.id}
                  className={`menu-tab-btn ${activeCourse.id === course.id ? 'active-tab' : ''}`}
                  onClick={() => setActiveCourse(course)}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: The Single Active Course Highlight Card */}
          <div className="itic-single-course-display">
            <div className="itic-highlight-card animate-fade-in">
              <span className="single-course-badge">{activeCourse.type}</span>
              <h2>{activeCourse.title}</h2>
              <hr className="itic-divider" />
              
              <div className="course-meta-info">
                <p><strong>⏳ Expected Duration:</strong> {activeCourse.duration}</p>
                <p><strong>🌍 Delivery Mode:</strong> Dual-track (On-Campus & Virtual)</p>
              </div>

              <h3>Course Overview</h3>
              <p className="course-description">{activeCourse.description}</p>

              <div className="single-course-actions">
                <a href="/apply" className="itic-btn-primary">
                  Enroll in This Program
                </a>
                <a href="/fees" className="itic-btn-outline">
                  View Fee Structure
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
    )
}