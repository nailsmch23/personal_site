
// packages
import { NavLink } from 'react-router-dom';

// styles
import '../stylesheets/SectionHeader.css';

function SectionHeader() {

    return (
        <div className="section_header_container">
            <div className="section_header_inner_container">
                <div className="section_header_title">
                    Programming
                </div>
                <div className="section_header_button">
                    View Portfolio ▶︎
                </div>
            </div>
            <NavLink to='/portfolio' className="section_header_shape_container">
                <div id="triangle-left"></div>
                <div id="rectangle">
                    <div className="section_header_button">
                        View Portfolio ▶︎
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default SectionHeader;

