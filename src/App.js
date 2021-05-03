import React from "react";
// Global  Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from './pages/ProjectDetails';
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/projects/:id">
            <ProjectDetails />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
