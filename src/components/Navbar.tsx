'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { GitHub, LinkedIn, X, Email, Menu, Close } from '@mui/icons-material'

interface Props {
  window?: () => Window
  children?: React.ReactElement<{ elevation?: number; style?: any }>
}

function ElevationScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 8 : 0,
        style: {
          backgroundColor: trigger ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.3)',
          backdropFilter: trigger ? 'blur(20px)' : 'blur(10px)',
          borderBottom: trigger ? '1px solid rgba(255, 215, 0, 0.2)' : 'none',
          transition: 'all 0.3s ease-in-out',
        },
      })
    : null
}

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { 
    icon: <GitHub />, 
    href: 'https://github.com/ishan1414', 
    label: 'GitHub' 
  },
  { 
    icon: <LinkedIn />, 
    href: 'https://linkedin.com/in/ishan-sarode', 
    label: 'LinkedIn' 
  },
  { 
    icon: <X />, 
    href: 'https://x.com/SarodeIshan', 
    label: 'X' 
  },
  { 
    icon: <Email />, 
    href: 'mailto:ishanvsarode@gmail.com', 
    label: 'Email' 
  },
]

export default function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
      }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            fontSize: '1.8rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          &lt;/Ishan Sarode&gt;
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ color: '#FFD700' }}
        >
          <Close />
        </IconButton>
      </Box>
      
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {pages.map((page) => (
          <ListItem key={page.label} disablePadding>
            <ListItemButton
              component={Link}
              href={page.href}
              onClick={handleDrawerToggle}
              sx={{
                mx: 1,
                mb: 1,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <ListItemText 
                primary={page.label}
                primaryTypographyProps={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.2)' }} />
      
      <Box sx={{ 
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}>
        {socialLinks.map((social) => (
          <IconButton
            key={social.label}
            component="a"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            {React.cloneElement(social.icon, {
              fontSize: 'medium'
            })}
          </IconButton>
        ))}
      </Box>
    </Box>
  )

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ zIndex: 1200 }}>
          <Toolbar sx={{ padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' } }}>
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  color: '#FFD700',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  },
                }}
              >
                <Menu />
              </IconButton>
            )}

            {/* Logo */}
            <Box sx={{ 
              flex: isMobile ? '1 1 auto' : '0 0 auto', 
              ml: { xs: 0, md: 4 }, 
              mr: { xs: 2, md: 3 },
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Dancing Script", cursive',
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
                  fontWeight: 700,
                  color: '#FFD700',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '1px',
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                &lt;/Ishan Sarode&gt;
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                justifyContent: 'center',
                gap: { xs: 1, sm: 2 } 
              }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={Link}
                    href={page.href}
                    sx={{
                      color: '#ffffff',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontFamily: '"Inter", sans-serif',
                      position: 'relative',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '4px',
                        left: '50%',
                        backgroundColor: '#FFD700',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop Social Media Links */}
            {!isMobile && (
              <Box sx={{ 
                flex: '0 0 auto', 
                display: 'flex', 
                gap: { xs: 0.5, sm: 1 },
                ml: { xs: 2, md: 4 } 
              }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#ffffff',
                      padding: { xs: '6px', sm: '8px' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        transform: 'translateY(-2px) scale(1.1)',
                      },
                    }}
                  >
                    {React.cloneElement(social.icon, {
                      fontSize: 'small'
                    })}
                  </IconButton>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
