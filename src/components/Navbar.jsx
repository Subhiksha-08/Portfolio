"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 50);

      // Section tracking
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      let currentSectionId = "home";
      sections.forEach((section) => {
        if (!section) return;
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          currentSectionId = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = targetElement.offsetTop - 90;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="navbar-logo">
          SS
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-desktop-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`navbar-link ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="navbar-active-dot" />
              )}
            </a>
          ))}
          <Link href="/resume" className="navbar-resume-btn">
            Resume
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="navbar-ham-icon" /> : <Menu className="navbar-ham-icon" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`navbar-mobile-drawer ${isOpen ? "open" : ""}`}>
        <nav className="navbar-mobile-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`navbar-mobile-link ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link href="/resume" onClick={() => setIsOpen(false)} className="navbar-mobile-resume-btn">
            View Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
