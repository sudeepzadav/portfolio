import { Route, Routes } from "react-router";
import {
  AboutMe,
  Achievements,
  Contact,
  Feedback,
  Footer,
  Home,
  Navbar,
  Portfolios,
} from "./Components/Index";
import Skills from "./Components/Skills/Skills";
import SlideToTop from "./Components/SlideToTop/SlideToTop";

const App = () => {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>

              <section>
                <SlideToTop />
              </section>

              <section id="achievements">
                <Achievements />
              </section>

              <section id="aboutme">
                <AboutMe />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="portfolio">
                <Portfolios />
              </section>

              <section id="feedback">
                <Feedback />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;