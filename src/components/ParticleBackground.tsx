'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
  rotation: number;
  rotationSpeed: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  colorPalette?: string[];
  includeShapes?: boolean;
  interactive?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  colorPalette = ['#FFD700', '#FFA500', '#ffffff'],
  includeShapes = true,
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePressed, setMousePressed] = useState(false);
  const animationFrameId = useRef<number | null>(null);
  const time = useRef(0);

  // Initialize particles and set up the canvas
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });

        // Reset particles when dimensions change
        const newParticles = Array(particleCount).fill(0).map(() => createParticle(width, height, colorPalette, includeShapes));
        setParticles(newParticles);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particleCount, colorPalette, includeShapes]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0 || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const animate = () => {
      time.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background glow effects
      if (mousePosition && interactive) {
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, mousePressed ? 300 : 200
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${mousePressed ? 0.15 : 0.05})`);
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      const updatedParticles = particles.map(particle => {
        // Update position with slight wave effect
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Add gentle wave motion
        newY += Math.sin((newX / 100) + time.current) * 0.3;
        
        // Bounce off edges
        if (newX < 0 || newX > canvas.width) {
          particle.speedX *= -1;
          newX = particle.x + particle.speedX;
        }
        
        if (newY < 0 || newY > canvas.height) {
          particle.speedY *= -1;
          newY = particle.y + particle.speedY;
        }
        
        // React to mouse position
        if (mousePosition && interactive) {
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = mousePressed ? 200 : 150;
          
          if (distance < maxDistance) {
            // Effect radius increases when mouse is pressed
            const angle = Math.atan2(dy, dx);
            const force = (maxDistance - distance) / (mousePressed ? 3000 : 5000);
            const repelFactor = mousePressed ? 8 : 4;
            
            // Push particles away from cursor
            newX -= Math.cos(angle) * force * repelFactor;
            newY -= Math.sin(angle) * force * repelFactor;
            
            // Add slight acceleration when mouse is near
            if (mousePressed) {
              particle.speedX = particle.speedX * 1.01;
              particle.speedY = particle.speedY * 1.01;
            }
          }
        }
        
        // Update rotation for shapes
        const newRotation = particle.rotation + particle.rotationSpeed;
        
        // Draw the particle based on its shape
        ctx.save();
        ctx.translate(newX, newY);
        ctx.rotate(newRotation);
        
        const particleColor = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fillStyle = particleColor;
        
        drawParticleShape(ctx, particle.shape, particle.size);
        
        ctx.restore();
        
        // Draw connections between nearby particles
        particles.forEach(otherParticle => {
          const dx = newX - otherParticle.x;
          const dy = newY - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Dynamic connection distance based on size
          const connectionDistance = 120 + (particle.size + otherParticle.size) * 10;
          
          if (distance < connectionDistance && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(newX, newY);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Opacity fades with distance
            const opacity = (1 - distance / connectionDistance) * 0.2;
            
            // Use gradient for connections
            const gradient = ctx.createLinearGradient(newX, newY, otherParticle.x, otherParticle.y);
            gradient.addColorStop(0, `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${otherParticle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.5, Math.min(particle.size, otherParticle.size) / 2);
            ctx.stroke();
          }
        });
        
        // Speed limiter - prevent particles from getting too fast
        const maxSpeed = 1.5;
        const speedX = Math.max(-maxSpeed, Math.min(maxSpeed, particle.speedX));
        const speedY = Math.max(-maxSpeed, Math.min(maxSpeed, particle.speedY));
        
        return {
          ...particle,
          x: newX,
          y: newY,
          rotation: newRotation,
          speedX: speedX,
          speedY: speedY
        };
      });
      
      setParticles(updatedParticles);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animationFrameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particles, dimensions, mousePosition, mousePressed, interactive]);

  // Track mouse position and clicks
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const handleMouseDown = () => setMousePressed(true);
    const handleMouseUp = () => setMousePressed(false);
    const handleMouseLeave = () => setMousePosition(null);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Handle touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (containerRef.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        });
        setMousePressed(true);
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        });
      }
    };
    
    const handleTouchEnd = () => {
      setMousePressed(false);
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [interactive]);

  return (
    <Box 
      ref={containerRef}
      sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

// Draw different particle shapes
const drawParticleShape = (
  ctx: CanvasRenderingContext2D, 
  shape: 'circle' | 'square' | 'triangle' | 'star', 
  size: number
) => {
  switch (shape) {
    case 'circle':
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      break;
    
    case 'square':
      ctx.fillRect(-size, -size, size * 2, size * 2);
      break;
    
    case 'triangle':
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size, size);
      ctx.lineTo(-size, size);
      ctx.closePath();
      ctx.fill();
      break;
    
    case 'star':
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size / 2;
      
      ctx.beginPath();
      let rot = Math.PI / 2 * 3;
      let x = 0;
      let y = 0;
      ctx.moveTo(0, -outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outerRadius;
        y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += Math.PI / spikes;
        
        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += Math.PI / spikes;
      }
      
      ctx.lineTo(0, -outerRadius);
      ctx.closePath();
      ctx.fill();
      break;
  }
};

// Helper function to create a particle
const createParticle = (
  width: number, 
  height: number, 
  colorPalette: string[], 
  includeShapes: boolean
): Particle => {
  const shapes: ('circle' | 'square' | 'triangle' | 'star')[] = ['circle', 'square', 'triangle', 'star'];
  const shape = includeShapes ? 
    shapes[Math.floor(Math.random() * shapes.length)] : 
    'circle';
  
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 4 + 1,
    speedX: (Math.random() - 0.5) * 0.7,
    speedY: (Math.random() - 0.5) * 0.7,
    color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
    opacity: Math.random() * 0.5 + 0.1,
    shape,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02
  };
};

export default ParticleBackground;
