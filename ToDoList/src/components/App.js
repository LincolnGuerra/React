import { useState } from "react";
import { createRoot } from "react-dom/client";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App(){

    
    const [items, setItems] = useState([]);

    function addItem(inputTxt){
        setItems( (prevItems) =>{
            return [...prevItems, inputTxt];
        });
    }

    function deleteItem(id){
       setItems(prevItems => {
        return prevItems.filter(
            (item, index) => {
                return index !== id;
            }
        )
       });
    };

    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea 
            onAdd={addItem}
          />
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ToDoItem 
                    key={index}
                    id={index}
                    text={todoItem}
                    onChecked={deleteItem}
                />
                ))}
            </ul>
          </div>
        </div>
      );
}

export default App;