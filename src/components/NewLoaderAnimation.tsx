'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface NewLoaderAnimationProps {
  finishLoading: () => void;
}

// Letter animation sequence - defined outside component to ensure consistency between server/client
const nameLetters = "Ishan Vilas Sarode".split("");

const NewLoaderAnimation: React.FC<NewLoaderAnimationProps> = ({ finishLoading }) => {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  // Colors from theme
  const goldColor = '#FFD700';
  const orangeColor = '#FFA500';
  const bgColor = '#0a0a0a';

  // Handle mounting state to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Effect for handling fixed 7-second loader animation
  useEffect(() => {
    // Only run on client side after hydration
    if (!isMounted) return;
    
    // Fixed duration of 7 seconds for the loader
    // Fade out starts at 6.5 seconds
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 6500);
    
    // Complete the loading sequence after full 7 seconds
    const completeTimeout = setTimeout(finishLoading, 7000);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(completeTimeout);
    };
  }, [finishLoading, isMounted]);

  // Only render full animation after hydration to avoid mismatch
  if (!isMounted) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: bgColor,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${goldColor}, ${orangeColor})`,
          }}
        />
      </Box>
    );
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: bgColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          {/* Main Animated Atom */}
          <Box sx={{ position: 'relative', width: '180px', height: '180px' }}>
            {/* Electron Orbits - Using minimal elements for better performance */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 360
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 1 },
                rotate: { 
                  repeat: Infinity, 
                  duration: 10, 
                  ease: "linear" 
                }
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                border: `2px solid ${goldColor}80`,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
              }}
            >
              {/* Electron 1 */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '50%',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: goldColor,
                  boxShadow: `0 0 15px ${goldColor}`,
                  transform: 'translateX(-50%)',
                }}
              />
            </motion.div>
            
            {/* Second Orbit - Counter rotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: -360
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 1, delay: 0.2 },
                rotate: { 
                  repeat: Infinity, 
                  duration: 8, 
                  ease: "linear" 
                }
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: `1px solid ${orangeColor}80`,
                transform: 'translate(-50%, -50%) rotate(60deg)',
                willChange: 'transform',
              }}
            >
              {/* Electron 2 */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '50%',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: orangeColor,
                  boxShadow: `0 0 12px ${orangeColor}`,
                  transform: 'translateX(-50%)',
                }}
              />
            </motion.div>

            {/* Third Orbit - Different angle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 360
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 1, delay: 0.4 },
                rotate: { 
                  repeat: Infinity, 
                  duration: 6, 
                  ease: "linear" 
                }
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: `1px solid rgba(255, 255, 255, 0.5)`,
                transform: 'translate(-50%, -50%) rotate(30deg)',
                willChange: 'transform',
              }}
            >
              {/* Electron 3 */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '50%',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                  transform: 'translateX(-50%)',
                }}
              />
            </motion.div>

            {/* Nucleus with pulsing effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
              }}
              transition={{ 
                duration: 1.2,
                delay: 0.6
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${goldColor}, ${orangeColor})`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 25px ${goldColor}80`,
              }}
            >
              {/* Pulsing glow for nucleus */}
              <motion.div
                animate={{
                  boxShadow: [
                    `0 0 20px ${goldColor}40`,
                    `0 0 30px ${goldColor}80`,
                    `0 0 20px ${goldColor}40`,
                  ],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          </Box>

          {/* Name with letter-by-letter animation */}
          <Box sx={{ marginTop: 5, overflow: 'hidden', height: '60px', display: 'flex', justifyContent: 'center' }}>
            <motion.div style={{ display: 'flex' }}>
              {nameLetters.map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 2 + index * 0.08, // Staggered letter animation
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: '"Dancing Script", cursive',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                      color: letter === ' ' ? 'transparent' : 'white',
                      textShadow: letter === ' ' ? 'none' : `0 0 10px ${goldColor}60`,
                      display: 'inline-block',
                      mx: letter === ' ' ? '0.5rem' : '0.05rem',
                      background: letter === ' ' ? 'none' : `-webkit-linear-gradient(45deg, ${goldColor}, ${orangeColor})`,
                      WebkitBackgroundClip: letter === ' ' ? 'none' : 'text',
                      WebkitTextFillColor: letter === ' ' ? 'transparent' : 'transparent',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </Box>

          {/* Role text with fade in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '3px',
                fontSize: '0.9rem',
                marginTop: '1rem',
                textTransform: 'uppercase',
                fontWeight: 300,
              }}
            >
              Full Stack Developer
            </Typography>
          </motion.div>
          
          {/* Decorative particles that appear near the end - with fixed positions to avoid hydration errors */}
          <Box sx={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
            {[
              { size: 6, x: 20, y: 25, delay: 4.2, duration: 1.8 },
              { size: 4, x: 80, y: 15, delay: 4.5, duration: 1.5 },
              { size: 8, x: 35, y: 85, delay: 4.3, duration: 2.0 },
              { size: 5, x: 65, y: 70, delay: 4.8, duration: 1.7 },
              { size: 7, x: 15, y: 60, delay: 4.1, duration: 2.2 },
              { size: 4, x: 90, y: 35, delay: 4.9, duration: 1.6 },
              { size: 6, x: 45, y: 10, delay: 4.6, duration: 1.9 },
              { size: 5, x: 75, y: 50, delay: 4.2, duration: 1.5 },
              { size: 7, x: 30, y: 40, delay: 4.7, duration: 2.1 },
              { size: 5, x: 85, y: 80, delay: 4.4, duration: 1.8 },
              { size: 4, x: 50, y: 65, delay: 4.0, duration: 1.4 },
              { size: 6, x: 10, y: 90, delay: 4.5, duration: 1.9 },
              { size: 7, x: 60, y: 20, delay: 4.3, duration: 1.7 },
              { size: 5, x: 25, y: 75, delay: 4.8, duration: 2.0 },
              { size: 6, x: 70, y: 30, delay: 4.1, duration: 1.6 }
            ].map((particle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0.5] }}
                transition={{
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  width: particle.size,
                  height: particle.size,
                  borderRadius: '50%',
                  backgroundColor: i % 2 === 0 ? goldColor : orangeColor,
                  boxShadow: `0 0 ${particle.size * 2}px ${i % 2 === 0 ? goldColor : orangeColor}`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
              />
            ))}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewLoaderAnimation;
