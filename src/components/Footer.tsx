'use client';

import React from 'react';
import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, X, Email, Favorite, Code } from '@mui/icons-material';

const socialLinks = [
  { 
    icon: <GitHub sx={{ fontSize: 20 }} />, 
    href: 'https://github.com/Ishan1414', 
    label: 'GitHub',
    color: '#333'
  },
  { 
    icon: <LinkedIn sx={{ fontSize: 20 }} />, 
    href: 'https://linkedin.com/in/ishan-sarode', 
    label: 'LinkedIn',
    color: '#0077b5'
  },
  { 
    icon: <X sx={{ fontSize: 20 }} />, 
    href: 'https://x.com/SarodeIshan', 
    label: 'X',
    color: '#1da1f2'
  },
  { 
    icon: <Email sx={{ fontSize: 20 }} />, 
    href: 'mailto:ishanvsarode@gmail.com', 
    label: 'Email',
    color: '#ea4335'
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 215, 0, 0.2)',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo & Description */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Dancing Script", cursive',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2rem' },
              }}
            >
              &lt;/Ishan Sarode&gt;
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                maxWidth: 400,
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Full Stack Developer passionate about creating innovative solutions 
              and building the future through code.
            </Typography>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 1.5,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'text.secondary',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `${social.color}20`,
                    color: social.color,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 16px ${social.color}30`,
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.2)', mb: 3 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}
          >
            © {currentYear} Ishan Sarode. All rights reserved.
          </Typography>

          {/* Made with Love */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}
          >
            <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
              Made with
            </Typography>
            <Favorite sx={{ fontSize: 16, color: '#e91e63' }} />
            <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
              and
            </Typography>
            <Code sx={{ fontSize: 16, color: '#FFD700' }} />
            <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
              by Ishan Sarode
            </Typography>
          </Box>
        </Box>

        {/* Tech Stack Credits */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', md: '0.8rem' },
              opacity: 0.7,
            }}
          >
            Built with Next.js, React, TypeScript, Material-UI & Framer Motion
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
