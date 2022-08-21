import React from 'react';
import passgen from '../../images/passgen.jpg';
import teamgen from '../../images/teamgen.jpg';
import codeq from '../../images/codeq.jpg';
import readmegen from '../../images/readmegen.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1 className="topText">Portfolio</h1>
      <div className="boxText box">
        <div class="gallery">
          <a target="_blank" href="https://github.com/stefcarter/team_profile_generator" rel="noreferrer"> 
            <img src={teamgen} alt="team gen" width="600" height="400" />
          </a>
        </div>

      <div class="gallery">
        <a target="_blank" href="https://stefcarter.github.io/password-generator/" rel="noreferrer">
          <img src={passgen} alt="password gen" width="600" height="400" />
        </a>
      </div>

      <div class="gallery" >
        <a target="_blank" href="https://stefcarter.github.io/code-quiz/" rel="noreferrer">
          <img src={codeq} alt="code quiz" width="600" height="400" />
        </a>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://github.com/stefcarter/readme_generator" rel="noreferrer">
          <img src={readmegen} alt="read me gen" width="600" height="400" />
        </a>
      </div>
      </div>
    </div>
  );
}