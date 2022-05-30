import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import About from "./pages/About"
import NoMatch from "./pages/NoMatch"
import Navbar from "./components/Navbar"
import SinglePage from "./pages/SInglePage"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}>
          <Route path=":slug" element={<SinglePage />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)