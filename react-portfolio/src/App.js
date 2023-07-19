import React, { useState } from "react";
import About from "./components/About.js";
import Achievments from "./components/Achievments.js";
import Portfolio from "./components/Portfolio.js";
import Skills from "./components/Skills.js";
import Nav from "./components/Nav.js";
import './styles/index.css'


const App = () => {
  
  const [activeLink, setActiveLink] = useState(1);

  const links = [
    { id: 1, text: 'About', content: <About /> },
    { id: 2, text: 'Skills', content: <Skills /> },
    { id: 3, text: 'Portfolio', content: <Portfolio /> },
    { id: 4, text: 'Achievments', content: <Achievments /> },

  ];

  const switchContent = id => {
    setActiveLink(id);
  };

  return (
    <div className="container">
      <Nav 
        links={links}
        switchContent={switchContent}
        activeLink={activeLink}
      />
      <div className="content">
        {links.find(link => link.id === activeLink).content}
      </div>
    </div>
  );
}

export default App;
