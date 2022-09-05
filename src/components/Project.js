
// packages
import {useState} from 'react';

// styles
import "../stylesheets/Project.css";

//images
import MenuAppImage from '../images/Menu_App.png'
import QuotesAPIImage from '../images/Quotes_API.png'

function Portfolio(props) {

    let data = props.data;

    let [folded, setFolded] = useState(true);

    let project_images = {
        "Menu_App": MenuAppImage,
        "Quotes_API": QuotesAPIImage
    }

    return (
        <div className="folded_project_container">
            <div className="project_title_container" onClick={() => setFolded(!folded)}>
                <div>
                    <div className="project_title">
                        {data.project_name}
                    </div>
                    <div className="project_skills">
                        {data.skills.join(" ・ ")}
                    </div>
                </div>
                <div className="project_arrow">
                    {folded ? "▽" : "△"}
                </div>
            </div>
            {!folded &&
                <div className="project_details">
                    <a href={data.site_link} className="project_button project_site_button">
                        Site ↖︎
                    </a>
                    <a href={data.code_link} className="project_button project_github_button">
                        Code ↖︎
                    </a>
                    <div className="project_description">
                        {data.description}
                    </div>
                    <div className="project_description_bullet_list">
                        {data.description_bullets.map( bullet_data => {
                            return (
                                <ul className="project_description_bullet">
                                    <li>{bullet_data}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <img src={project_images[data.image]} alt='Project' className="project_image" />
                </div>
            }
        </div>
    );
}

export default Portfolio;

