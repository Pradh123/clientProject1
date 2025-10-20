

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  Send
} from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const brandColors = {
    primary: '#f77b37',
    secondary: '#fedd24',
    dark: '#222222',
    light: '#ffffff'
  };

  const services = [
    'Social Media Marketing',
    'SEO',
    'Website Design',
    'Performance Marketing',
    'Brand Management',
    'Content Creation',
    'Other'
  ];

  const teamImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
      alt: 'Creative Team Meeting',
      title: 'Strategy Sessions'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
      alt: 'Design Workspace',
      title: 'Creative Design'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556655848-f3a79cc6d4a3?w=400&h=400&fit=crop',
      alt: 'Development Team',
      title: 'Technical Excellence'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      alt: 'Client Collaboration',
      title: 'Client Partnerships'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
      alt: 'Project Launch',
      title: 'Successful Launches'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
      alt: 'Team Celebration',
      title: 'Team Achievements'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="py-12 md:py-20"
        style={{
          background: `linear-gradient(135deg, ${brandColors.light} 0%, #f8f9fa 100%)`
        }}
      >
        <Container maxWidth="lg">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: brandColors.dark
                }}
              >
                Let's Create Something Amazing Together
              </h1>
              <p 
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                style={{
                  fontFamily: 'Open Sans, sans-serif'
                }}
              >
                We'd love to discuss your next big idea — drop us a message and let's make it happen.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="lg:w-1/2">
              <div 
                className="rounded-2xl p-8 relative min-h-[400px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(45deg, ${brandColors.primary}20, ${brandColors.secondary}20)`
                }}
              >
                {/* Desk Mockup */}
                <div className="w-full max-w-md h-64 bg-gray-800 rounded-xl relative shadow-2xl">
                  {/* Screen */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 h-40 bg-gray-900 rounded-lg border-2 border-gray-600 flex flex-col items-center justify-center gap-3">
                    {/* Design Elements */}
                    <div className="flex gap-2">
                      {[brandColors.primary, brandColors.secondary, '#4fd1c7', '#ed8936'].map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p 
                      className="text-white text-center font-semibold"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      Creative Design in Progress
                    </p>
                  </div>
                  
                  {/* Keyboard */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gray-600 rounded" />
                </div>
                
                {/* Floating Elements */}
                <div 
                  className="absolute top-8 right-8 w-12 h-12 rounded-full opacity-10"
                  style={{ backgroundColor: brandColors.primary }}
                />
                <div 
                  className="absolute bottom-12 left-6 w-8 h-8 rounded-full opacity-10"
                  style={{ backgroundColor: brandColors.secondary }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form + Details Section */}
      <section className="py-12 md:py-20">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <Card className="shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h2 
                    className="text-3xl font-bold mb-2"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      color: brandColors.dark
                    }}
                  >
                    Get In Touch
                  </h2>
                  <p 
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Company Name (Optional)"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <TextField
                        fullWidth
                        select
                        label="Select Service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      >
                        {services.map((service) => (
                          <MenuItem key={service} value={service} style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            {service}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>

                    <div className="mb-6">
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        className="rounded-lg"
                        InputProps={{
                          style: { fontFamily: 'Open Sans, sans-serif', borderRadius: '8px' }
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      startIcon={<Send />}
                      className="py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: brandColors.primary,
                        fontFamily: 'Open Sans, sans-serif',
                        textTransform: 'none'
                      }}
                      sx={{
                        '&:hover': {
                          backgroundColor: brandColors.secondary,
                          color: brandColors.dark
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-5">
              <div className="h-full flex flex-col justify-center">
                <h2 
                  className="text-3xl font-bold mb-8"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: brandColors.dark
                  }}
                >
                  Contact Information
                </h2>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brandColors.primary}20` }}
                    >
                      <Phone style={{ color: brandColors.primary, fontSize: '28px' }} />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-lg mb-1"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Phone
                      </h3>
                      <p 
                        className="text-gray-600"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        +91-7060640940
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brandColors.primary}20` }}
                    >
                      <Email style={{ color: brandColors.primary, fontSize: '28px' }} />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-lg mb-1"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Email
                      </h3>
                      <p 
                        className="text-gray-600"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        info@acreativesquare.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brandColors.primary}20` }}
                    >
                      <LocationOn style={{ color: brandColors.primary, fontSize: '28px' }} />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-lg mb-1"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Address
                      </h3>
                      <p 
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Budaun, Bareilly, U.P., India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-8">
                  <h3 
                    className="font-semibold text-lg mb-4"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex space-x-3">
                    {[
                      { icon: <Instagram />, color: '#E4405F' },
                      { icon: <LinkedIn />, color: '#0A66C2' },
                      { icon: <Twitter />, color: '#1DA1F2' },
                      { icon: <Facebook />, color: '#1877F2' }
                    ].map((social, index) => (
                      <IconButton
                        key={index}
                        className="transition-all duration-300 hover:scale-110"
                        style={{
                          backgroundColor: `${brandColors.primary}10`
                        }}
                        sx={{
                          '&:hover': {
                            backgroundColor: brandColors.primary,
                            color: 'white'
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Let's Connect Visually Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: 'Oswald, sans-serif',
                color: brandColors.dark
              }}
            >
              We're Everywhere You Need Us To Be
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Get a glimpse of our creative process and team culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamImages.map((image) => (
              <div
                key={image.id}
                className="relative group rounded-xl overflow-hidden cursor-pointer h-64"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: `${brandColors.primary}00` }}
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <h3 
                      className="text-white text-xl font-bold mb-2"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {image.title}
                    </h3>
                    <div 
                      className="w-12 h-1 mx-auto rounded-full"
                      style={{ backgroundColor: brandColors.secondary }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-12 md:py-20"
        style={{ backgroundColor: brandColors.dark }}
      >
        <Container maxWidth="lg">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Looking to collaborate or partner with us?
            </h2>
            <Button
              variant="contained"
              size="large"
              className="py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: brandColors.secondary,
                color: brandColors.dark,
                fontFamily: 'Open Sans, sans-serif',
                textTransform: 'none'
              }}
              sx={{
                '&:hover': {
                  backgroundColor: '#fce84d',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;