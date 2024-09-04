import { createRoot } from "react-dom/client";
import { useState } from "react";

function InputArea(props) {
  const [inputTxt, setInputTxt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputTxt(newValue);
  }

  function handleAdd() {
    if (inputTxt.trim() !== "") {
      props.onAdd(inputTxt);
      setInputTxt("");
      setErrorMessage(""); // Limpar a mensagem de erro se o campo não estiver vazio
    } else {
      setErrorMessage(
        "Campo de entrada vazio. Não é possível adicionar o item."
      );
    }
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputTxt} />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
      {errorMessage && (
        <p
          style={{
            backgroundColor: "#ffeaa7",
            color: "hsl(198, 1%, 29%)",
            fontSize: "10px",
          }}
        >
          {errorMessage}
        </p>
      )}{" "}
      {/* Exibir a mensagem de erro */}
    </div>
  );
}

export default InputArea;
