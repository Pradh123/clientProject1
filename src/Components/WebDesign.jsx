import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  DesignServices as DesignIcon,
  Build as BuildIcon,
  Speed as SpeedIcon,
  Star as StarIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
  Web as WebIcon,
  Smartphone as MobileIcon,
  Storage as HostingIcon,
  Analytics as AnalyticsIcon,
} from "@mui/icons-material";

import { FreeBusinessConsultationForm } from "../Pages/Home/Home";

export const WebDesign = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentClient, setCurrentClient] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : null);
  };

  const nextClient = () => {
    setCurrentClient((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentClient((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const clients = [
    {
      name: "Darcey Stone Photography",
      category: "Photography Portfolio",
      image: "/api/placeholder/800/400",
      description: "Elegant portfolio website with gallery and booking system",
    },
    {
      name: "TechStart Solutions",
      category: "Corporate Website",
      image: "/api/placeholder/800/400",
      description: "Modern corporate website with service showcase",
    },
    {
      name: "Bella Couture",
      category: "E-commerce Fashion",
      image: "/api/placeholder/800/400",
      description: "Fashion e-commerce platform with integrated payments",
    },
    {
      name: "Foodie Delights",
      category: "Restaurant Website",
      image: "/api/placeholder/800/400",
      description: "Restaurant website with online ordering system",
    },
  ];

  const services = [
    {
      title: "Website Design",
      comment: "// UI/UX, Responsive, WordPress Customization",
      features: [
        "Custom UI/UX Design",
        "Fully Responsive Layout",
        "WordPress Theme Customization",
        "Mobile-First Approach",
        "Brand Identity Integration",
      ],
      icon: <DesignIcon className="text-purple-400" />,
    },
    {
      title: "Website Development",
      comment: "// WordPress, E-commerce, CMS, Custom Web Apps",
      features: [
        "WordPress Development",
        "E-commerce Solutions",
        "Custom CMS",
        "Web Applications",
        "API Integration",
      ],
      icon: <CodeIcon className="text-blue-400" />,
    },
    {
      title: "Performance & SEO",
      comment: "// Speed, SSL, SEO-ready structure",
      features: [
        "Website Speed Optimization",
        "SSL Certificate Setup",
        "SEO-Friendly Structure",
        "Core Web Vitals",
        "Technical SEO",
      ],
      icon: <SpeedIcon className="text-green-400" />,
    },
    {
      title: "Specialized Solutions",
      comment: "// Portfolio, Corporate, Landing Pages, E-commerce",
      features: [
        "Portfolio Websites",
        "Corporate Websites",
        "Landing Pages",
        "E-commerce Stores",
        "Web Portals",
      ],
      icon: <WebIcon className="text-orange-400" />,
    },
  ];

  const pricingPlans = [
    {
      name: "PRO PLAN",
      price: "INR 9,999/-",
      type: "one-time",
      features: [
        "10 pages (incl. 1 homepage)",
        "Custom home page design",
        "Responsive + Bootstrap design",
        "SEO-friendly structure",
        "Pop-up form, newsletter, contact form",
        "No SEO proposal",
      ],
      command: "npm run build-pro",
      color: "blue",
    },
    {
      name: "ULTRA PRO PLAN",
      price: "INR 19,999/-",
      type: "one-time",
      features: [
        "Includes PRO PLAN +",
        "5 extra pages (blog, login, registration, or custom)",
        "1 Domain Name",
        "1 Year Free Hosting (Hostinger)",
        "SEO Proposal",
        "Google My Business Setup",
        "Google Analytics Setup",
        "Google Ads Account Setup",
        "Google Search Console Setup",
        "Social Media Linking",
      ],
      command: "npm run build-ultra",
      color: "purple",
    },
    {
      name: "PREMIUM PLAN",
      price: "INR 24,999/-",
      type: "one-time",
      features: [
        "Includes PRO + ULTRA PRO +",
        "Customizations tailored to client needs",
        "Priority Support",
        "Advanced Features",
        "Extended Warranty",
      ],
      command: "npm run build-premium",
      color: "gold",
    },
  ];

  const trustPoints = [
    "WordPress & Custom Expertise",
    "Transparent Process",
    "Creative + Functional Design",
    "Dedicated Support",
  ];

  const testimonials = [
    'console.log("Client: They built a site beyond my imagination! - Sarah, Darcey Photography");',
    'console.log("Client: Professional, fast, and exceeded expectations! - Mike, TechStart Solutions");',
    'console.log("Client: Our e-commerce sales increased by 200%! - Priya, Bella Couture");',
    'console.log("Client: Best investment we made for our business! - Robert, Foodie Delights");',
  ];

  const faqs = [
    {
      question: "Do you design both WordPress and custom websites?",
      answer:
        "Yes, we specialize in both WordPress customization and completely custom-coded websites tailored to your needs.",
    },
    {
      question: "Will my site be mobile-friendly?",
      answer:
        "Absolutely! All our websites are 100% responsive and optimized for all devices - mobile, tablet, and desktop.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes, we offer comprehensive AMC (Annual Maintenance Contract) packages for ongoing support and updates.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-4 weeks depending on complexity and requirements.",
    },
    {
      question: "Do you provide source code and hosting?",
      answer:
        "Yes, we provide complete source code and can help with hosting setup or provide free hosting with our plans.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 ">
      {/* Hero Section - VS Code Inspired */}
      <section
        className=" py-16 border-b border-gray-700"
        style={{
          py: 10,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* VS Code Tabs */}
          <Paper className="bg-gray-900 rounded-t-lg">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              className="border-b border-gray-700"
            >
              <Tab
                label="index.html"
                className={`min-w-32 ${
                  activeTab === 0
                    ? "bg-gray-800 text-blue-400"
                    : "text-gray-400"
                }`}
              />
              <Tab
                label="style.css"
                className={`min-w-32 ${
                  activeTab === 1
                    ? "bg-gray-800 text-green-400"
                    : "text-gray-400"
                }`}
              />
              <Tab
                label="wordpress.php"
                className={`min-w-32 ${
                  activeTab === 2
                    ? "bg-gray-800 text-purple-400"
                    : "text-gray-400"
                }`}
              />
            </Tabs>
          </Paper>

          {/* Code Window */}
          <Paper className="bg-gray-900 p-8 rounded-b-lg shadow-2xl">
            <div className="font-mono">
              {/* HTML Content */}
              {activeTab === 0 && (
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-red-400">{` <h1>`}</span>
                    <span className=" ml-2">Website Design & Development</span>
                    <span className="text-red-400">{` <h1>`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-red-400">{` <p>`}</span>
                    <span className=" ml-2">
                      We build stunning, functional, and growth-driven websites.
                    </span>
                    <span className="text-red-400">{` <p>`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-blue-400">&lt;</span>
                    <span className="text-red-400">{` <button className ="cta-button">`}</span>
                    <span className="ml-2">Let's Build Your Website</span>
                    <span className="text-red-400">{` <button>`}</span>
                  </div>
                </div>
              )}

              {/* CSS Content */}
              {activeTab === 1 && (
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-red-400">.website-hero</span>
                    <span className="">{" {"}</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-yellow-400">background:</span>
                    <span className="text-green-400 ml-2">
                      linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    </span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-yellow-400">min-height:</span>
                    <span className="text-green-400 ml-2">100vh;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="">{"}"}</span>
                  </div>
                </div>
              )}

              {/* PHP Content */}
              {activeTab === 2 && (
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-blue-400">&lt;?php</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-purple-400">function</span>
                    <span className=" ml-2">build_wordpress_site</span>
                    <span className="text-yellow-400">($requirements)</span>
                    <span className="">{" {"}</span>
                  </div>
                  <div className="flex ml-8">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-purple-400">return</span>
                    <span className=" ml-2">custom_theme_development</span>
                    <span className="text-yellow-400">($requirements);</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="">{"}"}</span>
                  </div>
                </div>
              )}

              {/* Comment Line */}
              <div className="mt-8 pt-4 border-t border-gray-700">
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-green-400">
                    {`  // Supporting both WordPress & Custom Coding Solutions`}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg font-semibold"
                  size="large"
                >
                  Get Your Website Designed
                </Button>
              </div>
            </div>
          </Paper>
        </Container>
      </section>

      {/* Client Portfolio Section */}
      <section className="py-20 ">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className="text-center font-bold mb-12 text-white"
          >
            Websites We've Built
          </Typography>

          {/* Browser-style Client Tabs */}
          <Paper className="bg-gray-900 rounded-lg overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <Typography variant="body2" className="text-gray-300">
                  {clients[currentClient].name} -{" "}
                  {clients[currentClient].category}
                </Typography>
              </div>
            </div>

            {/* Client Preview */}
            <div className="relative">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <WebIcon className="text-6xl mb-4" />
                  <Typography variant="h6" className="">
                    {clients[currentClient].name} Website Preview
                  </Typography>
                  <Typography variant="body2" className="text-gray-500 mt-2">
                    {clients[currentClient].description}
                  </Typography>
                </div>
              </div>

              {/* Navigation Arrows */}

              <div className="absolute  flex   justify-between bottom-5 w-full text-white">
                <IconButton className="text-white" onClick={prevClient}>
                  <ArrowBackIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton className="text-white" onClick={nextClient}>
                  <ArrowForwardIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </div>

              {/* View Case Study Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button
                  variant="contained"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  View Website + Case Study
                </Button>
              </div>
            </div>
          </Paper>
        </Container>
      </section>

      {/* Services Section */}
      <section className="sm:p-20  p-5 bg-gray-900 grid gap-5">
        <Typography
          variant="h3"
          className="text-center font-bold mb-12 text-white"
        >
          What We Offer in Website Design & Development
        </Typography>

        <Grid
          container
          spacing={4}
          className="!grid sm:!grid-cols-2 !grid-cols-1"
        >
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <div>
                      <Typography
                        variant="h5"
                        className="font-bold text-white mb-1"
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-green-400 font-mono"
                      >
                        {service.comment}
                      </Typography>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        <Typography variant="body2" className="text-gray-300">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Trust Section */}
      <section className=" sm:p-20 p-5 bg-gray-800">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} className="grid gap-5">
            <Typography variant="h3" className="font-bold mb-6  text-white">
              Why Brands Trust Us With Their Websites
            </Typography>

            <Paper className="bg-gray-900 p-6 border border-green-500 glow">
              <div className="font-mono space-y-3">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <Typography variant="body1" className="">
                      {point}
                    </Typography>
                  </div>
                ))}
              </div>
            </Paper>

            <Button
              variant="contained"
              className="mt-6 bg-green-600 hover:bg-green-700 px-8 py-3"
              size="large"
            >
              Let's Build Together
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className="bg-gray-900 p-6 font-mono">
              <Typography variant="h6" className="text-yellow-400 mb-4">
                {`  // Our Development Process`}
              </Typography>

              <ol className="space-y-4 text-gray-300">
                <li>1. Discovery & Planning</li>
                <li>2. Design & Prototyping</li>
                <li>3. Development & Coding</li>
                <li>4. Testing & Quality Assurance</li>
                <li>5. Launch & Deployment</li>
                <li>6. Support & Maintenance</li>
              </ol>
            </Paper>
          </Grid>
        </Grid>
      </section>

      {/* Pricing Section */}
      <section className=" sm:p-20 p-10 bg-gray-900 flex flex-col justify-center items-center  gap-6">
        <Typography
          variant="h3"
          className="text-center text-white font-bold mb-12 "
        >
          Website Design Pricing Plans
        </Typography>

        <Grid
          container
          spacing={4}
          className="!grid !grid-col-1 sm:grid-cols-3 !gap-10"
        >
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className={`h-full bg-gray-800 border ${
                  plan.color === "purple"
                    ? "border-purple-500"
                    : plan.color === "gold"
                    ? "border-yellow-500"
                    : "border-blue-500"
                }`}
              >
                <CardContent className="p-6">
                  {/* Terminal Command */}
                  <Paper className="bg-black p-3 mb-4 font-mono text-sm">
                    <Typography variant="body2" className="text-green-400">
                      $ {plan.command}
                    </Typography>
                  </Paper>

                  <Typography
                    variant="h5"
                    className={`font-bold mb-2 ${
                      plan.color === "purple"
                        ? "text-purple-400"
                        : plan.color === "gold"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  >
                    {plan.name}
                  </Typography>

                  <Typography variant="h4" className="font-bold  mb-1">
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-6">
                    {plan.type}
                  </Typography>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">▶</span>
                        <Typography variant="body2" className="text-gray-300">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="contained"
                    className={`w-full ${
                      plan.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : plan.color === "gold"
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    size="large"
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Testimonials Section */}
      <section className="sm:p-20  p-10 bg-gray-800  grid gap-6">
        <Typography
          variant="h3"
          className="text-center text-white font-bold mb-12 "
        >
          What Our Clients Say
        </Typography>

        <Paper className="bg-black p-8 rounded-lg font-mono">
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex">
                <span className="text-blue-400 mr-4">{index + 1}</span>
                <Typography variant="body1" className="text-green-400">
                  {testimonial}
                </Typography>
              </div>
            ))}
          </div>
        </Paper>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-900 grid gap-5">
        <Typography
          variant="h3"
          className="text-center font-bold mb-12 text-white "
        >
          Frequently Asked Questions
        </Typography>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              className="bg-gray-800 mb-2 border border-gray-700"
              expanded={expandedFaq === `panel${index}`}
              onChange={handleFaqChange(`panel${index}`)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
                <div className="flex items-center">
                  <StarIcon className="text-yellow-500 mr-3" />
                  <Typography variant="h6" className=" font-medium">
                    {faq.question}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-700">
                <Typography variant="body1" className="text-gray-300">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Lead Form Section */}

      <FreeBusinessConsultationForm />
    </div>
  );
};
