'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AtomAnimation from '../components/AtomAnimation';
import AboutPreview from '../components/AboutPreview';
import ExperiencePreview from '../components/ExperiencePreview';
import ProjectsPreview from '../components/ProjectsPreview';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 4 }, px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: { xs: '100vh', sm: '90vh' },
            gap: { xs: 4, md: 6, lg: 8 },
            flexDirection: { xs: 'column', md: 'row' },
            px: { xs: 4, sm: 6, md: 8, lg: 10 },
            justifyContent: 'center',
            pt: { xs: 16, sm: 12, md: 4 }, // Significantly increased top padding for mobile
            mt: { xs: 0, md: 0 },
          }}
        >
          {/* Left Side - Hero Section */}
          <HeroSection />

          {/* Right Side - Atom Animation */}
          <AtomAnimation />
        </Box>
      </Container>

      {/* About Preview Section */}
      <AboutPreview />

      {/* Experience Preview Section */}
      <ExperiencePreview />

      {/* Projects Preview Section */}
      <ProjectsPreview />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
