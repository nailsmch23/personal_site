
// packages
import React from "react";
import {Link} from "react-router-dom";

// data
import projectsData from "../../data/projects_data.json";


function AllProjects() {

    return (
        <div>
            {projectsData.map(project => {
                return (
                    <Link id={`project${project.id}`} to={`/projects/${project.path}`} className="page_item">

                        {/* title */}
                        <h1>{project.title}</h1>

                        {/* subtitle & skills */}
                        <div>
                            <h2>{project.subtitle}</h2>
                            {project.skills.map(skill => <h3>∙ {skill} </h3>)}<h3>∙</h3>
                        </div>

                        {/* description */}
                        <span>{project.description}</span>

                    </Link>
                )
            })}
        </div>
    )
}

export default AllProjects;

