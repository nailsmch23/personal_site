
// components
import Intro from "./Intro";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Conclusion from "./Conclusion";

// data
import section_data from '../data/section_data.json';

// styles
import '../stylesheets/Main.css';


function Main() {

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

