import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

import './App.css';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import SinglePage from './pages/SInglePage';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
