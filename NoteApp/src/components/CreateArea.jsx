import { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content: ""
    });

    function handleChange(event){
        const{name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){

        if(note.title.trim() === "" || note.content.trim() === ""){
            alert("The title and the content can't be empty!");
        } else {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        }
        
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded && ( 
                <input 
                    name="title" 
                    value={note.title} 
                    placeholder="Title"
                    onChange={handleChange}
                />
                )}
                <textarea 
                onClick={expand}
                name="content" 
                value={note.content} 
                placeholder="Take a note" 
                rows={isExpanded ? 3 : 1}
                onChange={handleChange}
                />
                <Zoom in={isExpanded}><Fab onClick={submitNote}><AddBoxIcon/></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;