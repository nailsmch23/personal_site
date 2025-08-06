
// packages
import React from "react";
import {Outlet} from "react-router-dom";

// styles
import '../../stylesheets/Notebooks.css';


function NotebooksPage() {

    return (
        <div className="page notebooks_page">
            <Outlet />
        </div>
    );
}

export default NotebooksPage;

