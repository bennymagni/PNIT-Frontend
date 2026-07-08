import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  
  const [sendInquiry, setSendInquiry] = useState(false);
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSendInquiry = async (e) => {
      e.preventDefault();
      const objectData = {
        fullName,
        emailAddress,
        subject,
        message,
      }
  
      try {
        const result = await axios.post('http://localhost:5900/contact', objectData);
        setSendInquiry(true);
        console.log(result)
        alert("Thank you! Your inquiry has been submitted safely to Prestige Nexus Institute of Technology");
      } catch (error) {
        console.error(error.message);
      } finally {
        setFullName('');
        setEmailAddress('');
        setSubject('');
        setMessage('');
      }
    };

  return (
    <div className="pnit-page-container">
      <section className="pnit-page-header text-center">
        <h1>Contact Us</h1>
        <p>Get in touch with our admissions or administrative team for custom corporate enquiries.</p>
      </section>

      <section className="pnit-section container">
        <div className="pnit-grid-2">
          {/* Contact Details */}
          <div className="contact-info-panel">
            <h2>Reach Out Directly</h2>
            <p>Our operational offices are ready to assist you during business working hours.</p>
            
            <div className="info-block">
              <h4>Main Office Address</h4>
              <p> 8th St. Port Saeed Deira City Centre,<br />Dubai, UAE</p>
            </div>
            
            <div className="info-block">
              <h4>Email Support</h4>
              <p>admissions@prestigenexusit<br />info@prestigenexusit</p>
            </div>

            <div className="info-block">
              <h4>Telephone Hotlines</h4>
              <p>+971 (3) 001 1113<br />+971 (3) 001 1114</p>
            </div>
          </div>

          {/* Form */}
          <div className="pnit-card contact-form-card">
            <h3>Send a Fast Message</h3>
            <form onSubmit={handleSendInquiry} className="pnit-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="form-group" style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                <label>Message / Specific Inquiry</label>
                <textarea rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button type="submit" className="pnit-btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;