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
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>

        <Route path="/Projects" exact>
          <Projects />
        </Route>

        <Route>
          <ProjectDetails path="/Projects/:id" />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
