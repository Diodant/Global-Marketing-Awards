import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import WinnersPage from './components/WinnersPage';
import JuryPage from './components/JuryPage';
import GalleryPage from './components/GalleryPage';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import ApplicationForm from './components/ApplicationForm';
import ContactPage from './components/ContactPage.jsx';
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
          <Route path="/judges" element={<JuryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/form" element={<ApplicationForm />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
