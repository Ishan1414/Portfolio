'use client';

import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        pt: 12,
        pb: 8,
        px: { xs: 3, sm: 5, md: 6 },
        maxWidth: '1200px',
        mx: 'auto',
        minHeight: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      {/* Main Flex Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 6,
          mt: 8,
        }}
      >
        {/* LEFT: Text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            component={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            Hi there! I'm{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(45deg,rgb(241, 210, 57),rgb(237, 153, 26))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '12px',
              }}
            >
              Ishan
            </span>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            I'm Ishan Vilas Sarode, a proactive full-stack developer passionate
            about creating dynamic web experiences. From frontend to backend, I
            thrive on solving complex problems with clean, efficient code. My
            expertise spans React, Next.js, and Node.js, and I'm always eager to
            learn more.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
          >
            When I'm not immersed in work, I'm exploring new ideas and staying
            curious. Life's about balance, and I love embracing every part of it.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}
          >
            I believe in waking up each day eager to make a difference!
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/ishan-sarode"
              target="_blank"
              rel="noopener"
              sx={{ color: 'text.primary', p: 0 }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/ishan1414"
              target="_blank"
              rel="noopener"
              sx={{ color: 'text.primary', p: 0 }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:ishanvsarode@gmail.com"
              sx={{ color: 'text.primary', p: 0 }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>

        {/* RIGHT: Static Photo */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          sx={{
            flexShrink: 0,
            width: '100%',
            maxWidth: { xs: '280px', md: '300px' },
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          <Box
            component="img"
            src="/grad.jpg"
            alt="Ishan Sarode"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* SKILLS SECTION */}
      <Box sx={{ mt: 10, mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'text.primary', textAlign: 'center' }}>
          Skills
        </Typography>

        {[
          {
            category: 'Languages',
            icons: [
              { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
              { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            ],
          },
          {
            category: 'Frameworks',
            icons: [
              { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Express', src: 'https://cdn.simpleicons.org/express/FFFFFF' },
              { name: 'Spring', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
              { name: 'JUnit', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }, // fallback for JUnit
              { name: 'Jest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
              { name: 'Cypress', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg' },
            ],
          },
          {
            category: 'Databases',
            icons: [
              { name: 'MSSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
              { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
              { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
            ],
          },
          {
            category: 'Cloud',
            icons: [
              { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
              { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
              { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
              { name: 'GCP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
            ],
          },
        ].map((group, idx) => (
          <Box key={idx} sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, mb: 2, color: 'text.primary', textAlign: 'center' }}
            >
              {group.category}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 4, md: 6 },
              }}
            >
              {group.icons.map((icon, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    width: 80,
                  }}
                >
                  <Box
                    component="img"
                    src={icon.src}
                    alt={icon.name}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                    {icon.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>


      {/* Personal Interests Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        sx={{ mt: 8 }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: 'text.primary', mb: 6, textAlign: 'center' }}
        >
          Beyond the Code
        </Typography>

        {/* Cricket - Image on Left */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 6 }, 
            alignItems: 'center', 
            mb: 8,
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          <Box
            sx={{
              flex: '0 0 auto',
              order: { xs: 1, md: 1 }
            }}
          >
            <Box
              component="img"
              src="/trophy.webp"
              alt="Cricket Trophy"
              sx={{
                width: { xs: 160, md: 200 },
                height: { xs: 160, md: 200 },
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 2 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                color: 'text.primary', 
                fontWeight: 600, 
                mb: 2,
                fontSize: '1.25rem'
              }}
            >
              Sports Enthusiast
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: { md: '90%' }
              }}
            >
              I love watching and playing all types of sports, especially cricket.
              Whether it's following the latest IPL matches, analyzing player statistics,
              or playing weekend games with friends, sports are a huge part of my life.
              The strategic elements of cricket particularly fascinate me – from field
              placements to reading the game situation. Sports keep me grounded and 
              teach me discipline, teamwork, perseverance, and strategic thinking that 
              I directly apply to my development work. The problem-solving mindset 
              required in sports translates perfectly to debugging code and architecting 
              software solutions.
            </Typography>
          </Box>
        </Box>

        {/* Finance - Image on Right */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 6 }, 
            alignItems: 'center',
            maxWidth: '1000px',
            mx: 'auto',
            mb: 8
          }}
        >
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 1 },
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                color: 'text.primary', 
                fontWeight: 600, 
                mb: 2,
                fontSize: '1.25rem'
              }}
            >
              Finance Enthusiast
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: { md: '90%' },
                ml: { md: 'auto' }
              }}
            >
              I'm deeply interested in finance and investing — analyzing economic
              trends, market patterns, and company fundamentals is like solving 
              complex puzzles. I enjoy studying different investment strategies,
              from value investing to growth stocks, and understanding how global
              events impact markets. Reading quarterly reports, following economic
              indicators, and tracking portfolio performance helps me sharpen my
              analytical and logical thinking skills. This financial literacy and
              data-driven decision making directly enhances my approach to software
              development, especially when working with data analytics and building
              scalable applications that handle financial calculations.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: '0 0 auto',
              order: { xs: 1, md: 2 }
            }}
          >
            <Box
              component="img"
              src="/images.png"
              alt="Finance Icon"
              sx={{
                width: { xs: 160, md: 200 },
                height: { xs: 160, md: 200 },
                borderRadius: '12px',
                objectFit: 'contain',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                p: 2,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
              }}
            />
          </Box>
        </Box>

        {/* Reading - Image on Left */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 6 }, 
            alignItems: 'center',
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          <Box
            sx={{
              flex: '0 0 auto',
              order: { xs: 1, md: 1 }
            }}
          >
            <Box
              component="img"
              src="/habits.jpg"
              alt="Books"
              sx={{
                width: { xs: 160, md: 200 },
                height: { xs: 160, md: 200 },
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 2 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                color: 'text.primary', 
                fontWeight: 600, 
                mb: 2,
                fontSize: '1.25rem'
              }}
            >
              Avid Reader
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'text.secondary', 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: { md: '90%' }
              }}
            >
              My reading journey started with the humorous "Diary of a Wimpy Kid" series,
              which sparked my love for storytelling. From there, I discovered Paulo Coelho's
              "The Alchemist," which opened my eyes to philosophical thinking and following
              one's dreams. The epic "Shiva Trilogy" by Amish Tripathi fascinated me with
              its blend of mythology and modern storytelling. Currently, I'm reading "Atomic Habits"
              by James Clear, diving deep into the science of habit formation and personal
              improvement. Reading has become my gateway to different perspectives, cultures,
              and ideas. It enhances my creativity, improves my communication skills, and
              provides valuable insights that I apply to both personal growth and professional
              problem-solving in software development.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
