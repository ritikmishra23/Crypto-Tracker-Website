import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// eslint-disable-next-line no-unused-vars
import ChartJS from "chart.js"; // Only keep if you plan to use it
// eslint-disable-next-line no-unused-vars
import { useState } from "react"; // Only keep if you plan to use it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

