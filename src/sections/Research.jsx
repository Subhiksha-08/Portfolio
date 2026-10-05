"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import "./Research.css";

const researchProjects = [
  {
    num: "01",
    title: "Solar Radio & Astrophysics Training",
    institution: "Kodaikanal Solar Observatory",
    desc: "Participated in hands-on training sessions focusing on solar physics and radio telemetry receivers. Studied methods of cosmic radio signal reception, tracking stellar emissions, and techniques for suppressing background atmospheric noise.",
  },
  {
    num: "02",
    title: "Cryogenic Sensor Workshop",
    institution: "Sri Ramakrishna Engineering College",
    desc: "Completed specialized laboratory training on temperature sensor calibration under cryogenic gradients. Analyzed measurement accuracy, semiconductor sensor behaviour, and signal transmission reliability under extreme temperatures.",
  },
];

export default function Research() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="research" className="section-wrapper">
      <div className="container">
        {/* Giant Section Header (Contact Style) */}
        <div className="section-header-overhaul">
          <div className="section-signal-pill">04 // KNOWLEDGE GRADIENTS</div>
          <h2 className="section-giant-title">
            RESEARCH & <span className="text-outline-secondary">TRAINING.</span>
          </h2>
        </div>

        <motion.div 
          className="research-blueprint-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {researchProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="research-blueprint-item"
              variants={itemVariants}
            >
              {/* Left Column: Huge Outlined Number */}
              <div className="research-item-num-col">
                <span className="huge-num text-outline-secondary">{project.num}</span>
              </div>

              {/* Middle Column: Title & Institution */}
              <div className="research-item-title-col">
                <h3 className="research-item-title">{project.title}</h3>
                <span className="research-item-inst">{project.institution}</span>
              </div>

              {/* Right Column: Description */}
              <div className="research-item-desc-col">
                <p className="research-item-desc">{project.desc}</p>
              </div>

              {/* Wire Node Junction */}
              <div className="schematic-node research-wire-node" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
