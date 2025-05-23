import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Introduction from './components/introduction/Introduction';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import BlogPost from './components/blogs/BlogPost';
import { ThemeProvider } from './components/theme/ThemeContext';

// Update asset paths to use process.env.PUBLIC_URL
const publicUrl = process.env.PUBLIC_URL || '';

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
                <Testimonials />
                <Contact />
                <Blogs />
              </>
            } />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
