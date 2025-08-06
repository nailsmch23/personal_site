
// packages
import React from "react";

// styles
import '../../stylesheets/About.css';

// data
import skills_data from "../../data/skills_data.json";

// images
import CSSLogo from "../../images/CSS.png";
import DjangoLogo from "../../images/Django.png";
import HTMLLogo from "../../images/HTML.png";
import JavaLogo from "../../images/Java.png";
import JavaScriptLogo from "../../images/JavaScript.png";
import MATLABLogo from "../../images/MATLAB.png";
import PandasLogo from "../../images/Pandas.png";
import PythonLogo from "../../images/Python.png";
import RLogo from "../../images/R.png";
import ReactLogo from "../../images/React.png";
import SQLLogo from "../../images/SQL.png";
import ObservableLogo from "../../images/Observable.png"
import linkedin_logo from "../../images/LinkedIn.png";
import github_logo from "../../images/GitHub.png";
import me_image from "../../images/me.png";

import me_head from "../../images/me_landing_head.png"

function AboutPage() {

    let logos = {
        "CSS": CSSLogo,
        "Django": DjangoLogo,
        "HTML": HTMLLogo,
        "Java": JavaLogo,
        "JavaScript": JavaScriptLogo,
        "MATLAB": MATLABLogo,
        "Pandas": PandasLogo,
        "Python": PythonLogo,
        "R": RLogo,
        "React": ReactLogo,
        "SQL":  SQLLogo,
        "Observable": ObservableLogo
    }

    return (
        <div className="page about_page">
            <div>
                {/* bio */}
                <div className="about_page_section">
                    <h1>
                        Bio
                    </h1>
                    <div className="about_page_bio">
                        Data-driven developer focused on data structures & processing, software design, and full-stack web development. Analytical and organized with a strong foundation in engineering.
                    </div>
                </div>

                {/* skills */}
                <div className="about_page_section">
                    <h1>
                        Skills
                    </h1>
                    <div className="about_page_skills_container">
                        {skills_data.skills.map(skill => {
                            return (
                                <div className="about_page_skill_container">
                                    <div className="about_page_skill_inner_container">
                                        <img src={logos[skill]} alt={skill}/>
                                        {skill}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            <div className="contact_card">

                {/* image */}
                <img src={me_image} className="contact_card_me_img" alt="neil"/>

                <div>
                    {/* name */}
                    <h1>
                        Neil McHenry
                    </h1>

                    {/* email */}
                    <h2>
                        neilmchenry1@gmail.com
                    </h2>

                    {/* links */}
                    <div className="contact_card_logo_container">
                        <a href="https://www.linkedin.com/in/neil-mchenry-61636914b" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_logo} alt="linkedin logo" className="contact_card_logo"/>
                        </a>
                        <a href="https://github.com/nailsmch23" target="_blank" rel="noopener noreferrer">
                            <img src={github_logo} alt="github logo" className="contact_card_logo"/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;

