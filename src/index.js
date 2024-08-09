import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./component1.css";
import "./component2.css";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
