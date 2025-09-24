'use client';

import React from 'react';
import { Box, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Work, CalendarToday } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const experiences = [
  {
    company: 'METY Technology',
    position: 'Software Engineer',
    duration: 'Jun 2025 – Present',
    type: 'Remote',
    skills: ['React', 'TypeScript', 'Python', 'REST APIs', 'Hubspot', 'Analytics'],
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    impact: '35% LCP reduction achieved',
  },
  {
    company: 'PreBuild Technologies LLC',
    position: 'Software Developer Intern',
    duration: 'May 2024 – Aug 2024',
    type: 'Remote',
    skills: ['React', 'TypeScript', 'AWS', 'Terraform', 'CI/CD', 'REST APIs'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    impact: '20% latency reduction achieved',
  },
  {
    company: 'IDeaS - A SAS Company',
    position: 'Associate Software Developer Intern',
    duration: 'Jul 2022 – Jun 2023',
    type: 'Hybrid',
    skills: ['Node.js', 'MySQL', 'REST APIs', 'AWS', 'Kubernetes', 'Docker'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    impact: '85% reduction in onboarding time',
  },
  {
    company: 'Vridhi Enterprises',
    position: 'Full Stack Engineer Intern',
    duration: 'Jan 2022 – Jun 2022',
    type: 'Remote',
    skills: ['React JS', 'Material UI', 'Java', 'Spring Boot', 'MongoDB', 'Cypress'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    impact: '90% code coverage achieved',
  },
];

export default function ExperiencePreview() {
  const router = useRouter();

  const handleViewFullExperience = () => {
    router.push('/experience');
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box maxWidth="1200px" mx="auto" position="relative" zIndex={1}>
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
            Professional Experience
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
              mb: 8,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Journey through diverse roles and cutting-edge technologies, 
            from startups to enterprise solutions.
          </Typography>
        </motion.div>

        {/* Experience Cards */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            gap: 4,
            mb: 8 
          }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: `linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  '&:hover': {
                    border: '1px solid rgba(255, 215, 0, 0.6)',
                    boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: experience.gradient,
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Company and Duration */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Work sx={{ color: '#FFD700', mr: 1, fontSize: 20 }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          fontSize: { xs: '1.1rem', md: '1.2rem' },
                        }}
                      >
                        {experience.company}
                      </Typography>
                    </Box>
                    
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 500,
                        mb: 1,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {experience.position}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ color: 'text.secondary', mr: 1, fontSize: 16 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                        }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>

                    <Chip
                      label={experience.type}
                      size="small"
                      sx={{
                        background: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>

                  {/* Skills */}
                  <Box sx={{ mb: 3, flexGrow: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (skillIndex * 0.1) 
                          }}
                          viewport={{ once: true }}
                        >
                          <Chip
                            label={skill}
                            size="small"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'text.secondary',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              fontSize: '0.7rem',
                              '&:hover': {
                                background: 'rgba(255, 215, 0, 0.2)',
                                color: '#FFD700',
                                border: '1px solid rgba(255, 215, 0, 0.4)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>

                  {/* Impact */}
                  <Box 
                    sx={{ 
                      p: 2, 
                      background: 'rgba(255, 215, 0, 0.05)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 215, 0, 0.2)',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 500,
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        textAlign: 'center',
                      }}
                    >
                      {experience.impact}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleViewFullExperience}
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
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Detailed Experience
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
