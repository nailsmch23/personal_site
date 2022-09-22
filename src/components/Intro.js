
// packages
import {useEffect, useState} from "react";

// styles
import '../stylesheets/Intro.css';

// images
import me_image from '../images/me.jpg'
import background_image from '../images/background.jpg'

function Intro() {

    let hour = new Date().getHours();
    let greeting;
    if (hour < 3) {
        greeting = 'good morning';
    } else if (hour === 3) {
        greeting = 'a fine day';
    } else if (hour < 12) {
        greeting = 'good morning';
    } else if (hour < 18) {
        greeting = 'good afternoon';
    } else {
        greeting = 'good evening';
    }

    let [loadedMe, setLoadedMe] = useState(false);
    let [loadedBackground, setLoadedBackground] = useState(false);

    // let loaded = () => loadedMe && loadedBackground;
    let loaded = () => loadedMe;

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
            <img
                src={me_image}
                onLoad={() => {setLoadedMe(true)}}
                className={`intro_me_image ${loaded() ? '' : 'preloaded'}`}
                alt='Neil'
            />
            <img
                src={background_image}
                onLoad={() => {setLoadedBackground(true)}}
                className={`intro_background_image ${loaded() ? '' : 'preloaded'}`}
                alt='Background'
            />
            <div className={`intro_background_overlay ${loaded() ? '' : 'preloaded'}`}></div>
            <div className={`intro_inner_container ${loaded() ? '' : 'preloaded'}`}>
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
            <div className={`intro_continue_container ${loaded() ? '' : 'preloaded'}`}>
                ▼ scroll to continue ▼
            </div>
        </div>
    );
}

export default Intro;

