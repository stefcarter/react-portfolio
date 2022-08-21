import React from "react";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />}
      />
      <Route 
        path="/" 
        element={<Contact />}
      />
      <Route 
        path="/" 
        element={<Portfolio />}
      />
      <Route 
        path="/" 
        element={<Resume />}
      />
      <Route 
        path="/" 
        element={<AboutMe />}
      />
    </Routes>
  )
}

export default App;