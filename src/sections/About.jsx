"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import "./About.css";

export default function About() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Giant Section Header (Contact Style) */}
        <div className="section-header-overhaul">
          <div className="section-signal-pill">01 // BIOGRAPHY INGRESS</div>
          <h2 className="section-giant-title">
            ABOUT <span className="text-outline-secondary">ME.</span>
          </h2>
        </div>

        <div className="about-split-layout">
          {/* Left Column: Biography Statement */}
          <motion.div
            className="about-bio-col"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="bio-lead-text">
              Engineering communication systems and hardware components from first principles.
            </div>
            <p className="bio-paragraph">
              I am an Electronics and Communication Engineering undergraduate student at{" "}
              <strong>Kongu Engineering College</strong> (CGPA: <strong>8.63/10</strong>) based in Tamil Nadu, India.
              My work spans high-frequency RF front-end design using <strong>Ansys HFSS</strong>, digital communications
              telemetry modeling in <strong>MATLAB</strong>, and embedded firmware programming using{" "}
              <strong>C, Embedded C, and Python</strong>.
            </p>
            <p className="bio-paragraph">
              I focus on the physical layers of networking, designing circuit schematics, routing dual-layer
              PCBs, and experimenting with microcontrollers like the ESP32. I aim to merge solid electromagnetics
              principles with modern embedded systems to construct efficient, low-noise communication links.
            </p>
          </motion.div>

          {/* Right Column: Wireframe Education */}
          <motion.div
            className="about-edu-col"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="edu-schematic-header">
              <Award className="edu-header-icon" />
              <span>ACADEMIC PATHWAY</span>
            </div>

            <div className="edu-wireframe-list">
              {/* Item 1 */}
              <div className="edu-wire-item">
                <div className="schematic-node node-left-junction" />
                <div className="edu-wire-meta">
                  <span className="edu-date">2023 — PRESENT</span>
                  <span className="edu-status">CGPA: 8.63 / 10</span>
                </div>
                <h3 className="edu-degree">B.E. Electronics & Communication Engineering</h3>
                <span className="edu-institution">Kongu Engineering College</span>
                <p className="edu-detail">
                  Focused on high-frequency communication architectures, digital signal processing, electromagnetic fields, and microcontrollers.
                </p>
              </div>

              {/* Item 2 */}
              <div className="edu-wire-item">
                <div className="schematic-node node-left-junction" />
                <div className="edu-wire-meta">
                  <span className="edu-date">2022 — 2023</span>
                  <span className="edu-status">SCORE: 89%</span>
                </div>
                <h3 className="edu-degree">Higher Secondary Certificate (HSC)</h3>
                <span className="edu-institution">Vivekananda Vidyalaya Matric Hr. Sec. School</span>
                <p className="edu-detail">
                  Concentrated studies in Advanced Mathematics, Physics, and Chemistry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
