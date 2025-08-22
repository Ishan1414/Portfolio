'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  Card,
  CardContent,
  CardActions,
  Chip,
  Collapse,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Avatar,
  useMediaQuery,
  Link
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { 
  School, 
  ArrowDropDown, 
  ArrowDropUp, 
  CardMembership,
  MenuBook,
  OpenInNew
} from '@mui/icons-material';
import Footer from '@/components/Footer';

export default function EducationPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  // Set document title
  useEffect(() => {
    document.title = "Education | Ishan's Portfolio";
  }, []);

  const handleEducationToggle = (id: number) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  const handleCertToggle = (id: number) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  // Education data
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Indiana University, Bloomington",
      location: "Bloomington, IN",
      period: "Aug 2023 - May 2025",
      gpa: "3.8/4.0",
      description: "Focused on advanced computer science concepts with emphasis on algorithms, software engineering, and database systems.",
      courses: [
        "Applied Algorithms",
        "Software Engineering",
        "Advance Database Concepts",
        "Computer Network",
        "Data Structures"
      ],
      projects: [
        {
          title: "Advanced Database Management System",
          description: "Designed and implemented a scalable database system with advanced indexing and query optimization techniques."
        },
        {
          title: "Network Protocol Analysis Tool",
          description: "Developed a comprehensive tool for analyzing and monitoring network protocols and traffic patterns."
        }
      ],
      logoUrl: "/Indiana_University_seal.svg",
      website: "https://www.indiana.edu"
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science and Information Technology",
      institution: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra, India",
      period: "Aug 2019 - May 2023",
      gpa: "3.8/4.0",
      description: "Comprehensive undergraduate program covering fundamental and advanced topics in computer science and information technology.",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering"
      ],
      projects: [
        {
          title: "E-commerce Web Application",
          description: "Built a full-stack e-commerce platform with user authentication, payment integration, and inventory management."
        },
        {
          title: "Machine Learning Based Recommendation System",
          description: "Developed a recommendation system using collaborative filtering and content-based algorithms."
        }
      ],
      logoUrl: "/uop_logo.jpg",
      website: "https://www.unipune.ac.in"
    }
  ];

  // Publications data
  const publications = [
    {
      id: 1,
      title: "Machine Learning-Based Cognitive Intelligence Approach in Telehealth: A Novel Framework",
      publisher: "Bentham Science Publishers",
      date: "2024",
      description: "Presented a novel framework for implementing cognitive intelligence in telehealth systems using machine learning techniques.",
      link: "https://www.eurekaselect.com/chapter/21228",
      authors: "Sarode, I. V. et al.",
      journalName: "AI and Cognitive Computing for Healthcare Applications",
      isMainAuthor: true,
      topics: ["Machine Learning", "Telehealth", "Cognitive Intelligence", "Healthcare AI"]
    },
    {
      id: 2,
      title: "Real Time CCTV Violence Detection System Using Deep Learning",
      publisher: "ResearchGate",
      date: "2023",
      description: "Developed a system that utilizes deep learning techniques to detect violence in CCTV footage in real-time.",
      link: "https://www.researchgate.net/publication/370148182_Real_Time_CCTV_Violence_Detection_System_Using_Deep_Learning",
      authors: "Various Authors",
      journalName: "ResearchGate Publication",
      isMainAuthor: false,
      topics: ["Deep Learning", "Computer Vision", "Real-time Detection", "Security Systems"]
    }
  ];

  return (
    <Box sx={{ 
      pt: 12, 
      pb: 8, 
      minHeight: '100vh', 
      backgroundColor: 'rgba(10, 10, 10, 0.7)',
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <School sx={{ fontSize: 48, color: '#FFD700', mr: 2 }} />
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
              Education
            </Typography>
          </Box>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary', 
              mb: 3, 
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Academic foundation and continuous learning journey that has shaped my expertise and approach to problem-solving.
          </Typography>
        </Box>

        {/* Formal Education Section with Horizontal Cards */}
        <Box 
          sx={{ 
            mb: 7, 
            pb: 3, 
            background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%)',
            borderRadius: 4,
            pt: 3,
            maxWidth: '1200px',
            mx: 'auto', 
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#FFD700', 
              mb: 5, 
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <MenuBook sx={{ mr: 2 }} /> Degrees Received
          </Typography>

          {educationData.map((edu, index) => (              <Box 
              key={edu.id} 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                mb: index < educationData.length - 1 ? 8 : 2, 
                gap: { xs: 3, sm: 5, md: 6 },  
                height: { sm: 'auto', md: '100%' }, 
                mx: { xs: 2, md: 3 }, 
                alignItems: 'center', 
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
            >
              {/* Logo Column - Separated from card */}
              <Box
                sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center', 
                  width: { xs: '100%', sm: 'auto' },
                  mb: { xs: 2, sm: 0 }, 
                  pl: { xs: 0, sm: 1, md: 2 }, 
                  minWidth: { sm: '140px', md: '150px' }, 
                  position: 'relative',
                  height: { sm: '100%' }, 
                  alignSelf: 'center' 
                }}
              >
                <Avatar 
                  src={edu.logoUrl}
                  alt={`${edu.institution} logo`}
                  sx={{
                    width: { xs: 100, sm: 110, md: 120 },
                    height: { xs: 100, sm: 110, md: 120 },
                    border: '2px solid rgba(255, 215, 0, 0.5)',
                    backgroundColor: 'white',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    position: { sm: 'relative', md: 'relative' },
                    zIndex: 2,
                    ml: { xs: 0, sm: 2 }, 
                    transition: 'all 0.3s ease-in-out',
                    margin: 'auto', 
                    my: { xs: 0, sm: 'auto' }, 
                    '&:hover': {
                      transform: 'scale(1.05) rotate(5deg)',
                      boxShadow: '0 15px 35px rgba(255, 215, 0, 0.35)',
                      border: '2px solid rgba(255, 215, 0, 0.8)',
                    },
                  }}
                />
              </Box>
              
              {/* Details Column with Card */}
              <Box 
                sx={{ 
                  flex: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center' 
                }}
              >
                <Card 
                  sx={{ 
                    backgroundColor: 'rgba(30, 30, 35, 0.8)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'visible',
                    width: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    ml: { xs: 0, sm: -2, md: -3 }, 
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <CardContent sx={{ 
                      p: { xs: 3, md: 3.5 }, 
                      pl: { sm: 4, md: 5 },
                      display: 'flex',
                      flexDirection: 'column',
                      pb: 1, 
                      '&:last-child': { pb: 1 } 
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h5" component="div" color="#fff" sx={{ 
                        fontWeight: 'bold',
                        mb: 0.5,
                        textAlign: 'left'
                      }}>
                        {edu.institution}
                      </Typography>
                      
                      <Typography variant="h6" color="rgba(255, 215, 0, 0.9)" sx={{ mb: 1, textAlign: 'left' }}>
                        {edu.degree}
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1, 
                        mb: 1.5, 
                        alignItems: 'center'
                      }}>
                        <Chip 
                          label={edu.period} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'rgba(255, 255, 255, 0.1)', 
                            color: '#ffffff',
                          }} 
                        />
                        <Chip 
                          label={`GPA: ${edu.gpa}`} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'rgba(255, 215, 0, 0.1)', 
                            color: '#FFD700',
                          }} 
                        />
                        <Chip 
                          label={edu.location} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'rgba(255, 255, 255, 0.05)', 
                            color: '#cccccc',
                          }} 
                        />
                      </Box>
                      
                      <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 2, textAlign: 'left' }}>
                        {edu.description}
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        mt: 'auto', 
                        mb: 0 
                      }}>
                        <Button
                          size="small"
                          onClick={() => handleEducationToggle(edu.id)}
                          endIcon={expandedEducation === edu.id ? <ArrowDropUp /> : <ArrowDropDown />}
                          sx={{
                            color: '#FFD700',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 215, 0, 0.1)',
                            }
                          }}
                        >
                          {expandedEducation === edu.id ? 'Show Less' : 'Show More'}
                        </Button>
                        
                        <Button
                          component="a"
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          size="small"
                          endIcon={<OpenInNew />}
                          sx={{
                            borderColor: 'rgba(255, 215, 0, 0.5)',
                            color: '#FFD700',
                            '&:hover': {
                              borderColor: '#FFD700',
                              backgroundColor: 'rgba(255, 215, 0, 0.1)',
                            }
                          }}
                        >
                          Visit Website
                        </Button>
                      </Box>
                    </Box>
                    
                    <Collapse in={expandedEducation === edu.id} timeout="auto" unmountOnExit sx={{ mt: 0 }}>
                      <Box sx={{ mt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
                        <Typography variant="subtitle2" color="#FFD700" sx={{ mb: 1 }}>
                          Key Courses:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {edu.courses.map((course, index) => (
                            <Chip
                              key={index}
                              label={course}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            />
                          ))}
                        </Box>
                        
                        <Typography variant="subtitle2" color="#FFD700" sx={{ mb: 1 }}>
                          Notable Projects:
                        </Typography>
                        {edu.projects.map((project, index) => (
                          <Box key={index} sx={{ mb: 1 }}>
                            <Typography variant="body2" color="#fff" sx={{ fontWeight: 'bold' }}>
                              {project.title}
                            </Typography>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                              {project.description}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Publications Section */}
        <Box
          sx={{
            mb: 10,
            pb: 6, 
            borderRadius: 4,
            pt: 4,
            textAlign: 'center',
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#FFD700', 
              mb: 5, 
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <MenuBook sx={{ mr: 2 }} /> Publications
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', 
              sm: 'repeat(1, 1fr)'
            },
            columnGap: 6, 
            rowGap: 6, 
            mt: 5, 
            mb: 3, 
            px: { xs: 3, md: 5 } 
          }}>
            {/* First Publication */}
            <Box sx={{ mb: 2 }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(255, 215, 0, 0.15)',
                }
              }}>
                {/* Header Banner */}
                <Box sx={{ 
                  py: 2.5,
                  px: 3,
                  bgcolor: 'rgba(255, 215, 0, 0.1)', 
                  borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Box>
                    <Chip 
                      label={publications[0].isMainAuthor ? "Lead Author" : "Co-Author"} 
                      size="small" 
                      sx={{ 
                        bgcolor: publications[0].isMainAuthor ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)', 
                        color: publications[0].isMainAuthor ? '#FFD700' : '#ffffff',
                        mb: 1
                      }} 
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                      {publications[0].date}
                    </Typography>
                  </Box>
                </Box>
                
                {/* Content */}
                <CardContent sx={{ 
                  bgcolor: 'rgba(30, 30, 35, 0.8)',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  textAlign: 'left'
                }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                    {publications[0].title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 215, 0, 0.8)" sx={{ mb: 1, fontStyle: 'italic' }}>
                    {publications[0].journalName}, {publications[0].publisher}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 2 }}>
                    <strong>Authors:</strong> {publications[0].authors}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 3 }}>
                    {publications[0].description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mb: 3 }}>
                    {publications[0].topics.map((topic, i) => (
                      <Chip
                        key={i}
                        label={topic}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.7rem'
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                    <Button
                      component="a"
                      href={publications[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      endIcon={<OpenInNew />}
                      sx={{
                        borderColor: 'rgba(255, 215, 0, 0.5)',
                        color: '#FFD700',
                        '&:hover': {
                          borderColor: '#FFD700',
                          backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        }
                      }}
                    >
                      View Publication
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            
            {/* Second Publication */}
            <Box sx={{ mb: 2 }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(255, 215, 0, 0.15)',
                }
              }}>
                {/* Header Banner */}
                <Box sx={{ 
                  py: 2.5,
                  px: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.05)', 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Box>
                    <Chip 
                      label={publications[1].isMainAuthor ? "Lead Author" : "Co-Author"} 
                      size="small" 
                      sx={{ 
                        bgcolor: publications[1].isMainAuthor ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)', 
                        color: publications[1].isMainAuthor ? '#FFD700' : '#ffffff',
                        mb: 1
                      }} 
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                      {publications[1].date}
                    </Typography>
                  </Box>
                </Box>
                
                {/* Content */}
                <CardContent sx={{ 
                  bgcolor: 'rgba(30, 30, 35, 0.8)',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  textAlign: 'left'
                }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                    {publications[1].title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 215, 0, 0.8)" sx={{ mb: 1, fontStyle: 'italic' }}>
                    {publications[1].journalName}, {publications[1].publisher}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 2 }}>
                    <strong>Authors:</strong> {publications[1].authors}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 3 }}>
                    {publications[1].description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mb: 3 }}>
                    {publications[1].topics.map((topic, i) => (
                      <Chip
                        key={i}
                        label={topic}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.7rem'
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                    <Button
                      component="a"
                      href={publications[1].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      endIcon={<OpenInNew />}
                      sx={{
                        borderColor: 'rgba(255, 215, 0, 0.5)',
                        color: '#FFD700',
                        '&:hover': {
                          borderColor: '#FFD700',
                          backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        }
                      }}
                    >
                      View Publication
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}
