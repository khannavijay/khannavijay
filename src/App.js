import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Introduction from './components/introduction/Introduction';
import Works from './components/works/Works';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import BlogTemplate from './components/blog/BlogTemplate';
import Chatbot from './components/chatbot/Chatbot';
import { ThemeProvider } from './components/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Introduction />
                <Works />
                <Blogs />
                <Contact />
              </>
            } />
            <Route path="/blog/:id" element={<BlogTemplate />} />
          </Routes>
          <Chatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
