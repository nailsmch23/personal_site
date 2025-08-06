
// packages
import React from "react";

// styles
import '../../stylesheets/Landing.css';

// images
import landingMeBody from "../../images/me_landing.png";
import landingMeHead from "../../images/me_landing_head.png";
import genusStarOutline from "../../images/neils_star_outline.png"

// components
import Stars from "../Stars.jsx";


function Landing({ handleLandingClick }) {

    // generate greeting based on time
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

    return (
        <div className="landing" onClick={handleLandingClick}>

            {/* stars */}
            <Stars/>

            {/* image of me & star */}
            <div className='landing_picture_container'>

                {/* star backing/color */}
                <div className='landing_star_backing'/>

                {/* full body image to be cropped by star */}
                <img
                    src={landingMeBody}
                    className='landing_picture landing_me'
                    alt='Neil'
                />

                {/* star outline */}
                <img
                    src={genusStarOutline}
                    className='landing_picture landing_star_outline'
                    alt='star'
                />

                {/* head image to not be cropped by star */}
                <img
                    src={landingMeHead}
                    className='landing_picture landing_me_head'
                    alt='Neil'
                />

            </div>

            {/* welcome text */}
            <div className="landing_welcome">
                <div>
                    {greeting}, welcome to my website.
                </div>
                <div>
                    <span>
                        i'm
                    </span>
                    <span className="landing_name">
                        Neil McHenry.
                    </span>
                </div>
            </div>

            {/*<img src={landingMeHead} className="head_test" />*/}

            {/* scroll to continue text */}
            <div className='landing_continue'>
                <span className='landing_continue_rocket'>🚀</span>
                <span className='landing_continue_text'>&nbsp;&nbsp;click anywhere to continue&nbsp;&nbsp;</span>
                <span className='landing_continue_rocket'>🚀</span>
            </div>
        </div>
    );
}

export default Landing;

