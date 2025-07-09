'use client';

import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Paper,
  InputAdornment,
  keyframes,
} from '@mui/material';
import {
  Email,
  Person,
  Message,
  Send,
  CheckCircle,
} from '@mui/icons-material';

// Define keyframe animations
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

interface ContactFormProps {
  visible: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ visible }) => {
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Animation refs
  const formRef = useRef<HTMLDivElement>(null);
  const nameFieldRef = useRef<HTMLDivElement>(null);
  const emailFieldRef = useRef<HTMLDivElement>(null);
  const messageFieldRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Trigger animations after initial render
  React.useEffect(() => {
    // Setup floating animations for form elements
    const animateFloating = () => {
      if (formRef.current) {
        formRef.current.style.transform = `translateY(${Math.sin(Date.now() / 5000) * 8}px)`;
      }
      if (nameFieldRef.current) {
        nameFieldRef.current.style.transform = `translateY(${Math.sin(Date.now() / 1500) * 5}px)`;
      }
      if (emailFieldRef.current) {
        emailFieldRef.current.style.transform = `translateY(${Math.sin((Date.now() / 1500) + 1) * 5}px)`;
      }
      if (messageFieldRef.current) {
        messageFieldRef.current.style.transform = `translateY(${Math.sin((Date.now() / 1500) + 2) * 5}px)`;
      }
      if (buttonRef.current) {
        buttonRef.current.style.transform = `translateY(${Math.sin((Date.now() / 1200) + 3) * 4}px)`;
        buttonRef.current.style.boxShadow = `0 ${5 + Math.sin(Date.now() / 1000) * 3}px ${10 + Math.sin(Date.now() / 1000) * 5}px rgba(255, 215, 0, ${0.2 + Math.sin(Date.now() / 1000) * 0.05})`;
      }
      requestAnimationFrame(animateFloating);
    };
    
    const animation = requestAnimationFrame(animateFloating);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form validation
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSuccess(true);
      setSnackbarOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={0}
      ref={formRef}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: 3,
        p: { xs: 3, md: 5 },
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease',
        animation: `${floatAnimation} 6s ease-in-out infinite`,
        '&:hover': {
          boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255, 215, 0, 0.1)',
        },
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%)',
          top: '-50px',
          right: '-50px',
          animation: `${pulseAnimation} 8s ease-in-out infinite`,
        }}
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,165,0,0.08) 0%, rgba(255,165,0,0) 70%)',
          bottom: '-30px',
          left: '30%',
          animation: `${pulseAnimation} 6s ease-in-out infinite 2s`,
        }}
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
          top: '30%',
          left: '-20px',
          animation: `${pulseAnimation} 10s ease-in-out infinite 1s`,
        }}
      />

      <Typography
        variant="h5"
        sx={{ 
          color: '#FFD700', 
          mb: 4, 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            borderRadius: '3px',
          }
        }}
      >
        <Message sx={{ mr: 1.5 }} /> Send Me a Message
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ position: 'relative', zIndex: 2, maxWidth: '600px', mx: 'auto' }}>
        {/* Name Field */}
        <Box ref={nameFieldRef} sx={{ mb: 3, transition: 'transform 0.5s ease-in-out' }}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.1)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ 
                    color: 'rgba(255, 215, 0, 0.7)',
                    transition: 'transform 0.3s ease-in-out',
                  }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        {/* Email Field */}
        <Box ref={emailFieldRef} sx={{ mb: 3, transition: 'transform 0.5s ease-in-out' }}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.1)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ 
                    color: 'rgba(255, 215, 0, 0.7)',
                    transition: 'transform 0.3s ease-in-out',
                  }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        {/* Subject Field */}
        <Box sx={{ mb: 3, transition: 'all 0.3s ease-in-out' }}>
          <TextField
            name="subject"
            label="Subject (Optional)"
            variant="outlined"
            fullWidth
            value={formData.subject}
            onChange={handleChange}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.1)',
                },
              },
            }}
          />
        </Box>
        
        {/* Message Field */}
        <Box ref={messageFieldRef} sx={{ mb: 4, transition: 'transform 0.5s ease-in-out' }}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            error={!!formErrors.message}
            helperText={formErrors.message}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 215, 0, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFD700',
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.1)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                  <Message sx={{ 
                    color: 'rgba(255, 215, 0, 0.7)',
                    transition: 'transform 0.3s ease-in-out',
                  }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        {/* Submit Button with Loading/Success States */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Box ref={buttonRef} sx={{ 
            position: 'relative', 
            display: 'inline-block', 
            transition: 'all 0.5s ease-in-out',
          }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading || success}
              sx={{
                py: 1.8,
                px: 7,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '30px',
                backgroundColor: success ? '#4CAF50' : '#FFD700',
                backgroundImage: success 
                  ? 'linear-gradient(45deg, #4CAF50, #45a049)'
                  : 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: '#000',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 5px 15px rgba(255, 215, 0, 0.2)',
                '&:hover': {
                  backgroundColor: success ? '#45a049' : '#FFA500',
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: '0 10px 20px rgba(255, 215, 0, 0.3), 0 0 25px rgba(255, 215, 0, 0.2)',
                },
                '&:active': {
                  transform: 'translateY(-1px) scale(0.98)',
                },
                '&.Mui-disabled': {
                  backgroundColor: success ? '#4CAF50' : 'rgba(255, 215, 0, 0.5)',
                  color: success ? '#fff' : '#000',
                },
              }}
              startIcon={
                success ? <CheckCircle /> : 
                !loading && <Send sx={{ 
                  transition: 'transform 0.3s ease-in-out'
                }} />
              }
            >
              {success ? 'Sent Successfully' : 'Send Message'}
            </Button>
            {loading && (
              <CircularProgress
                size={28}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-14px',
                  marginLeft: '-14px',
                  color: '#FFD700',
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactForm;
