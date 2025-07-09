'use client';

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  keyframes,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  X,
  Facebook,
  Instagram,
  Language,
} from '@mui/icons-material';

// Define animations
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

interface SocialMediaSectionProps {
  visible: boolean;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ visible }) => {
  // Social media data
  const socialMedia = [
    {
      name: "GitHub",
      icon: <GitHub />,
      color: "#ffffff",
      hoverColor: "#6e5494",
      url: "https://github.com/Ishan1414",
      handle: "@Ishan1414"
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      color: "#0077B5",
      hoverColor: "#0077B5",
      url: "https://linkedin.com/in/ishan-sarode",
      handle: "Ishan Sarode"
    },
    {
      name: "X",
      icon: <X />,
      color: "#ffffff",
      hoverColor: "#ffffff",
      url: "https://x.com/SarodeIshan",
      handle: "@SarodeIshan"
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      color: "#E1306C",
      hoverColor: "#E1306C",
      url: "https://instagram.com/ishan_sarode14",
      handle: "@Ishan_Sarode14"
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      color: "#4267B2",
      hoverColor: "#4267B2",
      url: "https://facebook.com/ishan.sarode.3",
      handle: "@IshanSarode"
    },
    {
      name: "Website",
      icon: <Language />,
      color: "#FFD700",
      hoverColor: "#FFA500",
      url: "https://ishansarode.com",
      handle: "@IshanSarode"
    }
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 15px 30px rgba(0,0,0,0.4), 0 0 30px rgba(255, 215, 0, 0.05)',
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{ 
          color: '#FFD700', 
          mb: 4, 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            borderRadius: '3px',
          }
        }}
      >
        <Language sx={{ mr: 1.5 }} /> 
        Connect With Me
      </Typography>
        
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 2.5
      }}>
        {socialMedia.map((social, index) => (
          <Box
            key={social.name}
            component="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2.5,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              textDecoration: 'none',
              color: 'white',
              overflow: 'hidden',
              position: 'relative',
              backdropFilter: 'blur(5px)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(45deg, ${social.color}22, transparent)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              },
              '&:hover': {
                transform: 'translateY(-5px) scale(1.03)',
                boxShadow: `0 10px 20px ${social.color}33, 0 0 15px ${social.color}22`,
                border: `1px solid ${social.color}66`,
                '&::before': {
                  opacity: 1,
                },
              },
              animation: `${floatAnimation} ${6 + index * 0.5}s ease-in-out infinite ${index * 0.5}s`,
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                color: social.color,
                mr: 2,
                transition: 'background-color 0.3s ease',
                '.MuiBox-root:hover &': {
                  bgcolor: `${social.hoverColor}22`,
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                },
                '.MuiBox-root:hover & .MuiSvgIcon-root': {
                  transform: 'rotate(360deg) scale(1.2)',
                },
              }}
            >
              {social.icon}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                {social.name}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  opacity: 0.7,
                  transition: 'color 0.3s ease',
                  '.MuiBox-root:hover &': {
                    color: social.color,
                  },
                }}
              >
                {social.handle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default SocialMediaSection;
