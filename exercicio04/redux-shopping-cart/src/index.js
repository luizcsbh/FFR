import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // importando o BrowserRouter

import "./styles.css"; //Importando arquivo de estilo

/**Importação dos Componentes React */
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
