import { useEffect, useState } from 'react'
import './App.css'
import cybersecurityImage from './assets/cybersecurity.jpg'
import pythonImage from './assets/python.jpg'
import networkingImage from './assets/networkingandsystems.jpg'
import SoftwareDevImage from './assets/softwaredev.avif'
import ITfundamentalImage from './assets/ITfundamentals.avif'
import ITbootcamp from './assets/ITbootcamp.avif'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Stats from './components/Stats'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './components/About'
import CoursePage from './components/CoursePage'
import Fees from './components/Fees'
import Contact from './components/Contact'
import Apply from './components/Apply'
import { useNavigate } from 'react-router-dom'
import Scroll from './components/Scroll'
import RegistrationData from './components/RegistrationData'
import axios from 'axios'

function App() {


  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async () => {
    try {
      const result = await axios.get('https://pnit-backend.vercel.app/');
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error(error.message)
    }
  }

  const coursesData = [
  { id: 1, category: "Cybersecurity", name: "Cybersecurity", 
    href: "/courseFiles/cybersecurity.pdf", download:'cybersecurity.pdf',
    img: cybersecurityImage, delMode: 'In-Person', duration:'2 Months', 
    desc: 'This comprehensive, hands-on training program is designed to bridge the gap between theoretical security concepts and real-world defense operations. The curriculum delivers deep-dive expertise in offensive ethical hacking methodologies, cutting-edge network defense strategies, and resilient, secure infrastructure management. Participants master the tools and techniques required to proactively identify vulnerabilities, mitigate sophisticated cyber threats, and orchestrate robust defense mechanisms to secure modern corporate digital assets against real-world adversaries.'},
  { id: 2, category: "Networking & Systems", name: "Networking & Systems", 
    href: "/courseFiles/networking.pdf", download:'networking.pdf',
    img: networkingImage, delMode: 'In-Person', duration:'2 Months',  
    desc:"This comprehensive training program is designed to master the architecture of modern enterprise networks and advanced systems administration. The curriculum delivers deep-dive technical expertise in deploying infrastructure environments, managing server systems, and implementing industry-standard network protocols. Through intensive practical application, participants develop the critical skills required to optimize network topologies, configure directory services, monitor system performance, and engineer resilient, scalable infrastructures prepared for modern business demands."},
  { id: 3, category: "Software Development", name: "Software Development",
    href: "/courseFiles/softwareDev.pdf", download:'softwareDev.pdf',
    img: SoftwareDevImage, delMode: 'In-Person', duration:'6 Months', 
    desc: "This comprehensive engineering course provides an immersive, hands-on framework for mastering modern software design principles and full-stack application development. The curriculum delivers deep-dive expertise in agile methodologies, data structures, object-oriented programming, and contemporary architectural patterns. Through rigorous practical labs, participants master the tools and technologies required to write clean, maintainable code, architect scalable databases, build robust application programming interfaces (APIs), and deploy production-ready digital products that solve complex real-world problems."},
  { id: 4, category: "Computer Science", name: "IT Bootcamp", 
    href: "/courseFiles/ITbootcamp.pdf" , download:'ITbootcamp.pdf',
    img: ITbootcamp, delMode: 'In-Person', duration:'1 Week', 
    desc: "This rapid-track intensive program is specifically designed to bridge the gap between technical knowledge and professional industry readiness within the networking and cybersecurity domains. The curriculum delivers an accelerated, immersive education covering core network architecture, protocol configurations, and active defensive security frameworks. Through high-impact practical engineering labs, participants develop the critical capabilities required to configure enterprise network topologies, deploy robust intrusion prevention measures, analyze security vulnerabilities, and immediately enter the technology workforce as enterprise-ready defense specialists."},
  { id: 5, category: "Computer Science", name: "IT Fundamentals",
     href: "/courseFiles/ITfundamentals.pdf", download:'ITfundamentals.pdf',
     img: ITfundamentalImage, delMode: 'Hybrid (In-Person and Online)',  duration:'2 Months', 
     desc: "This structured introductory course offers an exhaustive exploration of core computer science principles and enterprise IT infrastructure components. The curriculum covers foundational concepts including computer hardware configurations, network architecture baselines, database basics, and fundamental software concepts. Through guided practical exercises, learners develop a thorough technical vocabulary and baseline capability, mastering the fundamental troubleshooting methodologies, system configurations, and operational workflows necessary to pursue advanced specializations in technical fields."},
  { id: 6, category: "Computer Science", name: "Python Programming",
     href: "/courseFiles/pythonProgramming.pdf", download:'pythonProgramming.pdf',
     img: pythonImage, delMode: 'Online',  duration:'3 Months', 
     desc: "Focused on developing production-level programmatic logic, this comprehensive course delivers an immersive study of the Python programming language from foundational mechanics to advanced scripting patterns. The curriculum covers data structures, syntax semantics, file I/O operations, error handling, and object-oriented paradigms. Through extensive coding labs and practical projects, participants master the tools required to write clean, algorithmic code, automate complex administrative tasks, parse corporate datasets, and construct modular, reusable scripts applicable across data science, web development, and system automation tracks."}
];


 const navigate = useNavigate()

  const handleCourseDisplay = (e, index) => {

    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    e.preventDefault();
    navigate('/courses', {state: {course: coursesData[index]}});
    console.log(coursesData[index]);
  }

  return (
    <div className='app-wrapper'>
      <Scroll />
      <TopBanner />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home coursesData={coursesData} handleCourseDisplay={handleCourseDisplay}/>}></Route>
          <Route path='/studentData' element={<RegistrationData userData={userData}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/courses' element={<CoursePage coursesData={coursesData} handleCourseDisplay={handleCourseDisplay}/>}></Route>
          <Route path='/fees' element={<Fees />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/apply' element={<Apply />}></Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
