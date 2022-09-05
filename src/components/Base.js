
// packages
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//components
import Main from "./Main";
import Portfolio from "./Portfolio";

// styles
import '../stylesheets/Base.css';


function Base() {

    return (
        <Router>
        <Routes>
            <Route exact path='/' exact element={<Main />} />
            <Route path='/portfolio' element={<Portfolio/>} />
            {/*<Route path='/project' element={<Contact/>} />*/}
        </Routes>
        </Router>
    );
}

export default Base;

