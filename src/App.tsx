import { Route, Routes } from "react-router";
import useSectionObserver from "./Hooks/useSectionObserver";
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
  useSectionObserver();

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section
                id="home"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <Home />
              </section>

              <section>
                <SlideToTop/>
              </section>

              <section
                id="achievements"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <Achievements />
              </section>

              <section
                id="aboutme"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <AboutMe />
              </section>

              <section
                id="skills"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <Skills />
              </section>

              <section
                id="portfolio"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <Portfolios />
              </section>

              <section
                id="feedback"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <Feedback />
              </section>

              <section
                id="contact"
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
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
