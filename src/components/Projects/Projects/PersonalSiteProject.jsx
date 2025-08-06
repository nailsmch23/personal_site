
// packages
import {Link} from "react-router-dom";

// images
import PersonalSiteGif from "../../../images/Personal_Site.gif";
import gitHubLogo from "../../../images/GitHub.png";
import gitHubLogoText from "../../../images/GitHubText.png";


function PersonalSiteProject() {
    return (
        <div className="project">

            {/* button bar */}
            <div className="projects_page_button_container">

                {/* back to all projects */}
                <Link to='/projects'>◀︎ all projects</Link>
                <span/>

                {/* view project from source */}
                <a href="https://github.com/nailsmch23/personal_site" target="_blank" rel="noopener noreferrer">
                    <span>view project on</span>&nbsp;&nbsp;
                    <img src={gitHubLogo} alt="Observable logo"/><img src={gitHubLogoText} alt="GitHub Logo Text"/>
                </a>

            </div>

            {/* project */}
            <h1>Personal Site</h1>
            <div>Project & notebook portfolio sprinkled with some fun graphics.</div>
            <ul>
                <li>All JavaScript, HTML, & CSS written from scratch</li>
                <li>Single page application made using React</li>
                <li>Dynamically embedded notebooks from Observable</li>
                <li>Deployed on Heroku</li>
            </ul>
            <img src={PersonalSiteGif} alt="Gif exploring the site"/>

        </div>
    )
}

export default PersonalSiteProject;

