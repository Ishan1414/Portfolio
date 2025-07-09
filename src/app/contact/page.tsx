'use client';

import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  useMediaQuery,
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import SocialMediaSection from '@/components/SocialMediaSection';
import { Email } from '@mui/icons-material';

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  // Set components to visible after a small delay to trigger animations
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(10, 10, 15, 0.7)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              mx: 'auto',
              mb: 6,
              px: 2
            }}
          >
            Have a question or want to work together? Feel free to reach out!
          </Typography>
        </motion.div>

        {/* Contact Grid */}
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm visible={isVisible} />
            </motion.div>
          </Grid>
          
          {/* Contact Info and Social Media */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactInfo visible={isVisible} />
            </motion.div>
            
            <Box sx={{ height: '30px' }} />
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SocialMediaSection visible={isVisible} />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}