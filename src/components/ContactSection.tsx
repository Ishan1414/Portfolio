'use client';

import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, GitHub, LinkedIn, X, Send } from '@mui/icons-material';

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 32 }} />,
    title: 'Email',
    value: 'ishanvsarode@gmail.com',
    href: 'mailto:ishanvsarode@gmail.com',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: '#667eea',
  },
  {
    icon: <Phone sx={{ fontSize: 32 }} />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: '#f093fb',
  },
  {
    icon: <LocationOn sx={{ fontSize: 32 }} />,
    title: 'Location',
    value: 'New York, NY',
    href: '#',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accent: '#4facfe',
  },
];

const socialLinks = [
  { 
    icon: <GitHub sx={{ fontSize: 24 }} />, 
    href: 'https://github.com/Ishan1414', 
    label: 'GitHub',
    color: '#333'
  },
  { 
    icon: <LinkedIn sx={{ fontSize: 24 }} />, 
    href: 'https://linkedin.com/in/ishan-sarode', 
    label: 'LinkedIn',
    color: '#0077b5'
  },
  { 
    icon: <X sx={{ fontSize: 24 }} />, 
    href: 'https://x.com/SarodeIshan', 
    label: 'X',
    color: '#1da1f2'
  },
];

export default function ContactSection() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.03) 0%, rgba(255, 165, 0, 0.08) 100%)',
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 4, pb: 2 }}>
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
            Get In Touch
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
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </Typography>
        </motion.div>

        {/* Contact Cards */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 4,
            mb: 8 
          }}
        >
          {contactInfo.map((contact, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: contact.href !== '#' ? 'pointer' : 'default',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: `1px solid ${contact.accent}40`,
                      boxShadow: `0 20px 40px ${contact.accent}20`,
                      '& .contact-icon': {
                        transform: 'scale(1.1)',
                        color: contact.accent,
                      },
                      '& .contact-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                  {...(contact.href !== '#' && {
                    component: 'a',
                    href: contact.href,
                    target: contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank',
                    rel: 'noopener noreferrer',
                    sx: { textDecoration: 'none' }
                  })}
                >
                  {/* Gradient Overlay */}
                  <Box
                    className="contact-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: contact.gradient,
                      opacity: 0.05,
                      transition: 'opacity 0.4s ease',
                      zIndex: 0,
                    }}
                  />

                  <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Box
                      className="contact-icon"
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: 2,
                        background: `${contact.accent}15`,
                        border: `1px solid ${contact.accent}30`,
                        color: contact.accent,
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {contact.icon}
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
                      {contact.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {contact.value}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Send />}
              href="mailto:ishanvsarode@gmail.com"
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
              Send Message
            </Button>
          </Box>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 6, mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Follow me on social media
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5, pb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 2,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'text.secondary',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `${social.color}20`,
                      color: social.color,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 24px ${social.color}30`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </motion.div>
        
        {/* Bottom spacing */}
        <Box sx={{ height: 20 }}></Box>
      </Container>
    </Box>
  );
}
