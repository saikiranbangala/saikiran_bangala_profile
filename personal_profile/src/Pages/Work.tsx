import React from "react";
import "./Experience3D.css";

const Experience3D = () => {
  const experiences = [
    {
      year: "2024",
      role: "Software Engineer",
      company: "Energytic Info solution pvt ltd",
    },
    {
      year: "2021-2024",
      role: "Trainee Software Engineer",
      company: "Tech O2 Pvt Ltd",
    },
  ];

  const icons = [
    { id: 1, label: "JS", class: "js-icon" },
    { id: 2, label: "TS", class: "ts-icon" },
    { id: 3, label: "React", class: "react-icon" },
    { id: 4, label: "Node.js", class: "node-icon" },
    { id: 5, label: "MongoDB", class: "mongo-icon" },
    { id: 6, label: "HTML5", class: "html-icon" },
    { id: 7, label: "CSS3", class: "css-icon" },
    { id: 8, label: "Git", class: "git-icon" },
  ];

  return (
    <div className="experience-container">
      <div className="row">
        {/* Floating 3D Icons */}
        <div className="col-6 globe">
          <div className="icons-floating">
            {icons.map((icon) => (
              <div key={icon.id} className={`icon ${icon.class}`}>
                {icon.label}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="col-6">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="year">{exp.year}</div>
                <div className="details">
                  <div className="role">{exp.role}</div>
                  <div className="company">{exp.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">©2024 Saikiran</footer>
    </div>
  );
};

export default Experience3D;
