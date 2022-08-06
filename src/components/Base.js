
import '../stylesheets/Base.css';
import Intro from "./Intro";
import Software from "./Software";
import Data from "./Data";
import Web from "./Web";

function Base() {
    return (
        <div className="App">
            {[
                <Intro />,
                <Software />,
                <Data />,
                <Web />
            ].map( item => {
                return (
                    <div className="Page">
                        { item }
                    </div>
                        )
            })}
        </div>
    );
}

export default Base;
