'use client';

import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderAnimationProps {
  finishLoading: () => void;
}

const LoaderAnimation: React.FC<LoaderAnimationProps> = ({ finishLoading }) => {
  const [loading, setLoading] = useState(true);

  // Colors from theme
  const goldColor = '#FFD700';
  const orangeColor = '#FFA500';
  const bgColor = '#0a0a0a';

  // Effect for handling fixed 5-second loader animation
  useEffect(() => {
    // Set a fixed 5-second duration for the loader, including exit animation
    // We use 4.5s for main animation + 0.5s for exit animation = total 5s
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 4500);
    
    // Only call finishLoading after the full 5 seconds (including exit animation)
    const completeTimeout = setTimeout(finishLoading, 5000);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(completeTimeout);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
            zIndex: 1000, // Set lower than Navbar but higher than other content
            paddingTop: '64px', // Space for Navbar (adjust if your Navbar height is different)
          }}
        >
          <Box sx={{ position: 'relative', width: '100px', height: '100px' }}>
            {/* Outer orbit - optimized with willChange and reduced animation complexity */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '46px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: goldColor,
                }}
              />
            </motion.div>

            {/* Middle orbit - optimized */}
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '80px',
                height: '80px',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '37px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: orangeColor,
                }}
              />
            </motion.div>

            {/* Inner orbit - optimized */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '60px',
                height: '60px',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '28px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                }}
              />
            </motion.div>

            {/* Core with subtle animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  `0 0 10px ${goldColor}33`,
                  `0 0 20px ${goldColor}66`,
                  `0 0 10px ${goldColor}33`
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${goldColor}, ${orangeColor})`,
                willChange: 'transform, box-shadow',
              }}
            />
          </Box>

          {/* Name animation */}
          <Box mt={4} sx={{ overflow: 'hidden' }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontFamily: '"Dancing Script", cursive',
                  fontWeight: 700,
                  background: `-webkit-linear-gradient(45deg, ${goldColor}, ${orangeColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1px',
                  fontSize: { xs: '2rem', sm: '2.5rem' }
                }}
              >
                Ishan Vilas Sarode
              </Typography>
            </motion.div>
          </Box>
          
          {/* Removed progress bar as requested */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderAnimation;
