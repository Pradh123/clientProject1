import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  ArrowUpward,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container maxWidth="xl">
        {/* ===== Top Section: 4 Columns ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Column 1: About Us */}
          <div>
            <Typography
              variant="h6"
              className="font-oswald text-xl mb-4 text-orange-400"
            >
              About Us
            </Typography>
            <p className="text-gray-300 leading-relaxed font-open-sans">
              A Creative Square is a modern marketing and design agency helping
              brands grow through creative strategy, digital design, and
              performance marketing.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <Typography
              variant="h6"
              className="font-oswald text-xl mb-4 text-orange-400"
            >
              Services
            </Typography>
            <ul className="space-y-2 text-gray-300 font-open-sans">
              <li className="hover:text-orange-400 cursor-pointer transition">
                Social Media Marketing
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                SEO
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Website Design & Development
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Performance Marketing
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Brand Management
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Content Creation
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio */}
          <div>
            <Typography
              variant="h6"
              className="font-oswald text-xl mb-4 text-orange-400"
            >
              Portfolio
            </Typography>
            <ul className="space-y-2 text-gray-300 font-open-sans">
              <li className="hover:text-orange-400 cursor-pointer transition">
                Social Media Portfolio
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                SEO Portfolio
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Web Design Portfolio
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Performance Marketing Portfolio
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Brand Mgmt Portfolio
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Content Portfolio
              </li>
            </ul>
          </div>

          {/* Column 4: Connect / Legal */}
          <div>
            <Typography
              variant="h6"
              className="font-oswald text-xl mb-4 text-orange-400"
            >
              Connect / Legal
            </Typography>
            <ul className="space-y-2 text-gray-300 font-open-sans">
              <li className="hover:text-orange-400 cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Careers
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Strip ===== */}
        <Box className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <Typography
            variant="body2"
            className="text-gray-400 font-open-sans text-center md:text-left"
          >
            © {new Date().getFullYear()} A Creative Square. All rights reserved.
          </Typography>

          {/* Social Media Icons */}
          <Box className="flex space-x-4">
            <IconButton
              className="text-gray-300 hover:text-orange-400 transition"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              className="text-gray-300 hover:text-orange-400 transition"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton
              className="text-gray-300 hover:text-orange-400 transition"
              aria-label="Twitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              className="text-gray-300 hover:text-orange-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Back to Top */}
          <IconButton
            className="text-gray-300 hover:text-orange-400 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
