import Hero from "./components/Hero"
import Stats from "./components/Stats"
import UpcomingEvents from "./components/UpcomingEvents"
import Courses from "./components/Courses"


const Home = ({ coursesData, handleCourseDisplay }) => {
    return (
        <div>
            <Hero />
            <Stats />
            <UpcomingEvents />
            <Courses 
                coursesData={coursesData}
                handleCourseDisplay={handleCourseDisplay}/>
        </div>
    )
}

export default Home