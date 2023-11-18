import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header.tsx";
import { App } from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

