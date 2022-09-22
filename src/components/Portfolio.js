
// packages
import {NavLink} from "react-router-dom";

// components
import Project from "./Project";

// data
import portfolio_data from "../data/portfolio_data.json";

// styles
import "../stylesheets/Portfolio.css";
import ReactGA from "react-ga";

function Portfolio() {

    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="portfolio_container">
            <NavLink to="/" className="portfolio_back_button">
                ◁
            </NavLink>
            <div className="portfolio_title">
                Programming Portfolio
            </div>
            <div className="portfolio_triangle"></div>
            <div className="portfolio_projects_container">
                {portfolio_data.map( data => {
                    return (
                        <Project data={data} />
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;

