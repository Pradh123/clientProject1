"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [portfolioAnchor, setPortfolioAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const servicesMenu = [
    {
      title: "Social Media Marketing",
      link: "marketing",
    },
    {
      title: "SEO",
      link: "seo",
    },
    {
      title: "Website Design & Development",
      link: "webdesign-devlopement",
    },
    {
      title: "Performance Marketing",
      link: "performance-marketing",
    },
    {
      title: "Brand Management",
      link: "brand-management",
    },
    {
      title: "Content Creation",
      link: "content-creation",
    },
  ];

  const handleServicesOpen = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handlePortfolioOpen = (event) => {
    setPortfolioAnchor(event.currentTarget);
  };

  const handlePortfolioClose = () => {
    setPortfolioAnchor(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        className="bg-white shadow-sm border-b border-gray-100"
        sx={{ backdropFilter: "blur(10px)" }}
      >
        <Container maxWidth="xl">
          <Toolbar className="px-0 py-3">
            {/* Logo - Left Side */}
            <Box className="flex items-center mr-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                  <img src="/logo2.jpeg" alt="" />
                </div>
                <Typography
                  variant="h6"
                  className="text-gray-900 font-oswald font-bold text-xl"
                >
                  A Creative Square
                </Typography>
              </div>
            </Box>

            {/* Desktop Navigation */}
            <Box className="hidden md:flex flex-1 justify-center items-center space-x-8">
              {/* ?Home Tab */}
              <Link to="/">
                <Button
                  className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
                  sx={{
                    "&:hover": {
                      color: "#f77b37",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>

              {/* about Tab */}
              <Link to="/about-us">
                <Button
                  className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
                  sx={{
                    "&:hover": {
                      color: "#f77b37",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  About Us
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
                  sx={{
                    "&:hover": {
                      color: "#f77b37",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>

              {/* Service Tab */}
              <Link to={"/service"}>
                <Button
                  className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
                  sx={{
                    "&:hover": {
                      color: "#f77b37",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Services
                  <KeyboardArrowDown onClick={handleServicesOpen} />
                </Button>
              </Link>

              {/* Book Consulting Button */}

              <Link to={"/service"}>
                <Button
                  className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
                  sx={{
                    "&:hover": {
                      color: "#f77b37",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Portfolio
                  <KeyboardArrowDown onClick={handleServicesOpen} />
                </Button>
              </Link>
            </Box>

            {/* CTA Button */}
            <Box className="hidden md:block ml-auto">
              <Button
                variant="contained"
                className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 normal-case"
                sx={{
                  backgroundColor: "#f77b37",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#e56a2a",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Book Consultation
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box className="md:hidden ml-auto">
              <Button onClick={handleMobileMenuOpen} className="!text-black">
                <MenuIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>

        {/* Services Dropdown Menu */}
        <Menu
          anchorEl={servicesAnchor}
          open={Boolean(servicesAnchor)}
          onClose={handleServicesClose}
          className="mt-2"
          PaperProps={{
            className: "rounded-lg shadow-xl border border-gray-200",
            sx: {
              minWidth: 250,
            },
          }}
        >
          {servicesMenu.map((service, index) => (
            <>
              <Link to={`/${service?.link}`}>
                <MenuItem
                  key={service}
                  onClick={handleServicesClose}
                  className="font-open-sans text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200 py-3"
                  sx={{
                    borderBottom:
                      index < servicesMenu.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  {service?.title}
                </MenuItem>
              </Link>
            </>
          ))}
        </Menu>

        {/* Portfolio Dropdown Menu */}
        <Menu
          anchorEl={portfolioAnchor}
          open={Boolean(portfolioAnchor)}
          onClose={handlePortfolioClose}
          className="mt-2"
          PaperProps={{
            className: "rounded-lg shadow-xl border border-gray-200",
            sx: {
              minWidth: 250,
            },
          }}
        >
          {servicesMenu.map((service, index) => (
            <MenuItem
              key={service}
              onClick={handlePortfolioClose}
              className="font-open-sans text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200 py-3"
              sx={{
                borderBottom:
                  index < servicesMenu.length - 1
                    ? "1px solid #f3f4f6"
                    : "none",
              }}
            >
              {service}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          className="!flex  !flex-col  justify-center items-center space-x-8  !p-5 !min-w-[70vw]"
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          {/* Services Dropdown */}
          <Link to="/">
            <Button
              className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
              sx={{
                "&:hover": {
                  color: "#f77b37",
                  backgroundColor: "transparent",
                },
              }}
            >
              Home
            </Button>
          </Link>
          <br />

          {/* about Tab */}
          <Link to="/about-us">
            <Button
              className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
              sx={{
                "&:hover": {
                  color: "#f77b37",
                  backgroundColor: "transparent",
                },
              }}
            >
              About Us
            </Button>
          </Link>
          <br />
          <Link to="/contact">
            <Button
              className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
              sx={{
                "&:hover": {
                  color: "#f77b37",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact Us
            </Button>
          </Link>
          <br />
          {/* Service Tab */}
          <Link to={"/service"}>
            <Button
              className="!text-black !hover:text-orange-500 !font-open-sans !font-semibold !text-base !normal-case !transition-colors !duration-200 flex items-center"
              sx={{
                "&:hover": {
                  color: "#f77b37",
                  backgroundColor: "transparent",
                },
              }}
            >
              Services
              <KeyboardArrowDown onClick={handleServicesOpen} />
            </Button>
          </Link>
        </Menu>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
