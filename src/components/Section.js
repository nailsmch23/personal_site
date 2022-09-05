
//styles
import '../stylesheets/Section.css';

//images
import CSSLogo from '../images/CSS.png'
import DjangoLogo from '../images/Django.png'
import HTMLLogo from '../images/HTML.png'
import JavaLogo from '../images/Java.png'
import JavaScriptLogo from '../images/JavaScript.png'
import MATLABLogo from '../images/MATLAB.png'
import PandasLogo from '../images/Pandas.png'
import PythonLogo from '../images/Python.png'
import RLogo from '../images/R.png'
import ReactLogo from '../images/React.png'
import SQLLogo from '../images/SQL.png'

function Section({data}) {

    let verbose_name = data.verbose_name;
    let skills = data.skills;
    let logos = {"CSS": CSSLogo,
                 "Django": DjangoLogo,
                 "HTML": HTMLLogo,
                 "Java": JavaLogo,
                 "JavaScript": JavaScriptLogo,
                 "MATLAB": MATLABLogo,
                 "Pandas": PandasLogo,
                 "Python": PythonLogo,
                 "R": RLogo,
                 "React": ReactLogo,
                 "SQL":  SQLLogo
                }

    return (
        <div className="section_container">
            <div className="section_title">
                {verbose_name}
            </div>
            <div className="section_content_container">
                {skills.map( item => {
                    return (
                        <div className="section_content_button">
                            <img src={logos[item]} alt="python" className="section_content_image"></img>
                            <div className="section_content_text">
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Section;

