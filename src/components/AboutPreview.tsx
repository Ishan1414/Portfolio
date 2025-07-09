'use client';

import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, School, Work, Code, EmojiEvents } from '@mui/icons-material';

const highlights = [
  {
    icon: <School sx={{ fontSize: 40, color: '#FFD700' }} />,
    title: 'Education',
    description: 'Computer Science & Engineering background with strong fundamentals in algorithms and data structures.'
  },
  {
    icon: <Work sx={{ fontSize: 40, color: '#FFD700' }} />,
    title: 'Experience',
    description: 'Full-stack development experience with modern technologies and agile methodologies.'
  },
  {
    icon: <Code sx={{ fontSize: 40, color: '#FFD700' }} />,
    title: 'Expertise',
    description: 'Proficient in Java, JavaScript, React, Node.js, and cloud technologies like AWS and Docker.'
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40, color: '#FFD700' }} />,
    title: 'Achievements',
    description: 'Delivered scalable applications and contributed to innovative projects with measurable impact.'
  }
];

export default function AboutPreview() {
  const handleLearnMore = () => {
    // Navigate to about section - you can implement router navigation here
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)',
        borderTop: '1px solid rgba(255, 215, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
      }}
    >
      <Box maxWidth="1200px" mx="auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            I'm a passionate software developer with a strong foundation in full-stack development, 
            cloud technologies, and modern frameworks. I love turning complex problems into elegant solutions.
          </Typography>
        </motion.div>

        {/* Highlights Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 4,
            mb: 6 
          }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 215, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 32px rgba(255, 215, 0, 0.2)',
                    border: '1px solid rgba(255, 215, 0, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {highlight.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: 'text.primary',
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleLearnMore}
              sx={{
                color: '#FFD700',
                borderColor: '#FFD700',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#FFA500',
                  color: '#FFA500',
                  background: 'rgba(255, 215, 0, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Learn More About Me
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
