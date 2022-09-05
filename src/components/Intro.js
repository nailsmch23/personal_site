
// styles
import '../stylesheets/Intro.css';

// images
import me_image from '../images/me.jpg'

function Intro() {

    return (
        <div className="intro_container">
            <img src={me_image} alt='Neil' className="intro_me_image" />
            <div className="intro_inner_container">
                <div className="intro_text">
                    good morning, my name is
                </div>
                <div className="intro_name">
                    Neil McHenry.
                </div>
                <div className="intro_text">
                    welcome to my website.
                </div>
            </div>
            <div className="intro_continue_container">
                ▼ scroll to continue ▼
            </div>
        </div>
    );
}

export default Intro;

