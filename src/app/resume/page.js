"use client";

import { Printer, ArrowLeft, Mail, Phone, Globe } from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";
import Link from "next/link";
import "./resume.css";

export default function ResumePage() {
  return (
    <div className="resume-page-wrapper">
      {/* Toolbar Actions */}
      <div className="resume-toolbar no-print">
        <Link href="/" className="btn btn-secondary">
          <ArrowLeft className="toolbar-icon" />
          <span>Back to Home</span>
        </Link>
        <button onClick={() => window.print()} className="btn btn-primary">
          <Printer className="toolbar-icon" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Official Resume Document Paper */}
      <article className="resume-paper">
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">Subhiksha S S</h1>
          <div className="resume-contact-bar">
            <span>
              <Phone className="contact-icon" style={{ width: 14, height: 14 }} />
              +91 6380797851
            </span>
            <span className="divider">|</span>
            <a href="mailto:subhisenthilkumar73@gmail.com">
              <Mail className="contact-icon" style={{ width: 14, height: 14 }} />
              subhisenthilkumar73@gmail.com
            </a>
            <span className="divider">|</span>
            <a href="https://github.com/Subhiksha-08" target="_blank" rel="noopener noreferrer">
              <Github className="contact-icon" style={{ width: 14, height: 14 }} />
              GitHub
            </a>
            <span className="divider">|</span>
            <a href="https://www.linkedin.com/in/subhiksha-senthil-kumar-1a9770356/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="contact-icon" style={{ width: 14, height: 14 }} />
              LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Summary</h2>
          <p className="resume-p">
            ECE student with a strong foundation in communication systems, signal processing, and RF engineering. Experienced in RF simulation and front-end design using Ansys HFSS, along with embedded systems and programming in C and Python. Interested in analyzing and developing efficient communication systems, with a focus on practical RF applications.
          </p>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Education</h2>
          
          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">B.E Electronics and Communication Engineering</span>
              <span className="resume-item-date">2023 – Present</span>
            </div>
            <div className="resume-row">
              <span className="resume-item-sub">Kongu Engineering College (CGPA: 8.63/10)</span>
              <span className="resume-item-sub">Perundurai, Tamil Nadu</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">HSC (Higher Secondary Certificate)</span>
              <span className="resume-item-date">2022 – 2023</span>
            </div>
            <div className="resume-row">
              <span className="resume-item-sub">Vivekananda Vidyalaya Matric Hr. Sec. School (89%)</span>
              <span className="resume-item-sub">Tiruppur, Tamil Nadu</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Experience</h2>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">National Institute of Technology, Trichy — Embedded Internship</span>
              <span className="resume-item-date">Jun 2025 – Jul 2025</span>
            </div>
            <ul className="resume-bullets">
              <li>Completed a 2-week internship at NIT Tiruchirappalli in the Department of Electrical and Electronics Engineering. Worked on the project <strong>&quot;Design and Implementation of a Multi-Sensor Environment Monitoring and Object Detection System Using ESP32.&quot;</strong></li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">Enthu Technology Solutions India Pvt Ltd — PCB Internship</span>
              <span className="resume-item-date">Feb 2025 – Mar 2025</span>
            </div>
            <ul className="resume-bullets">
              <li>Completed an intensive internship on PCB Design and Fabrication at Enthu Technology Solutions India Pvt. Ltd., gaining hands-on experience in printed circuit board layout, design principles, schematic routing, and manufacturing processes.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Projects</h2>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">Digital Modulation & Demodulation System | MATLAB</span>
              <span className="resume-item-date">Mar 2026 – Apr 2026</span>
            </div>
            <ul className="resume-bullets">
              <li>Developed and simulated digital communication systems using ASK, PSK, and QAM modulation techniques in MATLAB. Implemented AWGN channel modeling and performed Bit Error Rate (BER) analysis to evaluate system performance under noise. Demonstrated signal reconstruction and comparative analysis of modulation schemes using frequency-domain and statistical methods.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">Microstrip Patch Antenna Design and Analysis using Ansys HFSS</span>
              <span className="resume-item-date">Dec 2025 – Jan 2026</span>
            </div>
            <ul className="resume-bullets">
              <li>Designed and simulated a microstrip antenna using Ansys HFSS. Analyzed return loss (S11), bandwidth, 3D radiation pattern, and antenna gain for optimal performance.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-row">
              <span className="resume-item-title">Astronomical Signal Processing | MATLAB</span>
              <span className="resume-item-date">Sep 2024 – Oct 2024</span>
            </div>
            <ul className="resume-bullets">
              <li>Processed and analyzed sonified astronomical data using MATLAB, involving signal acquisition, digital filtering, and frequency-domain analysis. Designed and implemented digital FIR/IIR filters for noise reduction and signal enhancement, incorporating sampling and FFT spectrogram techniques.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2 className="resume-sec-title">Technical Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skills-label">Languages:</div>
            <div className="resume-skills-val">Tamil, English, Hindi, German</div>

            <div className="resume-skills-label">Core Areas:</div>
            <div className="resume-skills-val">Digital Signal Processing (DSP), Communication Systems, RF Front-End Design</div>

            <div className="resume-skills-label">Tools & Tech:</div>
            <div className="resume-skills-val">MATLAB, Cadence, EAGLE, Proteus, Ansys (HFSS)</div>

            <div className="resume-skills-label">Programming:</div>
            <div className="resume-skills-val">C, Python</div>
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
          <h2 className="resume-sec-title">Certifications</h2>
          <ul className="resume-bullets">
            <li>BA Hindi Degree</li>
            <li>Cryogenic Temperature Sensor Workshop — Sri Ramakrishna Engineering College</li>
            <li>Vision Workshop — GCT, Coimbatore</li>
            <li>Solar Radio & Physics Workshop — Kodaikanal Solar Observatory</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
