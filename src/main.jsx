
// packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// styles
import './index.css';

// components
import App from ".//App";
import AboutPage from "./components/About/AboutPage.jsx";
import ProjectsPage from "./components/Projects/ProjectsPage.jsx";
import NotebooksPage from "./components/Notebooks/NotebooksPage.jsx";
import ContactPage from "./components/Contact/ContactPage.jsx";
import AllProjects from "./components/Projects/AllProjects.jsx";
import AllNotebooks from "./components/Notebooks/AllNotebooks.jsx";
import Notebook from "./components/Notebooks/Notebook.jsx";
import PersonalSiteProject from "./components/Projects/Projects/PersonalSiteProject.jsx";
import MenuAppProject from "./components/Projects/Projects/MenuAppProject.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<AboutPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='projects' element={<ProjectsPage />} >
                        <Route index element={<AllProjects />} />
                        <Route path='PersonalSite' element={<PersonalSiteProject />} />
                        <Route path='MenuApp' element={<MenuAppProject />} />
                    </Route>
                    <Route path='notebooks' element={<NotebooksPage />} >
                        <Route index element={<AllNotebooks />} />
                        <Route path=':notebookID' element={<Notebook />} />
                    </Route>
                    <Route path='contact' element={<ContactPage />}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);



// TODO: change to vite so can test deploy
// TODO: slow down star
// TODO: instead of / along with below, swap landing portrait to other side and use instead of other portrait on rest of site
// TODO: move portrait to upper right, perma-on all pages, then show rest of card when hovering over image or "contact" tab button
// TODO: make github/observable buttons more noticeable
// TODO: add interests section in bios
// TODO: fix notebook dates
// TODO: upload fantasy notebook to github, fix source link
// TODO: wait to load images?
// TODO: adjust picture in star?
// TODO: change units to rem
// TODO: add in moving stars to landing
// TODO: spin title star on click
// TODO: scroll to leave landing

