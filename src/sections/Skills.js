"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Network, Layout, Terminal, Globe } from "lucide-react";
import "./Skills.css";

const skillCells = [
  {
    id: "RF",
    title: "RF Front-End Design",
    items: [
      "Microstrip patch antenna modeling",
      "Return loss (S11) optimization",
      "Radiation pattern & gain analysis",
      "Ansys HFSS electromagnetic design",
    ],
    icon: Radio,
  },
  {
    id: "DSP",
    title: "Digital Signal Processing",
    items: [
      "FFT spectral analysis & filtering",
      "FIR/IIR digital filter designs",
      "ASK / PSK / QAM modulation",
      "MATLAB BER channel modeling",
    ],
    icon: Network,
  },
  {
    id: "EMB",
    title: "Embedded Systems & IoT",
    items: [
      "ESP32 hardware prototyping",
      "Sensor integration & telemetry",
      "Real-time data acquisition",
      "Embedded C firmware dev",
    ],
    icon: Cpu,
  },
  {
    id: "PCB",
    title: "PCB Layout & Fabrication",
    items: [
      "Schematic capture & trace routing",
      "DRC validation & footprint specs",
      "Gerber files & drill maps",
      "EAGLE and Proteus board layout",
    ],
    icon: Layout,
  },
  {
    id: "PROG",
    title: "Programming",
    items: [
      "C & Embedded C (Hardware dev)",
      "Python (Simulation & scripting)",
      "MATLAB (Numerical computations)",
      "Structured debugging & Git",
    ],
    icon: Terminal,
  },
  {
    id: "LANG",
    title: "Linguistic Abilities",
    items: [
      "English (Professional fluency)",
      "Tamil (Native proficiency)",
      "Hindi (BA Degree certified)",
      "German (Introductory / A1 level)",
    ],
    icon: Globe,
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Giant Section Header (Contact Style) */}
        <div className="section-header-overhaul">
          <div className="section-signal-pill">02 // SPECTRUM ALLOCATION</div>
          <h2 className="section-giant-title">
            SKILLS & <span className="text-outline-secondary">DOMAINS.</span>
          </h2>
        </div>

        {/* Cardless PCB Schematic Grid */}
        <motion.div 
          className="skills-schematic-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCells.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div 
                key={skill.id} 
                className="skills-schematic-cell"
                variants={cellVariants}
              >
                {/* Decorative Junction Terminals on Corners */}
                <div className="schematic-node node-tl" />
                <div className="schematic-node node-tr" />
                <div className="schematic-node node-bl" />
                <div className="schematic-node node-br" />

                <div className="cell-signal-tag">{skill.id} // CORE COMPONENT</div>
                
                <div className="cell-header">
                  <div className="cell-icon-terminal">
                    <IconComponent className="cell-icon" />
                    <div className="terminal-glow" />
                  </div>
                  <h3>{skill.title}</h3>
                </div>

                {/* Structured skills connection list */}
                <ul className="cell-skills-list">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-node" />
                      <span className="bullet-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
