"use client";

import { useState } from "react";
import { Radio, Cpu, Binary, ArrowRight } from "lucide-react";
import "./AccordionGallery.css";

const projects = [
  {
    id: 1,
    title: "Digital Modulation & Demodulation Simulation System",
    date: "Mar 2026 – Apr 2026",
    desc: "Simulated digital communication pipelines using ASK, PSK, and QAM modulation techniques in MATLAB. Built AWGN channel modeling and performed Bit Error Rate (BER) analysis under noise to verify signal reconstruction.",
    tech: ["MATLAB", "Digital Modulation", "AWGN Modeling", "BER Analysis"],
    icon: Radio,
    details: [
      "Built complete communication chain: Signal Source, Modulator, Channel, Demodulator, and Decider.",
      "Calculated BER curves and matched them against theoretical limits to verify mathematical correctness.",
      "Implemented constellation diagram outputs for PSK/QAM to visualize phase and amplitude noise.",
    ],
  },
  {
    id: 2,
    title: "Microstrip Patch Antenna Design & 3D Simulation",
    date: "Dec 2025 – Jan 2026",
    desc: "Designed and simulated a compact microstrip antenna using 3D electromagnetic field modeling in Ansys HFSS. Analyzed return loss, radiation bandwidth, 3D gain patterns, and impedance matching.",
    tech: ["Ansys HFSS", "3D RF Simulation", "S11 Analysis", "Antenna Gain"],
    icon: Cpu,
    details: [
      "Designed patch geometry for optimal S11 parameters (return loss < -10 dB) at operating resonant frequencies.",
      "Configured microstrip feed line impedance match to minimize reflections and maximize power transfer.",
      "Generated 2D and 3D polar radiation plots to visualize antenna directivity and gain.",
    ],
  },
  {
    id: 3,
    title: "Astronomical Signal Processing & Filtering",
    date: "Sep 2024 – Oct 2024",
    desc: "Processed sonified astronomical radio frequency signals in MATLAB. Implemented digital FIR/IIR filters for background noise reduction and performed Fast Fourier Transform (FFT) spectrogram frequency analysis.",
    tech: ["MATLAB", "FFT Spectrogram", "FIR/IIR Filtering", "Signal Recovery"],
    icon: Binary,
    details: [
      "Imported raw space audio telemetry signals and converted them into time-frequency arrays.",
      "Designed custom bandpass Chebyshev and Butterworth filters to suppress high-frequency stellar background noise.",
      "Extracted distinct periodic solar radio emissions using FFT peak-finding and spectrogram analysis.",
    ],
  },
];

export default function AccordionGallery() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="accordion-wrapper">
      {projects.map((project) => {
        const IconComponent = project.icon;
        const isActive = project.id === activeId;

        return (
          <div
            key={project.id}
            className={`accordion-panel ${isActive ? "active" : ""}`}
            onClick={() => setActiveId(project.id)}
          >
            {/* Header / Summary when collapsed */}
            <div className="panel-collapsed-header">
              <div className="panel-collapsed-number">0{project.id}</div>
              <div className="panel-collapsed-title">{project.title}</div>
            </div>

            {/* Content when active */}
            <div className="panel-expanded-content">
              <div className="panel-meta-row">
                <span className="panel-number">0{project.id}</span>
                <span className="panel-date">{project.date}</span>
              </div>

              <div className="panel-heading-row">
                <div className="panel-icon-box">
                  <IconComponent className="panel-icon" />
                </div>
                <h3>{project.title}</h3>
              </div>

              <p className="panel-desc">{project.desc}</p>

              <div className="panel-details">
                <h4>Key Implementation Details</h4>
                <ul>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>
                      <ArrowRight className="bullet-arrow" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-tech-tags">
                {project.tech.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
