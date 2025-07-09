'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  IconButton,
  Fade,
  useTheme,
  Modal,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Code, 
  Launch, 
  GitHub, 
  CheckCircle,
  Timeline,
  People,
  Settings,
  Close 
} from '@mui/icons-material';
import { projects, Project } from '../../../data/projects';

export default function ProjectsPage() {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh', backgroundColor: 'rgba(10, 10, 10, 0.7)' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <Code sx={{ fontSize: 48, color: '#FFD700', mr: 2 }} />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </Typography>
          </Box>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary', 
              mb: 2, 
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Showcase of innovative solutions and technical achievements
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 4 
          }}
        >
          {projects.map((project, index) => (
            <Box key={project.id}>
              <Fade in={true} timeout={500 + index * 100}>
                <Card
                  onClick={() => handleProjectClick(project)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: project.featured 
                      ? '2px solid rgba(255, 215, 0, 0.4)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      border: '2px solid rgba(255, 215, 0, 0.6)',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: project.featured 
                        ? 'linear-gradient(90deg, #FFD700, #FFA500)'
                        : 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
                    }
                  }}
                >
                  {/* Project Image */}
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: 64,
                        color: '#FFD700',
                        opacity: 0.7,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {React.createElement(project.icon, { sx: { fontSize: 64 } })}
                    </Box>
                    {project.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          backgroundColor: '#FFD700',
                          color: '#000',
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                  </CardMedia>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    {/* Category */}
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        mb: 2,
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                      }}
                    />

                    {/* Title */}
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#fff',
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.75rem',
                              height: '24px',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <IconButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          backgroundColor: 'rgba(255, 215, 0, 0.1)',
                          color: '#FFD700',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 215, 0, 0.2)',
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        <Launch />
                      </IconButton>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Box>
          ))}
        </Box>

        {/* Project Detail Modal */}
        <Modal
          open={!!selectedProject}
          onClose={handleCloseModal}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: '800px',
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {selectedProject && (
              <>
                {/* Close Button */}
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1000,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Modal Content */}
                <Box sx={{ maxHeight: '90vh', overflowY: 'auto' }}>
                  {/* Header */}
                  <Box
                    sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))',
                      borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ fontSize: 48, color: '#FFD700', mr: 2 }}>
                        {React.createElement(selectedProject.icon, { sx: { fontSize: 48 } })}
                      </Box>
                      <Box>
                        <Typography
                          variant="h3"
                          component="h2"
                          sx={{
                            fontWeight: 'bold',
                            color: '#fff',
                            mb: 1,
                          }}
                        >
                          {selectedProject.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                          <Chip
                            label={selectedProject.category}
                            sx={{
                              backgroundColor: 'rgba(255, 215, 0, 0.2)',
                              color: '#FFD700',
                              border: '1px solid rgba(255, 215, 0, 0.4)',
                            }}
                          />
                          {selectedProject.featured && (
                            <Chip
                              label="Featured"
                              sx={{
                                backgroundColor: '#FFD700',
                                color: '#000',
                                fontWeight: 'bold',
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 4 }}>
                    {/* Description */}
                    <Typography
                      variant="h6"
                      sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold' }}
                    >
                      Project Overview
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 4,
                        lineHeight: 1.7,
                      }}
                    >
                      {selectedProject.longDescription || selectedProject.description}
                    </Typography>

                    {/* Technologies */}
                    <Typography
                      variant="h6"
                      sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold' }}
                    >
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {selectedProject.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 215, 0, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>

                    {/* Key Features */}
                    <Typography
                      variant="h6"
                      sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold' }}
                    >
                      Key Features
                    </Typography>
                    <List sx={{ mb: 3 }}>
                      {selectedProject.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: '#FFD700', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.9rem',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    {/* Challenges */}
                    {selectedProject.challenges && (
                      <>
                        <Typography
                          variant="h6"
                          sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold' }}
                        >
                          Technical Challenges
                        </Typography>
                        <List sx={{ mb: 3 }}>
                          {selectedProject.challenges.map((challenge, index) => (
                            <ListItem key={index} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Settings sx={{ color: '#FFA500', fontSize: 20 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={challenge}
                                primaryTypographyProps={{
                                  color: 'rgba(255, 255, 255, 0.8)',
                                  fontSize: '0.9rem',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </>
                    )}

                    {/* Project Details */}
                    {(selectedProject.timeline || selectedProject.teamSize) && (
                      <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
                        {selectedProject.timeline && (
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{ color: '#FFD700', mb: 1, fontWeight: 'bold' }}
                            >
                              <Timeline sx={{ mr: 1, verticalAlign: 'middle' }} />
                              Timeline
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                              {selectedProject.timeline}
                            </Typography>
                          </Box>
                        )}
                        {selectedProject.teamSize && (
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{ color: '#FFD700', mb: 1, fontWeight: 'bold' }}
                            >
                              <People sx={{ mr: 1, verticalAlign: 'middle' }} />
                              Team Size
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                              {selectedProject.teamSize}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    )}

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', pt: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<Launch />}
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: '#FFD700',
                          color: '#FFD700',
                          '&:hover': {
                            borderColor: '#FFA500',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': {
                            borderColor: '#fff',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        View Code
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
