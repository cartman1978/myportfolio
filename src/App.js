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
import MobNav from './components/MobNav';
import './styles.css';




function App() {
  const location = useLocation();
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <MobNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
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
