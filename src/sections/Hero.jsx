"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import "./sections.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-intro-tag" variants={itemVariants}>
            Engineering Portfolio
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Subhi Senthilkumar
          </motion.h1>

          <motion.div className="hero-subtitles" variants={itemVariants}>
            <span className="subtitle-primary">
              Electronics & Communication Engineering Student
            </span>
            <span className="subtitle-divider">|</span>
            <span className="subtitle-secondary">
              Communications & Networking Enthusiast
            </span>
          </motion.div>

          <motion.p className="hero-desc" variants={itemVariants}>
            I am an Electronics and Communication Engineering student at{" "}
            <strong>Kongu Engineering College</strong> (CGPA:{" "}
            <strong>8.63 / 10</strong>) based in Tamil Nadu, India. I am
            passionate about communication systems, RF circuit design, digital
            signal processing, embedded systems, and intelligent technologies. I
            enjoy exploring the intersection of electronics, hardware engineering,
            and real-world communication applications.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn btn-primary"
            >
              <span>View Projects</span>
              <ArrowRight className="hero-btn-icon" />
            </a>

            <Link href="/resume" className="btn btn-secondary">
              <FileText className="hero-btn-icon" />
              <span>Resume</span>
            </Link>

            <div className="hero-social-divider" />

            <a
              href="https://www.linkedin.com/in/subhiksha-senthil-kumar-1a9770356/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn"
            >
              <Linkedin className="social-btn-icon" />
            </a>

            <a
              href="https://github.com/Subhiksha-08"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub"
            >
              <Github className="social-btn-icon" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-frame">
            <Image
              src="/profile.jpg"
              alt="Subhiksha S S (Subhi)"
              width={320}
              height={400}
              priority
              className="hero-image"
            />
            <div className="frame-border-accent" />
            <div className="frame-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
