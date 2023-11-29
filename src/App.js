// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
// import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
