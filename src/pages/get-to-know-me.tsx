import React from "react";

const AboutMe: React.FC = () => {
  return (
    <main style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1>Get to Know Me</h1>
      <section>
        <h2>Hi, I'm [Your Name]</h2>
        <p>
          Welcome to my portfolio! I'm a passionate developer with experience in building web applications using modern technologies like React, TypeScript, and more.
        </p>
        <p>
          I enjoy solving problems, learning new things, and collaborating with others to create impactful software. In my free time, I love exploring new tech, reading, and working on personal projects.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>React & TypeScript</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <p>
          Feel free to reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
      </section>
    </main>
  );
};

export default AboutMe;
