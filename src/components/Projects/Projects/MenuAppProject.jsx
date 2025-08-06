
// packages
import {Link} from "react-router-dom";

// images
import MenuApp from "../../../images/Menu_App.gif";
import gitHubLogo from "../../../images/GitHub.png";
import gitHubLogoText from "../../../images/GitHubText.png";


function MenuAppProject() {
    return (
        <div className="project">

            {/* button bar */}
            <div className="projects_page_button_container">

                {/* back to all projects */}
                <Link to='/projects'>◀︎ all projects</Link>
                <span/>

                {/* view project from source */}
                <a href="https://github.com/nailsmch23/gospel-swamp-menu" target="_blank" rel="noopener noreferrer">
                    <span>view project on</span>&nbsp;&nbsp;
                    <img src={gitHubLogo} alt="Observable logo"/><img src={gitHubLogoText} alt="GitHub Logo Text"/>
                </a>

            </div>

            {/* project */}
            <h1>Menu App</h1>
            <div>Simple web application for ordering and preparing drinks.</div>
            <ul>
                <li>Clean UI to order drinks</li>
                <li>Interface for bartenders to view orders and mark as complete</li>
                <li>Frontend built with React, backend built with Django</li>
                <li>Mobile friendly</li>
            </ul>
            <img src={MenuApp} alt="Gif exploring the site"/>

        </div>
    )
}

export default MenuAppProject;

