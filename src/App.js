import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import WinnersPage from './components/WinnersPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/winners" element={<WinnersPage />} />
        </Routes>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
