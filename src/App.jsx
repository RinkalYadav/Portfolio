import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing the components for each section
import Contact from "./Contact";
import Internship from "./Internship";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
import Certifications from "./Certifications";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              My Portfolio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/internship">
                    Internship
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/certification">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* React Router - Dynamic Routes for each section */}
      <Routes>
        <Route path="/" element={
          <div className="text-center mt-5">
            {/* This content only shows on the homepage */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <img
                    src="image/Rinkal.jpg"
                    alt="Rinkal"
                    className="rounded-circle img-fluid"
                    width="300"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h1>Hi, I'm Rinkal!</h1>
                <h1>Welcome to My Portfolio!</h1>
              </div>
            </div>
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/certification" element={<Certifications />} />
      </Routes>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <p>&copy; 2025 Rinkal Yadav</p>
      </footer>
    </Router>
  );
}

export default App;
