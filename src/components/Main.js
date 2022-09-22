
// components
import Intro from "./Intro";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Conclusion from "./Conclusion";

// data
import section_data from '../data/section_data.json';

// styles
import '../stylesheets/Main.css';
import ReactGA from "react-ga";


function Main() {

    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <Intro />
            <SectionHeader />
             <div className="sections_container">
                {section_data.map( data => {
                    return (
                        <Section
                            data={data}
                        />
                    )
                })}
             </div>
            <Conclusion />
        </div>
    );
}

export default Main;

