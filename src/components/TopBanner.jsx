import React from 'react';
import { FaEnvelope, FaLetterboxd, FaLocationDot, FaPhone } from 'react-icons/fa6';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="container banner-flex">
        <span className="banner-text"><FaLocationDot style={{color: 'red'}} /> 8th St. Port Saeed Deira City Centre, Dubai UAE</span>
        <span className="banner-text" style={{display:'inline-flex', alignItems:'center', gap:'0.3rem'}}><FaEnvelope /> info@prestigenexusit.com |<FaPhone  />(+971) 3 001 1113</span>
      </div>
    </div>
  );
}

export default TopBanner