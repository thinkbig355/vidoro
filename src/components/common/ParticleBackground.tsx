import React from 'react';
import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("ParticleBackground mounted"); // Debug log
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("No canvas element found"); // Debug log
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log("No canvas context found"); // Debug log
      return;
    }

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        console.log("Canvas resized to:", canvas.width, canvas.height); // Debug log
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
        ctx.fill();
      });

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`;
          }
        }
      }
      ctx.stroke();
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
      console.log("ParticleBackground cleanup"); // Debug log
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground; 