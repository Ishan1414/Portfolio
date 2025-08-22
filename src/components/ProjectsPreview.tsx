'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, Chip, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Launch, GitHub, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { projects, Project } from '../../data/projects';
import { useRouter } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectsPreview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const router = useRouter();

  const handleViewAllProjects = () => {
    router.push('/projects');
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.02) 0%, rgba(255, 165, 0, 0.05) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
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
            Featured Projects
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
            Showcasing innovative solutions across full-stack development, 
            from rental platforms to entertainment systems.
          </Typography>
        </motion.div>

        {/* Projects Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-slider-container"
        >
          <Box 
            sx={{ 
              position: 'relative', 
              px: { xs: 2, md: 6 },
              mb: 8,
              '& .swiper-pagination': {
                bottom: '-10px !important',
              },
              '& .swiper-pagination-bullet': {
                background: 'rgba(255, 215, 0, 0.5)',
                opacity: 0.5,
                transition: 'all 0.2s ease',
              },
              '& .swiper-pagination-bullet-active': {
                background: '#FFD700',
                opacity: 1,
                transform: 'scale(1.25)',
                transition: 'all 0.15s ease-out',
              },
              '& .swiper-button-prev, & .swiper-button-next': {
                color: '#FFD700',
                background: 'rgba(0, 0, 0, 0.2)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                '&:after': {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
                display: { xs: 'none', md: 'flex' },
              },
            }}
          >
            {/* Custom Navigation Buttons */}
            <IconButton
              className="swiper-button-prev custom-swiper-button-prev"
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: -5, md: 15 },
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#FFD700',
                background: 'rgba(0, 0, 0, 0.2)',
                width: { xs: '36px', md: '48px' },
                height: { xs: '36px', md: '48px' },
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(0.95)',
                },
                display: { xs: 'none', md: 'flex' },
              }}
              onClick={() => swiperInstance?.slidePrev()}
            >
              <NavigateBefore sx={{ fontSize: { xs: 24, md: 32 } }} />
            </IconButton>
            
            <IconButton
              className="swiper-button-next custom-swiper-button-next"
              sx={{
                position: 'absolute',
                top: '50%',
                right: { xs: -5, md: 15 },
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#FFD700',
                background: 'rgba(0, 0, 0, 0.2)',
                width: { xs: '36px', md: '48px' },
                height: { xs: '36px', md: '48px' },
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(0.95)',
                },
                display: { xs: 'none', md: 'flex' },
              }}
              onClick={() => swiperInstance?.slideNext()}
            >
              <NavigateNext sx={{ fontSize: { xs: 24, md: 32 } }} />
            </IconButton>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={isMobile ? 1 : (isTablet ? 2 : 3)}
              navigation={{
                prevEl: '.custom-swiper-button-prev',
                nextEl: '.custom-swiper-button-next',
                enabled: true,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              speed={600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={setSwiperInstance}
              style={{ paddingBottom: '40px' }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <Card
                    sx={{
                      height: 750, // Fixed height for all cards
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        border: `1px solid ${project.accent}40`,
                        boxShadow: `0 25px 50px ${project.accent}20`,
                        '& .project-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: project.accent,
                        },
                        '& .project-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Gradient Overlay */}
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: project.gradient,
                        opacity: 0.05,
                        transition: 'opacity 0.4s ease',
                        zIndex: 0,
                      }}
                    />

                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Project Header */}
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                          <Box
                            className="project-icon"
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              background: `${project.accent}15`,
                              border: `1px solid ${project.accent}30`,
                              color: project.accent,
                              transition: 'all 0.25s ease',
                            }}
                          >
                            {React.createElement(project.icon, { sx: { fontSize: 40 } })}
                          </Box>
                          
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                              size="small"
                              component="a"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                  color: project.accent,
                                  background: `${project.accent}15`,
                                },
                              }}
                            >
                              <GitHub fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              component="a"
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                  color: project.accent,
                                  background: `${project.accent}15`,
                                },
                              }}
                            >
                              <Launch fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>

                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            background: `${project.accent}20`,
                            color: project.accent,
                            border: `1px solid ${project.accent}40`,
                            fontSize: '0.75rem',
                            mb: 2,
                          }}
                        />

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            mb: 1,
                            fontSize: { xs: '1.2rem', md: '1.4rem' },
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      {/* Features */}
                      <Box sx={{ mb: 3, flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            mb: 2,
                            fontSize: '0.9rem',
                          }}
                        >
                          Key Features:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          {project.features.map((feature, featureIndex) => (
                            <Box
                              key={featureIndex}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                p: 1,
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 1,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: project.accent,
                                  mr: 2,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Technologies */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            mb: 2,
                            fontSize: '0.9rem',
                          }}
                        >
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                color: 'text.secondary',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                fontSize: '0.7rem',
                                '&:hover': {
                                  background: `${project.accent}20`,
                                  color: project.accent,
                                  border: `1px solid ${project.accent}40`,
                                },
                                transition: 'all 0.3s ease',
                              }}
                            />
                          ))}
                        </Box>
                      </Box>

                      {/* Impact */}
                      <Box 
                        sx={{ 
                          p: 2, 
                          background: `${project.accent}10`,
                          borderRadius: 2,
                          border: `1px solid ${project.accent}30`,
                          textAlign: 'center',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: project.accent,
                            fontWeight: 600,
                            fontSize: '0.85rem',
                          }}
                        >
                          {project.impact}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleViewAllProjects}
              sx={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: '#000',
                fontWeight: 'bold',
                px: 5,
                py: 2,
                borderRadius: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFA500, #FFD700)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 40px rgba(255, 215, 0, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
