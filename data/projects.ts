import { ReactNode } from 'react';
import { Web, Code, Storage, Phone, CloudQueue, Psychology } from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  icon: React.ComponentType<SvgIconProps>;
  gradient: string;
  accent: string;
  features: string[];
  impact: string;
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured: boolean;
  challenges?: string[];
  timeline?: string;
  teamSize?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Rental Management System',
    category: 'Full-Stack Platform',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Cypress', 'Selenium'],
    description: 'End-to-end rental platform with enhanced UX, reducing user drop-off by 75%',
    longDescription: 'A comprehensive rental management solution designed to streamline property listings, tenant applications, and lease management. The system features advanced filtering, real-time notifications, and automated payment processing to enhance the rental experience for both property owners and tenants.',
    icon: Web,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: '#667eea',
    features: ['90% Code Coverage', 'UI/UX Optimized', 'E2E Testing'],
    impact: '75% reduction in drop-off rates',
    githubUrl: 'https://github.com/ishansarode/smart-rental-system',
    liveUrl: 'https://smart-rental-demo.vercel.app',
    featured: true,
    challenges: [
      'Implementing secure payment processing',
      'Optimizing database queries for large property databases',
      'Creating responsive design across all screen sizes'
    ],
    timeline: '3 months',
    teamSize: 'Team of 3'
  },
  {
    id: 2,
    title: 'Movie Booking Management System',
    category: 'MERN Stack Application',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'Comprehensive booking system with Google auth, Stripe payments, and multi-role access',
    longDescription: 'An end-to-end movie ticket booking platform featuring seat selection, multiple payment options, and a responsive design. The system includes an admin panel for theater management and detailed analytics on booking patterns and customer preferences.',
    icon: Code,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: '#f093fb',
    features: ['Google Auth', 'Stripe Integration', 'Multi-Role Access'],
    impact: '25% faster development',
    githubUrl: 'https://github.com/ishansarode/movie-booking-system',
    liveUrl: 'https://movie-booking-demo.vercel.app',
    featured: true,
    challenges: [
      'Implementing real-time seat availability',
      'Creating a secure authentication system',
      'Optimizing payment processing workflow'
    ],
    timeline: '2.5 months',
    teamSize: 'Solo project'
  },
  {
    id: 3,
    title: 'Airport Database Management System',
    category: 'Database Application',
    technologies: ['MySQL', 'React', 'Node.js'],
    description: 'Robust airline data management with optimized retrieval and passenger interface',
    longDescription: 'A comprehensive database system designed to manage flight schedules, passenger information, and airline operations. The system features advanced query optimization, real-time flight tracking, and integration with external weather APIs for delay predictions.',
    icon: Storage,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accent: '#4facfe',
    features: ['Database Design', 'Data Optimization', 'Flight Info System'],
    impact: 'Optimized data handling',
    githubUrl: 'https://github.com/ishansarode/airport-database-system',
    liveUrl: 'https://airport-db-demo.vercel.app',
    featured: true,
    challenges: [
      'Designing an efficient database schema',
      'Handling large volumes of flight data',
      'Creating an intuitive admin interface'
    ],
    timeline: '3 months',
    teamSize: 'Team of 2'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard',
    longDescription: 'This comprehensive e-commerce platform was built to handle the complete online shopping experience. The application features a modern, responsive design with intuitive navigation and seamless user interactions. Key functionalities include user registration and authentication, product catalog with advanced filtering and search capabilities, shopping cart management, secure payment processing through Stripe, and a comprehensive admin dashboard for inventory and order management.',
    icon: Web,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    accent: '#43e97b',
    features: [
      'User authentication',
      'Product management',
      'Payment processing',
      'Admin dashboard'
    ],
    impact: 'Increased online sales by 45%',
    githubUrl: 'https://github.com/ishansarode/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: false,
    challenges: [
      'Implementing secure payment processing',
      'Optimizing database queries for large product catalogs',
      'Creating responsive design across all screen sizes'
    ],
    timeline: '3 months',
    teamSize: 'Solo project'
  },
  {
    id: 5,
    title: 'Mobile Task Manager',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    description: 'Cross-platform mobile app for task management with real-time synchronization',
    longDescription: 'A powerful task management application designed for both iOS and Android platforms. The app provides seamless task organization with real-time synchronization across devices, offline functionality for uninterrupted productivity, and collaborative features for team projects. Built using React Native for cross-platform compatibility and Firebase for backend services.',
    icon: Phone,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    accent: '#fa709a',
    features: [
      'Cross-platform',
      'Real-time sync',
      'Offline support',
      'Collaborative features'
    ],
    impact: 'Improved team productivity by 30%',
    githubUrl: 'https://github.com/ishansarode/task-manager-app',
    liveUrl: 'https://task-manager-demo.vercel.app',
    featured: false,
    challenges: [
      'Implementing offline-first architecture',
      'Optimizing performance for both platforms',
      'Handling real-time synchronization conflicts'
    ],
    timeline: '4 months',
    teamSize: 'Team of 2'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
