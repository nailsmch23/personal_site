
// packages
import {useParams, Link} from "react-router-dom";

// data
import notebooksData from "../../data/notebooks_data.json"
import {useState, useRef} from "react";

// images
import gitHubLogo from "../../images/GitHub.png"
import gitHubLogoText from "../../images/GitHubText.png"
import observableLogoText from "../../images/ObservableText.png"

function Notebook() {

    // get data from JSON file
    let {notebookID} = useParams();
    let notebookData = notebooksData[notebookID];

    // variables to set height of iframe
    const ref = useRef();
    let [iframeHeight, setIframeHeight] = useState("0px");

    // set height of iframe on load
    const onLoad = () => {
        setIframeHeight(ref.current.contentWindow.top.document.body.scrollHeight + "px");
    };


    return (
        <div>

            {/* button bar */}
            <div className="notebooks_page_button_container">

                {/* back to all notebooks */}
                <Link to='/notebooks'>◀︎ all notebooks</Link>
                <span/>

                {/* view notebook from source */}
                {notebookData.type === 'Observable' ?
                    <a href={notebookData.sourceLink} target="_blank" rel="noopener noreferrer">
                        <span>view notebook on</span>&nbsp;&nbsp;
                        <img src={observableLogoText} alt="Observable logo" />
                    </a>
                    :
                    <a href={notebookData.sourceLink} target="_blank" rel="noopener noreferrer">
                        <span>view notebook on</span>&nbsp;&nbsp;
                        <img src={gitHubLogo} alt="Observable logo"/><img src={gitHubLogoText} alt="GitHub Logo Text"/>
                    </a>
                }

            </div>

            {/* notebook */}
            <iframe
                ref={ref}
                onLoad={onLoad}
                id='notebook'
                src={`${notebookData.embedLink}`}
                title="notebook post"
                height={iframeHeight}
                width="100%"
                style={{overflow: "hidden"}}
                frameBorder="0"
            />
        </div>
    )
}

export default Notebook;

