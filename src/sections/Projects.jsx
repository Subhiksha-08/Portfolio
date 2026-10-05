"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    num: "01",
    id: "COMM-MATLAB",
    title: "Digital Modulation & Demodulation Simulation System",
    date: "Mar 2026 – Apr 2026",
    desc: "Simulated digital communication pipelines using ASK, PSK, and QAM modulation techniques in MATLAB. Built AWGN channel modeling and performed Bit Error Rate (BER) analysis under noise to verify signal reconstruction.",
    tech: ["MATLAB", "Digital Modulation", "AWGN Modeling", "BER Analysis"],
    details: [
      "Built complete communication chain: Signal Source, Modulator, Channel, Demodulator, and Decider.",
      "Calculated BER curves and matched them against theoretical limits to verify mathematical correctness.",
      "Implemented constellation diagram outputs for PSK/QAM to visualize phase and amplitude noise.",
    ],
  },
  {
    num: "02",
    id: "RF-HFSS",
    title: "Microstrip Patch Antenna Design & 3D Simulation",
    date: "Dec 2025 – Jan 2026",
    desc: "Designed and simulated a compact microstrip antenna using 3D electromagnetic field modeling in Ansys HFSS. Analyzed return loss, radiation bandwidth, 3D gain patterns, and impedance matching.",
    tech: ["Ansys HFSS", "3D RF Simulation", "S11 Analysis", "Antenna Gain"],
    details: [
      "Designed patch geometry for optimal S11 parameters (return loss < -10 dB) at operating resonant frequencies.",
      "Configured microstrip feed line impedance match to minimize reflections and maximize power transfer.",
      "Generated 2D and 3D polar radiation plots to visualize antenna directivity and gain.",
    ],
  },
  {
    num: "03",
    id: "DSP-ASTRO",
    title: "Astronomical Signal Processing & Filtering",
    date: "Sep 2024 – Oct 2024",
    desc: "Processed sonified astronomical radio frequency signals in MATLAB. Implemented digital FIR/IIR filters for background noise reduction and performed Fast Fourier Transform (FFT) spectrogram frequency analysis.",
    tech: ["MATLAB", "FFT Spectrogram", "FIR/IIR Filtering", "Signal Recovery"],
    details: [
      "Imported raw space audio telemetry signals and converted them into time-frequency arrays.",
      "Designed custom bandpass Chebyshev and Butterworth filters to suppress high-frequency stellar background noise.",
      "Extracted distinct periodic solar radio emissions using FFT peak-finding and spectrogram analysis.",
    ],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Giant Section Header (Contact Style) */}
        <div className="section-header-overhaul">
          <div className="section-signal-pill">05 // SYSTEM HARNESS</div>
          <h2 className="section-giant-title">
            FEATURED <span className="text-outline-secondary">PROJECTS.</span>
          </h2>
        </div>

        {/* Datasheet Spec Layout (Full width, cardless) */}
        <motion.div 
          className="projects-datasheet-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.num} 
              className="projects-datasheet-item"
              variants={itemVariants}
            >
              {/* Corner Node Junctions */}
              <div className="schematic-node node-tl" />
              <div className="schematic-node node-tr" />
              <div className="schematic-node node-bl" />
              <div className="schematic-node node-br" />

              {/* 1. Sequence and Tech Index */}
              <div className="project-index-col">
                <span className="project-huge-num text-outline-secondary">{project.num}</span>
                <span className="project-code-tag">{project.id} // SYS</span>
              </div>

              {/* 2. Main Title and Tech Stack */}
              <div className="project-title-col">
                <div className="project-meta-row">
                  <span className="project-date-badge">{project.date}</span>
                </div>
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-summary-desc">{project.desc}</p>
                <div className="tech-tags" style={{ marginTop: "16px" }}>
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Detailed Accomplishments List */}
              <div className="project-details-col">
                <span className="details-header-tag">SYSTEM EXECUTION PATH</span>
                <ul className="project-bullet-list">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>
                      <ArrowRight className="bullet-wire-icon" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
