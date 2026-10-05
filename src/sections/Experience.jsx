"use client";

import { motion } from "framer-motion";
import "./sections.css";

const experiences = [
  {
    title: "Embedded Systems Intern",
    company: "National Institute of Technology (NIT), Trichy",
    date: "Jun 2025 – Jul 2025",
    desc: "Worked in the Department of Electrical and Electronics Engineering on the design and implementation of a 'Multi-Sensor Environment Monitoring and Object Detection System Using ESP32'. Configured environment parameters logging, threshold response systems, and peripheral hardware driver programming in Embedded C.",
    tags: ["ESP32", "Embedded C", "Sensor Interfacing", "NIT Trichy"],
  },
  {
    title: "PCB Design & Fabrication Intern",
    company: "Enthu Technology Solutions India Pvt Ltd",
    date: "Feb 2025 – Mar 2025",
    desc: "Completed an intensive internship focusing on industrial PCB Design and Manufacturing. Gained practical experience in circuit schematic capture, component footprint alignment, double-layer copper trace routing, design rule checks (DRC), Gerber generation, and physical PCB etching.",
    tags: ["PCB Layout", "Schematic Design", "Gerber Verification", "Fabrication"],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Giant Section Header (Contact Style) */}
        <div className="section-header-overhaul">
          <div className="section-signal-pill">03 // PRACTICAL RUN</div>
          <h2 className="section-giant-title">
            PRACTICAL <span className="text-outline-secondary">EXPERIENCE.</span>
          </h2>
        </div>

        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <h3 className="timeline-title">
                    {exp.title} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>— {exp.company}</span>
                  </h3>
                  <span className="date-pill">{exp.date}</span>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="tech-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
