import axios from 'axios';
import { useState } from 'react';
import { FaRegCircleCheck, FaFileCircleCheck } from 'react-icons/fa6';

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentOrganization, setCurrentOrganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [course, setCourse] = useState('');
  const [studyMode, setStudyMode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleApplication = async (e) => {
    e.preventDefault();
    const objectData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      currentOrganization,
      jobTitle,
      course,
      studyMode
    }

    try {
      const result = await axios.post('https://pnit-backend.vercel.app/apply', objectData);
      setSubmitted(true);
      console.log(result)
    } catch (error) {
      console.error(error.message);
    } finally {
      setFirstName('');
      setLastName('');
      setEmail('');
      setCurrentOrganization('');
      setJobTitle('');
      setCourse('');
      setStudyMode('');
      setPhoneNumber('');
    }
  };

  return (
    <div className="pnit-page-container">
      <section className="pnit-page-header text-center">
        <h1>Application Portal</h1>
        <p>Complete this simple digital application step to book your seat.</p>
      </section>

      <section className="pnit-section container max-width-md">
        {submitted ? (
          <div className="pnit-success-card text-center">
            <h2><span style={{display:'inline-flex', alignItems:'center', gap:'0.3rem'}}><FaRegCircleCheck /> Application Successfully Submitted!</span></h2>
            <p>The PNIT admissions council will review your data and respond within 48 business hours.</p>
          </div>
        ) : (
          <div className="pnit-card application-form-card">
            <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Enrollment Form</h2>
            <form onSubmit={handleApplication} className="pnit-form">
              
              <div className="form-section-title">Personal Particulars</div>
              <div className="pnit-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
              </div>

              <div className="form-group">
                <label>Contact Email *</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </div>

              <div className="form-section-title" style={{ marginTop: '1.5rem' }}>Professional Information</div>
              <div className="form-group">
                <label>Current Organization</label>
                <input type="text" placeholder="e.g., Wolf Technologies" value={currentOrganization} onChange={(e) => setCurrentOrganization(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Job Designation / Title</label>
                <input type="text" placeholder="e.g., Network Engineer" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
              </div>

              <div className="form-section-title" style={{ marginTop: '1.5rem' }}>Program Selection</div>
              <div className="form-group">
                <label>Select Desired Course</label>
                <select required defaultValue="" value={course} onChange={(e) => setCourse(e.target.value)}>
                  <option value="" disabled>-- Select Course --</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="net&systems">Networking & Systems</option>
                  <option value="software dev">Software Development</option>
                  <option value="IT bootcamp">IT Bootcamp</option>
                  <option value="IT fundamentals">IT Fundamentals</option>
                  <option value="python programming">Python Programming</option>
                </select>
              </div>

              <div className="form-group">
                <div>
                  <label>Mode of Attendance*</label>
                    <label style={{ marginRight: '15px', fontWeight: 'normal' }}>
                      <input type="radio" name="mode" checked={studyMode == 'physical'} value="physical" onChange={(e) => setStudyMode(e.target.value)} required style={{ marginRight: '5px' }} /> On-Campus
                    </label>
                    <label style={{ fontWeight: 'normal' }}>
                      <input type="radio" name="mode" value="virtual" checked={studyMode == 'virtual'} onChange={(e) => setStudyMode(e.target.value)} required style={{ marginRight: '5px' }} /> Virtual
                    </label>
                </div>
              </div>

              <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                <button type="submit" className="pnit-btn-primary btn-block" style={{ marginTop: '2rem'}}>
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Apply;
