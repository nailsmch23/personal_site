
// packages
import {useEffect} from "react";

// styles
import '../stylesheets/Intro.css';

// images
import me_image from '../images/me.jpg'

function Intro() {

    let hour = new Date().getHours();
    let greeting = 'a fine day';
    if (hour < 12) {
        greeting = 'good morning';
    } else if (hour < 18) {
        greeting = 'good afternoon';
    } else if (hour < 23) {
        greeting = 'good evening';
    }

    // remove scroll to continue
    // let handleScroll = () => {
    //     console.log('scroll')
    // }
    //
    // useEffect(() => {
    //     window.addEventListener("scroll", (e) => handleNavigation(e));
    // }, []);

    return (
        <div className="intro_container">
            <img src={me_image} alt='Neil' className="intro_me_image" />
            <div className="intro_inner_container">
                <div className="intro_text">
                    { greeting }, my name is
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

