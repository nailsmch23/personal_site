
// packages
import {useEffect, useState} from "react";
import {Outlet, Link, useLocation} from "react-router-dom";

// styles
import './App.css';

// fonts
import "./fonts/Bienvenue-Regular.ttf"
import "./fonts/Montserrat.ttf"

// images
import neilsStar from './images/neils_star.png'

//components
import Landing from "./components/Landing/Landing.jsx";


function App() {

    // logic to display landing when on it otherwise hide and go to content
    let location = useLocation();
    const [onLanding, setOnLanding] = useState(location.pathname === "/")
    const handleLandingClick = () => {
        setOnLanding(false);
    }
    useEffect(() => {
        setOnLanding(location.pathname === "/")
    }, [location]);


    return (
        <div className="site">

            {/* landing */}
            {onLanding &&
                <Landing handleLandingClick={handleLandingClick}/>
            }

            {/* content */}
            <div className={`content ${onLanding && 'content_hidden'}`}>

                {/* title & tabs bar */}
                <div className="title_bar">
                    <div className="title">
                        <img src={`${neilsStar}`} alt="blue star"/>
                        neil mchenry personal site
                    </div>
                    <nav className="tabs_container">
                        <Link to="/" className='tab'>
                            landing
                        </Link>
                        <Link to="/about" className={`tab ${((location.pathname === "/about") || (location.pathname === "/")) && "tab_active"}`}>
                            about
                        </Link>
                        <Link to="/projects"
                              className={`tab ${location.pathname.substring(0, 9) === "/projects" && "tab_active"}`}>
                            projects
                        </Link>
                        <Link to="/notebooks"
                              className={`tab ${location.pathname.substring(0, 10) === "/notebooks" && "tab_active"}`}>
                            notebooks
                        </Link>
                        <div className="tab">
                            contact
                        </div>
                    </nav>
                </div>

                {/* outlet */}
                <Outlet/>

            </div>
        </div>
    );
}


export default App;

