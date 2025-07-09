'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch } from '@mui/icons-material';

const roles = [
  'Software Developer',
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
];

function TypingAnimation() {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRole]);

  return (
    <Typography 
      variant="h4" 
      sx={{ 
        color: 'primary.main', 
        minHeight: '40px',
        fontWeight: 500,
        letterSpacing: '0.5px',
        fontSize: { xs: '1.5rem', md: '2rem' },
      }}
    >
      {currentText}
      <Box 
        component="span" 
        sx={{ 
          opacity: 1, 
          animation: 'blink 1s infinite',
          color: 'warning.main',
          ml: 1
        }}
      >
        |
      </Box>
    </Typography>
  );
}

const handleViewResume = () => {
  // Open Google Drive PDF viewer in a new tab
  window.open('https://drive.google.com/file/d/11Ewvknu3jfwFED3ePseX-WE9zyMGwNsj/view', '_blank');
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
        gap: 3,
        maxWidth: { xs: '100%', md: '50%' },
        pt: { xs: 8, sm: 6, md: 0 }, // Add padding top specifically to the hero section
      }}
    >
      {/* Name and Title */}
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFD700,rgb(250, 120, 27), #FF4500, #FFC800)',
              backgroundSize: '300% 300%',
              animation: 'gradientShift 4s ease infinite',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '3rem', md: '4rem', lg: '4.5rem' },
            }}
          >
            Ishan Sarode
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingAnimation />
        </motion.div>
      </Box>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: 500,
            lineHeight: 1.6,
            mb: 3,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
          }}
        >
          Passionate about creating innovative solutions through code. 
          I build scalable applications and explore the endless possibilities of technology.
        </Typography>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<Launch />}
          onClick={handleViewResume}
          sx={{
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            color: '#000',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #FFA500, #FFD700)',
              boxShadow: '0 6px 24px rgba(255, 215, 0, 0.4)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          View Resume
        </Button>
      </motion.div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Box>
  );
}
