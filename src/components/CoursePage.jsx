import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHourglass, FaGraduationCap, FaBookOpen, FaChalkboardUser } from 'react-icons/fa6';
import Courses from './Courses';


const CoursePage = ({ coursesData, handleCourseDisplay}) => {

  const location = useLocation();
  const { course } = location.state || {};

  return (
    <div>
        {course ?  (
        <div>
          <div className='pnit-page-header' style={{textAlign: 'center'}}>
            <h1> {course?.name} </h1>
          </div>
          <div style={{display:'flex', paddingLeft:'2.5rem'}}>
            <div  style={{marginTop: '2rem', marginBottom: '2rem'}} >
              <img width='640' src={course?.img} alt={`${course?.name} Image`} style={{ borderRadius: '12px'
              }} />
            </div>
            <div  style={{margin: '3rem 1.5rem'}}>
              <h3>Course Description</h3>
              <p style={{textAlign: 'justify'}}> {course?.desc} </p>
              <div style={{margin: '1.5rem 0'}}>
                <p><FaHourglass />Course Duration: {course?.duration}</p>
                <p style={{marginTop: '0.7rem'}}><FaGraduationCap />Delivery Mode: {course?.delMode}</p>
              </div>
            </div>
          </div>
        </div>
        ) : <Courses 
                coursesData={coursesData}
                handleCourseDisplay={handleCourseDisplay}/>}
    </div>
  )
};

export default CoursePage;