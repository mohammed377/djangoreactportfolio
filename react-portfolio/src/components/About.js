import React from 'react'

import profilePic from './images/hloo.jpg';

function About() {
  return (
    <div className="aboutme_section">
      <div class="whoamiSec">

        <ul className="whoami-list">
        <h1 className="text-center">Who am i ?</h1>

          <li><b>Name </b>Mohammed Ismail</li> 
          <li><b>Birthday </b>2004.9.21</li>
          <li><b>Study </b>Computer Engineering</li>
              <li><b>Country </b>Egypt</li>
              <li><b>Degree </b>Bachelorios</li>
              <li>
                  <b>Work</b>
                  <span class="txt-rotate" data-period="100" data-rotate='[ "web development", "Photoshop", "Coding", "Graphic design", "Video" ]'></span>

              </li>   
        </ul>

     <img className="ab_image" src={profilePic} alt="profile picture" />
      </div>

      <p className="disc">
        I am John Doe a front-end web developer i have been working in these field for 5 years and learned the most advanced technologies and finished a lot of creative <a href="#" id="content3-link" >Projects</a> with different
        technologies, you can see my skills as a front-end developer <a href="#" id="content2-link">here</a> .
      </p>   


    </div>   
  )
}


export default About;