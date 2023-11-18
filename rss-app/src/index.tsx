import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title.tsx";
import { App } from "./App.tsx";
import NavBar from "./navbar/NavBar.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <NavBar />
    <Title />
    <App />
  </React.StrictMode>
);

