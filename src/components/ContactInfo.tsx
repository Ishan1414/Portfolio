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
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

// Define animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

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

interface ContactInfoProps {
  visible: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ visible }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        p: 3,
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        flex: 1,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
        },
        animation: `${floatAnimation} 8s ease-in-out infinite 1s`,
      }}
    >
      <Typography
        variant="h5"
        sx={{ 
          color: '#FFD700', 
          mb: 3, 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '0',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #FFD700, transparent)',
            borderRadius: '3px',
          }
        }}
      >
        <Phone sx={{ mr: 1.5 }} /> Get In Touch
      </Typography>

      {/* Contact Details */}
      <Box sx={{ mb: 3 }}>
        <Box 
          component="a"
          href="mailto:ishanvsarode@gmail.com"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2.5,
            textDecoration: 'none',
            p: 1.5,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.05)',
              transform: 'translateX(5px)',
            }
          }}
        >
          <Avatar
            sx={{
              bgcolor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFD700',
              width: 42,
              height: 42,
              mr: 2,
              transition: 'all 0.3s ease',
              '.MuiBox-root:hover &': {
                bgcolor: 'rgba(255, 215, 0, 0.2)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <Email />
          </Avatar>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                mb: 0.5,
                fontSize: '0.85rem',
              }}
            >
              Email:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '.MuiBox-root:hover &': {
                  color: '#FFD700',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(255, 215, 0, 0.4)',
                },
              }}
            >
              ishanvsarode@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box 
          component="a"
          href="tel:+19303332724"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2.5,
            textDecoration: 'none',
            p: 1.5,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.05)',
              transform: 'translateX(5px)',
            }
          }}
        >
          <Avatar
            sx={{
              bgcolor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFD700',
              width: 42,
              height: 42,
              mr: 2,
              transition: 'all 0.3s ease',
              '.MuiBox-root:hover &': {
                bgcolor: 'rgba(255, 215, 0, 0.2)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <Phone />
          </Avatar>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                mb: 0.5,
                fontSize: '0.85rem',
              }}
            >
              Phone:
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'white', 
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '.MuiBox-root:hover &': {
                  color: '#FFD700',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(255, 215, 0, 0.4)',
                },
              }}
            >
              +1 (930) 333-2724
            </Typography>
          </Box>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 1.5,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.05)',
              transform: 'translateX(5px)',
            }
          }}
        >
          <Avatar
            sx={{
              bgcolor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFD700',
              width: 42,
              height: 42,
              mr: 2,
              transition: 'all 0.3s ease',
              '.MuiBox-root:hover &': {
                bgcolor: 'rgba(255, 215, 0, 0.2)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <LocationOn />
          </Avatar>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                mb: 0.5,
                fontSize: '0.85rem',
              }}
            >
              Location:
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'white', 
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '.MuiBox-root:hover &': {
                  color: '#FFD700',
                },
              }}
            >
              San Francisco, CA
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Call to action */}
      <Box sx={{ 
        textAlign: 'center', 
        backgroundColor: 'rgba(255, 215, 0, 0.05)', 
        p: 2, 
        borderRadius: 2,
        animation: `${pulseAnimation} 4s ease-in-out infinite`,
      }}>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Feel free to reach out through any of these channels!
        </Typography>
      </Box>
    </Paper>
  );
};

export default ContactInfo;
