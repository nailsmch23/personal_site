
// packages
import React from "react";

// styles
import '../../stylesheets/Contact.css';

// images
import me_image from '../../images/me.png'
import linkedin_logo from "../../images/LinkedIn.png";
import github_logo from "../../images/GitHub.png";

function ContactPage() {

    return (
        <div className="page contact_page">

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
                <div className="contact_page_logo_container">
                    <a href="https://www.linkedin.com/in/neil-mchenry-61636914b">
                        <img src={linkedin_logo} alt="linkedin logo" className="contact_page_logo"/>
                    </a>
                    <a href="https://github.com/nailsmch23">
                        <img src={github_logo} alt="github logo" className="contact_page_logo"/>
                    </a>
                </div>
            </div>

            {/* image */}
            <img src={me_image} className="contact_page_me_img" alt="neil"/>

        </div>
    );
}

export default ContactPage;

