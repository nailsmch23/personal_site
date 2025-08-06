
// packages
import React from "react";
import {Outlet} from "react-router-dom";

// styles
import '../../stylesheets/Projects.css';


function ProjectsPage() {

    return (
        <div className="page projects_page">
            <Outlet />
        </div>
    );
}

export default ProjectsPage;

