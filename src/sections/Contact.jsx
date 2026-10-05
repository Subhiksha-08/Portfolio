"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";
import "./Contact.css";

export default function Contact() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <>
      <section id="contact" className="section-wrapper contact-section-overhaul">
        <div className="container">
          <div className="contact-layout">
            
            {/* Header Call To Action */}
            <motion.div 
              className="contact-header-cta"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="contact-signal-pill">CHANNEL INGRESS // CONTACT</div>
              <h2 className="contact-giant-title">
                LET&apos;S <span className="text-outline-secondary">TRANSMIT.</span>
              </h2>
              <p className="contact-subtext">
                Whether you have an inquiry about RF modeling, antenna simulation, embedded firmware, 
                or seek an engineering intern — let&apos;s start a connection.
              </p>
            </motion.div>

            {/* Sliding Link Banner Rows */}
            <div className="contact-banners-list">
              {/* Email Banner */}
              <div className="contact-banner-item-wrap">
                <motion.div 
                  className="banner-top-line" 
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <a href="mailto:subhisenthilkumar73@gmail.com" className="contact-banner-link">
                  <div className="banner-label-group">
                    <span className="banner-index">01 // EMAIL</span>
                    <span className="banner-address">subhisenthilkumar73@gmail.com</span>
                  </div>
                  <div className="banner-action-icon">
                    <ArrowUpRight className="banner-arrow" />
                  </div>
                </a>
              </div>

              {/* Phone Banner */}
              <div className="contact-banner-item-wrap">
                <motion.div 
                  className="banner-top-line" 
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <a href="tel:+916380797851" className="contact-banner-link">
                  <div className="banner-label-group">
                    <span className="banner-index">02 // MOBILE</span>
                    <span className="banner-address">+91 6380797851</span>
                  </div>
                  <div className="banner-action-icon">
                    <ArrowUpRight className="banner-arrow" />
                  </div>
                </a>
                <motion.div 
                  className="banner-bottom-line" 
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Schematic Footer */}
      <footer className="schematic-footer">
        <div className="container footer-schematic-container">
          <div className="footer-schematic-left">
            <span className="footer-signal-pulse" />
            <span className="footer-copyright">
              SUBHIKSHA S S • © 2026. ALL RIGHTS TRANSMITTED.
            </span>
          </div>

          <div className="footer-schematic-right">
            <a
              href="https://www.linkedin.com/in/subhiksha-senthil-kumar-1a9770356/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-schematic-social"
              aria-label="LinkedIn"
            >
              <Linkedin className="footer-icon-svg" />
            </a>
            <a
              href="https://github.com/Subhiksha-08"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-schematic-social"
              aria-label="GitHub"
            >
              <Github className="footer-icon-svg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
