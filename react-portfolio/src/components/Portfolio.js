import React from 'react'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio">

      <div className="projects">
        {/* flex container */}
        <div className="project-cards">
          {/* Project Card */}
          <div className="project-card">
            <img src={img1} alt="" />
            <h3>DigitalMarketPlace</h3>
            <a href="#">See Project</a>
          </div> 
          
          <div className="project-card">
            <img src={img5} alt="" />
            <h3>Tic-Tac-Toe</h3>
            <a href="#">See Project</a>
          </div>           <div className="project-card">
            <img src={img4} alt="" />
            <h3>Chess Game</h3>
            <a href="#">See Project</a>
          </div>           <div className="project-card">
            <img src={img3} alt="" />
            <h3>Blog Site</h3>
            <a href="#">See Project</a>
          </div>           <div className="project-card">
            <img src={img4} alt="" />
            <h3>Todo list</h3>
            <a href="#">See Project</a>
          </div>           <div className="project-card">
            <img src={img5} alt="" />
            <h3>Social media</h3>
            <a href="#">See Project</a>
          </div> 
        </div>
      </div>  
    </div>
  )
}

export default Portfolio;