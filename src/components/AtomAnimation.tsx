'use client';

import React, { useState, useEffect } from 'react';
import { Box, Avatar, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const skillsIcons = [
  { 
    category: 'Languages',
    icons: [
      { name: 'Java', src: `${basePath}/devicon/java-original.svg`, color: '#ED8B00' },
      { name: 'JavaScript', src: `${basePath}/devicon/javascript-original.svg`, color: '#F7DF1E' },
      { name: 'TypeScript', src: `${basePath}/devicon/typescript-original.svg`, color: '#3178C6' },
      { name: 'HTML', src: `${basePath}/devicon/html5-original.svg`, color: '#E34F26' },
      { name: 'CSS', src: `${basePath}/devicon/css3-original.svg`, color: '#1572B6' }
    ], 
    orbit: 200, 
    size: 45, 
    speed: 9, 
    delay: 0, 
    startAngle: 0 
  },
  { 
    category: 'Frameworks',
    icons: [
      { name: 'React', src: `${basePath}/devicon/react-original.svg`, color: '#61DAFB' },
      { name: 'Node.js', src: `${basePath}/devicon/nodejs-original.svg`, color: '#339933' },
      { name: 'Express', src: 'https://cdn.simpleicons.org/express/FFFFFF', color: '#000000' },
      { name: 'Spring', src: `${basePath}/devicon/spring-original.svg`, color: '#6DB33F' },
      { name: 'JUnit', src: `${basePath}/devicon/java-original.svg`, color: '#25A162' },
      { name: 'Jest', src: `${basePath}/devicon/jest-plain.svg`, color: '#C21325' },
      { name: 'Cypress', src: `${basePath}/devicon/cypressio-original.svg`, color: '#ffffff' }
    ], 
    orbit: 160, 
    size: 42, 
    speed: -7, 
    delay: 0, 
    startAngle: 45 
  },
  { 
    category: 'Databases',
    icons: [
      { name: 'MSSQL', src: `${basePath}/devicon/microsoftsqlserver-plain.svg`, color: '#CC2927' },
      { name: 'PostgreSQL', src: `${basePath}/devicon/postgresql-original.svg`, color: '#336791' },
      { name: 'MySQL', src: `${basePath}/devicon/mysql-original.svg`, color: '#4479A1' },
      { name: 'MongoDB', src: `${basePath}/devicon/mongodb-original.svg`, color: '#47A248' },
      { name: 'Redis', src: `${basePath}/devicon/redis-original.svg`, color: '#DC382D' }
    ], 
    orbit: 120, 
    size: 38, 
    speed: 7.5, 
    delay: 0, 
    startAngle: 90 
  },
  { 
    category: 'Cloud',
    icons: [
      { name: 'Docker', src: `${basePath}/devicon/docker-original.svg`, color: '#2496ED' },
      { name: 'Kubernetes', src: `${basePath}/devicon/kubernetes-plain.svg`, color: '#326CE5' },
      { name: 'AWS', src: `${basePath}/devicon/amazonwebservices-plain-wordmark.svg`, color: '#FF9900' },
      { name: 'Azure', src: `${basePath}/devicon/azure-original.svg`, color: '#0078D4' },
      { name: 'GCP', src: `${basePath}/devicon/googlecloud-original.svg`, color: '#4285F4' }
    ], 
    orbit: 80, 
    size: 35, 
    speed: -6, 
    delay: 0, 
    startAngle: 135 
  },
];

export default function AtomAnimation() {
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime(prev => prev + 0.02);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 350, sm: 400, md: 500 },
        maxWidth: { xs: '100%', md: '50%' },
        mt: { xs: 6, sm: 0 },
        mb: { xs: 4},// Add top margin only on mobile devices
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: 320, sm: 400, md: 500 },
            height: { xs: 320, sm: 400, md: 500 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Central Profile Picture */}
          <Box
            sx={{
              position: 'absolute',
              zIndex: 10,
            }}
          >
            <Avatar
              src={`${basePath}/photo.jpg`}
              alt="Ishan Sarode"
              sx={{
                width: 100,
                height: 100,
                border: '4px solid #FFD700',
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)',
                imageRendering: 'auto'
              }}
            />
          </Box>

          {/* Skill Orbits */}
          {skillsIcons.map((skillGroup, groupIndex) => (
            <Box key={groupIndex}>
              <Box
                sx={{
                  position: 'absolute',
                  width: skillGroup.orbit * 2,
                  height: skillGroup.orbit * 2,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    animation: 'rotate 20s linear infinite',
                  }
                }}
              />

              {skillGroup.icons.map((iconData, iconIndex) => {
                const angle = (skillGroup.startAngle + (iconIndex * 360 / skillGroup.icons.length) + (animationTime * skillGroup.speed)) * (Math.PI / 180);
                const x = Math.cos(angle) * skillGroup.orbit;
                const y = Math.sin(angle) * skillGroup.orbit;

                return (
                  <Tooltip
                    key={iconIndex}
                    title={iconData.name}
                    placement="top"
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: iconData.color,
                          color: iconData.name === 'JavaScript' ? '#000' : '#fff',
                          fontWeight: 'bold',
                          fontSize: '0.8rem',
                          '& .MuiTooltip-arrow': {
                            color: iconData.color,
                          },
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: skillGroup.size,
                        height: skillGroup.size,
                        borderRadius: '50%',
                        background: `linear-gradient(45deg, ${iconData.color}22, ${iconData.color}11)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: `0 2px 8px ${iconData.color}33`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        border: `2px solid ${iconData.color}66`,
                        zIndex: 2,
                        '&:hover': {
                          transform: 'translate(-50%, -50%) scale(1.2)',
                          boxShadow: `0 4px 16px ${iconData.color}66`,
                          background: `linear-gradient(45deg, ${iconData.color}44, ${iconData.color}22)`,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={iconData.src}
                        alt={iconData.name}
                        sx={{
                          width: skillGroup.size * 0.6,
                          height: skillGroup.size * 0.6,
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                        }}
                      />
                    </Box>
                  </Tooltip>
                );
              })}
            </Box>
          ))}
        </Box>
      </motion.div>

      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
}
