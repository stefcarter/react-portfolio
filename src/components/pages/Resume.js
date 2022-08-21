import React from "react";

function Resume(){
    return(
    <div>
        <h1 className="topText">Resume</h1>
        <div className="aboutText">
        
        <h2>Experience</h2>
        <p>I have experience managing and maintaining websites hosted by various providers. I work well within groups and take on leadership roles to accomplish goals efficiently and effectively. My strengths include problem solving, teamwork, and understanding the needs of clients. I'm passionate and dedicated to creating functional and beautiful code. </p>
        <p>My full resume can be viewed <a href="https://docs.google.com/document/d/1ZWiWKj5uhlXXrNQpWZBzusjrIiC2I0lMcB6tOho3hKw/edit?usp=sharing" target="_blank">here</a></p>
        <div className="frontEl">
        <h2>Front-end</h2>
        <ul>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
        </ul>
        </div>
        <div className="backEl">
        <h2>Back-end</h2>
        <ul>
            <li>Express</li>
            <li>Node</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>Sequelize</li>
        </ul>
        </div>
        </div>
    </div>
    )
}

export default Resume;