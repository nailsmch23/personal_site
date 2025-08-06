
// packages
import React from "react";
import {Link} from "react-router-dom";

// data
import notebooksData from "../../data/notebooks_data.json"


function AllNotebooks() {

    return (
        <div>
            {notebooksData.slice(0).reverse().map(notebook => {
                return (
                    <Link id={`notebook${notebook.id}`} to={`/notebooks/${notebook.id}`} className="page_item">

                        {/* title */}
                        <h1>{notebook.title}</h1>

                        {/* date & skills */}
                        <div>
                            <h2>{notebook.postdate}</h2>
                            {notebook.skills.map(skill => <h3>∙ {skill} </h3>)}<h3>∙</h3>
                        </div>

                        {/* description */}
                        <span>{notebook.description}</span>

                    </Link>
                )
            })}
        </div>
    )
}

export default AllNotebooks;

