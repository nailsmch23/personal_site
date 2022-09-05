
// styles
import '../stylesheets/Conclusion.css';

// styles
import '../stylesheets/Conclusion.css';

// images
import github_image from '../images/GitHub.png'
import linkedin_image from '../images/LinkedIn.png'

function Conclusion() {

    return (
        <div className="conclusion_container">
            <div className="conclusion_inner_container">
                <div className="conclusion_buttons_container">
                    <a href="https://www.linkedin.com/in/neil-mchenry-61636914b" className="conclusion_button">
                        <img src={linkedin_image} alt="linkedin icon" className="conclusion_button_image" />
                        <div>
                            LinkedIn
                        </div>
                    </a>
                    <a href="https://github.com/nailsmch23" className="conclusion_button">
                        <img src={github_image} alt="github icon" className="conclusion_button_image" />
                        <div>
                            GitHub
                        </div>
                    </a>
                </div>
                <div className="conclusion_text_container">
                    <div className="conclusion_text">
                        ©2022 Neil McHenry
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conclusion;

