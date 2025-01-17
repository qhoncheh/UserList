import React from "react";
import "../../style/resume.scss";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <header className="resume__header">
        <h1 className="resume__name">Ghoncheh Ataee</h1>
        <p className="resume__title">
          Front-End Developer | React | JavaScript | TypeScript
        </p>
        <div className="resume__contact">
          <p>📞 989359312592</p>
          <p>
            📧{" "}
            <a href="mailto:ghonche.ataee@gmail.com">ghonche.ataee@gmail.com</a>
          </p>
          <p>
            🌐{" "}
            <a href="https://www.linkedin.com/in/ghonche-ataei" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      <section className="resume__section">
        <h2 className="resume__section-title">Summary</h2>
        <p>
          A front-end developer with 3 years of experience in building and
          maintaining high-quality web applications using React and JavaScript.
          Key achievements include a 40% reduction in future development time
          through maintainable component creation and a 10% boost in customer
          engagement via the successful migration of a multi-page user
          experience into a single-page app.
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Experience</h2>
        <div className="resume__job">
          <h3>Front-End Developer</h3>
          <p className="resume__job-details">
            Sepehr Academy | 07/2023 – 11/2024 | Sari, Mazandaran, Iran
          </p>
          <ul>
            <li>
              Proficient in front-end web development using Material UI,
              Bootstrap, SCSS, and Tailwind CSS
            </li>
            <li>
              Migrated multi-page user experience into a single-page app,
              improving customer engagement by 10%
            </li>
            <li>
              Developed reusable UI components to improve development efficiency
              by 40%
            </li>
          </ul>
        </div>
        <div className="resume__job">
          <h3>Front-End Developer</h3>
          <p className="resume__job-details">
            Apanco | 12/2021 – 07/2023 | Sari, Mazandaran, Iran
          </p>
          <ul>
            <li>
              Developed and designed user interface using HTML5, CSS3, and
              JavaScript
            </li>
            <li>Designed and implemented the Admin Panel</li>
            <li>Implemented event handling using jQuery functionality</li>
          </ul>
        </div>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Projects</h2>
        <ul>
          <li>
            <strong>CMS Admin Panel:</strong> Reduced task completion time by
            50%.
            <a
              href="https://github.com/qhoncheh/React-Deluxe-AdminPanel"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <strong>Web Application:</strong> Updated website content and
            resolved technical issues.
            <a href="https://github.com/qhoncheh/React-Deluxe" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <strong>3D Web Application:</strong> Optimized 3D models for better
            web performance.
            <a
              href="https://github.com/qhoncheh/Apple-3DwebApp"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Education</h2>
        <p>
          Bachelor of Computer Engineering - Mazandaran University of Science
          and Technology (2019)
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__section-title">Skills</h2>
        <p>
          React.js, JavaScript, TypeScript, SCSS, Material UI, Tailwind CSS,
          RESTful APIs, GitHub, Three.js, and more.
        </p>
      </section>
    </div>
  );
};

export { Resume };
