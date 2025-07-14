import './App.css';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const resumeUrl = '/resume.pdf';

function Navbar() {
  const [open, setOpen] = useState(false);
  // Close menu on navigation
  const handleNavClick = () => setOpen(false);
  return (
    <nav className="navbar">
      {open && <div className="navbar-overlay open" onClick={() => setOpen(false)}></div>}
      <button className="navbar-toggle" aria-label="Toggle navigation" onClick={() => setOpen(o => !o)}>
        &#9776;
      </button>
      <ul className={`navbar-list${open ? ' open' : ''}`}>
        <li><a href="#career-objective" onClick={handleNavClick}>Career Objective</a></li>
        <li><a href="#education" onClick={handleNavClick}>Education</a></li>
        <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#internships" onClick={handleNavClick}>Internships</a></li>
        <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" data-aos="fade-down">
      <div className="hero-content">
        <h1>MANIDEEP DANDAPANTHULA</h1>
        <h2>MERN Stack Developer</h2>
        <p>Email: dandapanthulamanideep@gmail.com<br />
        GitHub: <a href="https://github.com/ManideepDandapanthula" target="_blank" rel="noopener noreferrer">https://github.com/ManideepDandapanthula</a></p>
        <div className="hero-btns">
          <a href={resumeUrl} className="btn accent" download>Download Resume</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

function CareerObjective() {
  return (
    <section className="about section" id="career-objective" data-aos="fade-up">
      <div className="about-inner">
        {/* Profile photo removed */}
        <div className="about-text">
          <h2>Career Objective</h2>
          <p>Aspiring Software Developer with a strong foundation in Data Structures and Algorithms and hands-on experience in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about building efficient, scalable, and secure web applications. Eager to contribute to dynamic tech teams, continuously learn, and solve real-world problems through clean and optimized code.</p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education" data-aos="fade-up">
      <h2>Education</h2>
      <ul>
        <li><b>BTech CSE (IoT)</b> | Kakatiya Institute of Technology and Science | <b>CGPA-7.4</b> | 2022-2026</li>
        <li><b>HSC(12th)</b> | Value Oak college | <b>Percentage: 95</b> | 2020-2022</li>
        <li><b>SSC (10th)</b> | SR Prime School | <b>Percentage: 75</b> | 2020</li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <ul>
        <li><b>Programming languages</b>- C, C++, JavaScript (JS), CSS, HTML.</li>
        <li><b>Concepts</b>- DSA(Data Structures and Algorithms)</li>
        <li><b>Frameworks</b>- React, Express</li>
        <li><b>Web Development</b>: RESTful API, JWT Authentication</li>
        <li><b>Database</b>- MongoDB, Mysql</li>
        <li><b>Other skills</b>- Problem-Solving, Teamwork, Communication</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section" id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card" data-aos="zoom-in-up">
          <div className="project-info">
            <h3>Habit Tracker | <a href="https://github.com/ManideepDandapanthula/Habit-Tracker" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
            <p>Habit Tracker – A habit tracking platform with daily progress, streak visualization, and intuitive UI. Built with React, MongoDB, and Tailwind CSS for a clean, responsive experience.</p>
          </div>
        </div>
        <div className="project-card" data-aos="zoom-in-up">
          <div className="project-info">
            <h3>Favicon Generator | <a href="https://github.com/ManideepDandapanthula/Favicon-generator" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
            <p>Developed a web platform for generating custom favicons with personalized text, fonts, colors, and sizes. Features OAuth login, real-time preview, and .ico download support.<br /><b>Tech Stack:</b> React, Vite, custom CSS, .ico generation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Internships() {
  return (
    <section className="experience section" id="internships" data-aos="fade-up">
      <h2>Internships</h2>
      <div className="exp-timeline">
        <div className="exp-card" data-aos="fade-right">
          <div className="exp-header">
            <h3>Full Stack Intern</h3>
            <span className="exp-company">@ Innovate Intern</span>
            <span className="exp-date">June 2024 – Sept 2024</span>
          </div>
          <p><b>Project: WebHostManager</b><br />Built a scalable web hosting client management system using the MERN stack. Implemented secure authentication, responsive UI, and efficient MongoDB integration for smooth data handling.</p>
        </div>
        <div className="exp-card" data-aos="fade-right">
          <div className="exp-header">
            <h3>Backend Intern</h3>
            <span className="exp-company">@ CourseVita</span>
            <span className="exp-date">23-Jun-2025 – Ongoing</span>
          </div>
          <p><b>Project: Book Your Nearest Videographer</b><br />Contributing to the backend development of a videographer booking platform. Responsible for building APIs, managing database integration, and ensuring smooth server-side operations as part of a collaborative team.</p>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section" id="certifications" data-aos="fade-up">
      <h2>Certifications</h2>
      <ul className="cert-list">
        <li>CISCO | Introduction to Cyber Security <a className="cert-link btn accent" href="https://drive.google.com/file/d/1ip6QPj4x2ld-G8iYx8nuPLtSlO4HdY1t/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a></li>
        <li>CISCO | Introduction to Packet Tracer <a className="cert-link btn accent" href="https://drive.google.com/file/d/1_uQI40pLi9M5HZlJnXWI99SJ45QU2ei8/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a></li>
        <li>CISCO | Cybersecurity Essentials <a className="cert-link btn accent" href="https://drive.google.com/file/d/1NJGQUh34dRn9OFLk9ZkYyuHUSUGv6Q4V/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a></li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <div className="contact-actions">
        <a
          href="mailto:dandapanthulamanideep@gmail.com"
          className="btn accent"
        >
          Email - dandapanthulamanideep@gmail.com
        </a>
        <a
          href="https://github.com/ManideepDandapanthula"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
      </div>
      <div className="contact-socials">
        <a href="mailto:dandapanthulamanideep@gmail.com" title="Email"><FaEnvelope /></a>
        <a href="https://github.com/ManideepDandapanthula" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        {/* Use a valid placeholder for LinkedIn or remove if not needed */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="App dark-bg">
      <Navbar />
      <Hero />
      <CareerObjective />
      <Education />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Contact />
      <footer className="footer">&copy; {new Date().getFullYear()} Manideep Dandapanthula</footer>
    </div>
  );
}

export default App;
