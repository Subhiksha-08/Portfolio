"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Grid details
    let columns = 0;
    let rows = 0;
    let gridPoints = [];
    const spacing = 65; // Grid spacing in pixels
    
    // Floating particles
    const particles = [];
    const numParticles = 30;

    const mouse = { x: null, y: null, px: null, py: null, vx: 0, vy: 0 };

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.ceil(canvas.width / spacing) + 1;
      rows = Math.ceil(canvas.height / spacing) + 1;
      gridPoints = [];

      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const ox = c * spacing - spacing / 2;
          const oy = r * spacing - spacing / 2;
          gridPoints.push({
            x: ox,
            y: oy,
            ox: ox,
            oy: oy,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    // Initialize floating background dots
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    initGrid();
    initParticles();

    const handleResize = () => {
      initGrid();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (mouse.x !== null) {
        mouse.px = mouse.x;
        mouse.py = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
      } else {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.px = mouse.x;
        mouse.py = mouse.y;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const spring = 0.035; // Spring force
    const damping = 0.88; // Friction factor
    const repulsionRadius = 160; // Influence radius around mouse
    const repulsionStrength = 240; // Push force

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw solid dark background
      ctx.fillStyle = "#0c0c0b";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw soft ambient radial gold spotlight under the cursor
      if (mouse.x !== null) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          300
        );
        mouseGlow.addColorStop(0, "rgba(209, 161, 83, 0.07)");
        mouseGlow.addColorStop(1, "rgba(12, 12, 11, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // 3. Update Grid Physics
      gridPoints.forEach((p) => {
        // Return-to-home spring physics
        p.vx += (p.ox - p.x) * spring;
        p.vy += (p.oy - p.y) * spring;

        // Repel from mouse cursor
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulsionRadius) {
            // Calculate direction and strength
            const force = (repulsionRadius - dist) / repulsionRadius;
            const push = force * force * repulsionStrength;
            
            // Normalize direction
            const angle = Math.atan2(dy, dx);
            
            // Add mouse velocity influence slightly
            const mSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
            const dynamicStrength = 1 + Math.min(mSpeed * 0.08, 1.5);
            
            p.vx += Math.cos(angle) * push * 0.05 * dynamicStrength;
            p.vy += Math.sin(angle) * push * 0.05 * dynamicStrength;
          }
        }

        // Apply friction and update position
        p.vx *= damping;
        p.vy *= damping;
        p.x += p.vx;
        p.y += p.vy;
      });

      // Dampen mouse velocity
      mouse.vx *= 0.9;
      mouse.vy *= 0.9;

      // 4. Draw Grid Mesh Lines
      ctx.strokeStyle = "rgba(209, 161, 83, 0.04)";
      ctx.lineWidth = 0.5;

      // Draw horizontal & vertical grid lines by linking indexes
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const currIdx = c * rows + r;
          const rightIdx = (c + 1) * rows + r;
          const downIdx = c * rows + (r + 1);

          // Horizontal wire connection
          if (c < columns - 1) {
            ctx.beginPath();
            ctx.moveTo(gridPoints[currIdx].x, gridPoints[currIdx].y);
            ctx.lineTo(gridPoints[rightIdx].x, gridPoints[rightIdx].y);
            ctx.stroke();
          }

          // Vertical wire connection
          if (r < rows - 1) {
            ctx.beginPath();
            ctx.moveTo(gridPoints[currIdx].x, gridPoints[currIdx].y);
            ctx.lineTo(gridPoints[downIdx].x, gridPoints[downIdx].y);
            ctx.stroke();
          }
        }
      }

      // 5. Draw grid intersections (micro-nodes)
      gridPoints.forEach((p) => {
        const dx = p.x - p.ox;
        const dy = p.y - p.oy;
        const offset = Math.sqrt(dx * dx + dy * dy);

        // Highlight nodes that are wiggling/active
        if (offset > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 0.8 + Math.min(offset * 0.05, 0.8), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(209, 161, 83, ${Math.min(0.1 + offset * 0.02, 0.3)})`;
          ctx.fill();
        }
      });

      // 6. Draw drifting particles in the background
      particles.forEach((part) => {
        part.x += part.vx;
        part.y += part.vy;

        // Wrap around boundaries
        if (part.x < 0) part.x = canvas.width;
        if (part.x > canvas.width) part.x = 0;
        if (part.y < 0) part.y = canvas.height;
        if (part.y > canvas.height) part.y = 0;

        // Apply slight pull if close to cursor
        if (mouse.x !== null) {
          const dx = part.x - mouse.x;
          const dy = part.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            part.x -= dx * 0.002;
            part.y -= dy * 0.002;
          }
        }

        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(209, 161, 83, 0.15)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "#0c0c0b",
      }}
    />
  );
}
