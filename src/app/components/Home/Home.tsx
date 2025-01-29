import About from "./About/About"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Services from "./Services/Services"


function Home() {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
    </div>
  )
}

export default Home