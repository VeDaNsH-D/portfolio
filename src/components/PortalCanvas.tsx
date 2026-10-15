import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  angle: number;
  dist: number;
  angularSpeed: number;
  radialSpeed: number;
  life: number;
  maxLife: number;
  spark: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

export const PortalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Stars background
    const starCount = Math.min(120, Math.floor((width * height) / 12000));
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
    }));

    // Spark Particles
    const portalColors = [
      '#f59e0b', // amber
      '#fbbf24', // bright gold
      '#ef4444', // crimson
      '#8b5cf6', // purple
      '#06b6d4', // cyan
      '#ffffff', // bright white core
    ];

    const particleCount = prefersReducedMotion ? 40 : 160;
    const particles: Particle[] = [];

    const createParticle = (initialRadius?: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const baseDist = initialRadius ?? (Math.random() * 180 + 120);
      return {
        x: 0,
        y: 0,
        radius: Math.random() * 2 + 0.8,
        color: portalColors[Math.floor(Math.random() * portalColors.length)],
        angle,
        dist: baseDist,
        angularSpeed: (Math.random() * 0.03 + 0.015) * (Math.random() > 0.3 ? 1 : -1),
        radialSpeed: (Math.random() - 0.48) * 0.8,
        life: Math.random() * 100,
        maxLife: Math.random() * 100 + 80,
        spark: Math.random() > 0.4,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    // Render loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min(32, time - lastTime);
      lastTime = time;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Clear with slight trail for subtle motion blur
      ctx.fillStyle = 'rgba(3, 7, 18, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 0.9 || star.alpha < 0.2) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        }
        ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0.1, star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render Multiverse Nebula Glow around mouse / hero center
      const portalCenterY = height > 800 ? height * 0.38 : height * 0.45;
      const portalCenterX = width / 2;

      // Subtle gravitational pull toward portal center
      const centerX = portalCenterX + (mouseX - portalCenterX) * 0.15;
      const centerY = portalCenterY + (mouseY - portalCenterY) * 0.15;

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        30,
        centerX,
        centerY,
        width < 768 ? 260 : 380
      );
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.15)');
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.08)');
      gradient.addColorStop(0.7, 'rgba(234, 88, 12, 0.04)');
      gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, width < 768 ? 260 : 380, 0, Math.PI * 2);
      ctx.fill();

      // Render Portal Spark Ring
      const speedMultiplier = prefersReducedMotion ? 0.2 : 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.angularSpeed * speedMultiplier * (delta / 16);
        p.dist += p.radialSpeed * speedMultiplier * (delta / 16);
        p.life += delta / 16;

        if (p.life >= p.maxLife || p.dist < 30 || p.dist > Math.max(width, height) * 0.6) {
          particles[i] = createParticle();
          continue;
        }

        const px = centerX + Math.cos(p.angle) * p.dist;
        const py = centerY + Math.sin(p.angle) * (p.dist * 0.85); // slight elliptical perspective

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.85;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, alpha);

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra spark trail for Doctor Strange ring effect
        if (p.spark && !prefersReducedMotion) {
          const tailX = px - Math.cos(p.angle + Math.PI / 2) * (p.radius * 3.5);
          const tailY = py - Math.sin(p.angle + Math.PI / 2) * (p.radius * 3.5);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.radius * 0.6;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
