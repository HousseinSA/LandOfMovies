import React, {StrictMode} from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"
import {ScrollToTop} from "./Components/ScrollToTop"
import {BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>
)
