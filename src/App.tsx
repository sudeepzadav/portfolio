import { AboutMe, Achievements, Contact, Home, Navbar } from "./Components/Index"
import Skills from "./Components/Skills/Skills"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Achievements />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
