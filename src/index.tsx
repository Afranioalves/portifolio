import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import Produtos from "./pages/Produtos";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Produtos />
  </BrowserRouter>,
  document.getElementById('root')
);
