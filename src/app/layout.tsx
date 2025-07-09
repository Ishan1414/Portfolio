'use client'

import './globals.css'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'
import NewLoaderAnimation from '@/components/NewLoaderAnimation'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  
  // We're using a fixed 7-second loading animation, no need to check page load status
  useEffect(() => {
    // Keep the loading state true to allow the loader animation to run its course
  }, []);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoading ? (
            <NewLoaderAnimation finishLoading={handleFinishLoading} />
          ) : (
            <Box sx={{ position: 'relative', minHeight: '100vh' }}>
              {/* Particle Background on all pages except landing page */}
              {!isLandingPage && (
                <Box sx={{ 
                  position: 'fixed', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  zIndex: -1,
                  overflow: 'hidden'
                }}>
                  <ParticleBackground 
                    particleCount={60} 
                    colorPalette={['#FFD700', '#FFA500', '#ffffff']} 
                    includeShapes={true} 
                    interactive={true} 
                  />
                </Box>
              )}
              <Navbar />
              {children}
            </Box>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
