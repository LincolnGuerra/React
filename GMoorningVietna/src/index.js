import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const data = new Date(2024, 4, 3, 2, 3, 30, 0);
const horaAtual = data.getHours();
let saudacao;
let estiloCustomizado = {
  border: "",
  fontSize: "",
  color: "",
};

if (horaAtual < 12) {
  saudacao = "Bom dia MOTHERTHOMPSOOONNN";
  estiloCustomizado.color = "red";
  estiloCustomizado.fontSize = "20px";
  estiloCustomizado.border = "5px solid red";
} else if (horaAtual > 18) {
  saudacao = "Bora bebeerrrr";
  estiloCustomizado.color = "green";
  estiloCustomizado.fontSize = "50px";
  estiloCustomizado.border = "5px solid green";
} else {
  saudacao = "Ta acabando miseraaaaver";
  estiloCustomizado.color = "yellow";
  estiloCustomizado.fontSize = "30px";
  estiloCustomizado.border = "5px solid yellow";
}

root.render(
  <h1 className="heading" style={estiloCustomizado}>
    {saudacao}
  </h1>
);
