import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "../components/App";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const app = document.getElementById("main");
    createRoot(app).render(<App />);
  }
}
