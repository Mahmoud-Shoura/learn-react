// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// ReactDOM.render(<App />, document.querySelector("#root"));
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<App />);
