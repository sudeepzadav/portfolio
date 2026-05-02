import { Route, Routes } from "react-router";
import { AboutMe, Achievements, Contact, Feedback, Footer, Home, Navbar, Portfolios } from "./Components/Index"
import Skills from "./Components/Skills/Skills"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home />
      <Achievements />
      <AboutMe />
      <Skills />
      <Portfolios />
      <Feedback />
      <Contact />
      <Footer />
      
          </>
        }></Route>
      </Routes>
    </div>
  )
}

export default App
