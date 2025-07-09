'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import Footer from '@/components/Footer';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "IDeaS - A SAS Company",
    position: "Associate Software Developer Intern",
    duration: "Jul 2022 – Jun 2023",
    location: "Hybrid",
    description: [
      "Engineered automated onboarding functionality using Java, MSSQL, REST APIs, and Vaadin, reducing onboarding time by 85% for a major client in the company's largest G3 project",
      "Developed a test environment on AWS with Kubernetes and Docker, reducing storage by 57% and test time by 42%",
      "Wrote comprehensive Unit and Integration tests with JUnit and Mockito leading to 81% code coverage of components",
      "Improved the CI/CD pipeline and automation flow, leading to a 33% decrease in run-time of automation tests"
    ],
    technologies: ["Java", "MSSQL", "REST APIs", "AWS", "Kubernetes", "Docker", "JUnit", "Vaadin", "Mockito"]
  },
  {
    company: "Powermech Eng Systems",
    position: "Full Stack Engineer Intern",
    duration: "Jan 2022 – Jun 2022",
    location: "Remote",
    description: [
      "Led UI development of Product Dashboard from prototyping in Figma to developing in React JS with Material UI",
      "Defined a comprehensive REST API for user management functionality using Java Spring boot MVC architecture",
      "Implemented data encryption in MongoDB for user authentication, enhancing security and protecting sensitive data",
      "Wrote 50+ E2E integration tests in Cypress and 80+ Unit tests in JUnit for backend achieving 90% code coverage"
    ],
    technologies: ["React JS", "Material UI", "REST API", "Spring Boot", "MongoDB", "Cypress", "JUnit", "Figma"]
  },
  {
    company: "Vridhi Enterprises",
    position: "Web Developer Intern",
    duration: "May 2021 – Aug 2021",
    location: "Pune, MH, India",
    description: [
      "Revamped website with advanced HTML5, CSS3, JavaScript, Bootstrap, achieving 50% increase in user reach",
      "Implemented responsive design principles for optimal performance across devices, launching the website on AWS S3",
      "Applied SEO best practices to improve website visibility and organic search rankings, contributing to increased traffic",
      "Conducted performance optimization, reducing page load time by 30% through code minification and image compression"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AWS S3", "SEO"]
  }
];

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          } else {
            setVisibleItems(prev => prev.filter(i => i !== index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px 0px -100px 0px' }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        minHeight: '100vh',
        pt: { xs: 8, md: 10 },
        pb: 10,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' }
          }
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          right: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,165,0,0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            animation: 'slideDown 1s ease-out',
            '@keyframes slideDown': {
              '0%': { opacity: 0, transform: 'translateY(-50px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          Experience
        </Typography>
        
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 8,
            maxWidth: '600px',
            mx: 'auto',
            color: 'rgba(255,255,255,0.7)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.8,
            animation: 'fadeIn 1s ease-out 0.3s both',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          My professional journey through the world of technology and innovation
        </Typography>

        {/* Timeline */}
        <Box
          sx={{
            position: 'relative',
            maxWidth: '1200px',
            mx: 'auto',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, #FFD700, #FFA500, #FFD700)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              boxShadow: '0 0 20px rgba(255,215,0,0.5)',
              animation: 'timelineGlow 3s ease-in-out infinite alternate'
            },
            '@keyframes timelineGlow': {
              '0%': { boxShadow: '0 0 20px rgba(255,215,0,0.5)' },
              '100%': { boxShadow: '0 0 30px rgba(255,215,0,0.8)' }
            }
          }}
        >
          {experienceData.map((item, index) => {
            const isRight = (index + 1) % 2 !== 0;

            return (
            <Box
              key={index}
              className="timeline-item"
              data-index={index}
              sx={{
                position: 'relative',
                mb: 6,
                pl: { xs: 6, md: 0 },
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index)
                  ? 'translate(0, 0)'
                  : `translate(${(isRight ? 1 : -1) * 50}px, 0)`,
                transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: '21.5px', md: '50%' },
                  top: '50%',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  transform: { xs: 'translateX(-50%) translateY(-50%)', md: 'translateX(-50%) translateY(-50%)' },
                  boxShadow: '0 0 15px rgba(255,215,0,0.6)',
                  transition: 'all 0.3s ease-in-out',
                  zIndex: 1,
                },
                '&:hover::before': {
                  boxShadow: '0 0 25px rgba(255,215,0,1)',
                  transform: { xs: 'translateX(-50%) translateY(-50%) scale(1.1)', md: 'translateX(-50%) translateY(-50%) scale(1.1)' },
                }
              }}
            >
              <Box
                sx={{
                  ml: { xs: 0, md: isRight ? '55%' : 'auto' },
                  mr: { xs: 0, md: isRight ? 'auto' : '55%' },
                  width: { xs: '100%', md: '45%' },
                  py: 2,
                  px: { xs: 0, md: 4 },
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#FFD700',
                    mb: 1,
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                >
                  {item.position}
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    mb: 1,
                    fontSize: { xs: '1.1rem', md: '1.2rem' }
                  }}
                >
                  {item.company}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#FFA500',
                    mb: 1,
                    fontWeight: 500
                  }}
                >
                  {item.duration} • {item.location}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  {item.description.map((desc, descIndex) => (
                    <Box
                      key={descIndex}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          color: '#FFD700',
                          minWidth: '16px',
                          lineHeight: 1.6,
                          mr: 1
                        }}
                      >
                        ▸
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          lineHeight: 1.6,
                          flex: 1
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: !isRight ? 'flex-end' : 'flex-start' } }}>
                  {item.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255,215,0,0.1)',
                        color: '#FFD700',
                        border: '1px solid rgba(255,215,0,0.3)',
                        fontSize: '0.75rem',
                        transition: 'all 0.3s ease',
                        animation: visibleItems.includes(index) ? `chipFade 0.5s ease-out ${techIndex * 0.1}s both` : 'none',
                        '@keyframes chipFade': {
                          '0%': { opacity: 0, transform: 'scale(0.8)' },
                          '100%': { opacity: 1, transform: 'scale(1)' }
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255,215,0,0.2)',
                          transform: 'scale(1.05)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          )})
        }
        </Box>

        {/* Bottom decorative line */}
        <Box
          sx={{
            mt: 8,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            animation: 'shimmer 2s ease-in-out infinite',
            '@keyframes shimmer': {
              '0%': { opacity: 0.5 },
              '50%': { opacity: 1 },
              '100%': { opacity: 0.5 }
            }
          }}
        />
      </Container>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}
