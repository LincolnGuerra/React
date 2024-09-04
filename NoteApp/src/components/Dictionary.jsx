import { createRoot } from "react-dom/client";

function Dictionary(props){
    return(
        <div className="dictionary">
            {props.children}
        </div>
    );
};

export default Dictionary