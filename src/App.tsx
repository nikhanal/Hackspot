import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import UpcomingHackathon from "./components/UpcomingHackathon/UpcomingHackathon"
// import Features from "./components/Features/Features"

const App = () =>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <UpcomingHackathon/>
    {/* <Features/> */}
    <Footer/>

    </>
  )
}
export default App