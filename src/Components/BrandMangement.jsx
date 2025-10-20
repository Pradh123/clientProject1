import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Modal,
  Chip,
  Rating,
} from "@mui/material";
import {
  ExpandMore,
  Search,
  ArrowBackIos,
  ArrowForwardIos,
  Palette,
  FormatSize,
  LogoDev,
  Psychology,
  CheckCircle,
  Star,
} from "@mui/icons-material";
import { FreeBusinessConsultationForm } from "../Pages/Home/Home";

const BrandManagement = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const brandColors = {
    primary: "#f77b37",
    secondary: "#fedd24",
    dark: "#2d3748",
    light: "#f7fafc",
  };

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const caseStudies = [
    {
      id: 1,
      client: "TechNova Solutions",
      logo: "TN",
      colors: ["#2d3748", "#f77b37", "#fedd24", "#4a5568"],
      typography: {
        heading: "Oswald",
        body: "Lato",
      },
      description: "Complete brand identity overhaul for tech startup",
    },
    {
      id: 2,
      client: "EcoLife Organics",
      logo: "EO",
      colors: ["#2e7d32", "#81c784", "#f77b37", "#fff9c4"],
      typography: {
        heading: "Open Sans",
        body: "Lato",
      },
      description: "Sustainable brand identity development",
    },
    {
      id: 3,
      client: "UrbanFit Gym",
      logo: "UF",
      colors: ["#1a237e", "#f77b37", "#000000", "#ffffff"],
      typography: {
        heading: "Oswald",
        body: "Open Sans",
      },
      description: "Fitness brand positioning and visual identity",
    },
  ];

  const services = [
    {
      icon: <Palette sx={{ fontSize: 40, color: brandColors.primary }} />,
      title: "Visual Identity",
      description:
        "Complete color palette, logo design, and visual elements that represent your brand essence.",
    },
    {
      icon: <FormatSize sx={{ fontSize: 40, color: brandColors.primary }} />,
      title: "Brand Guidelines",
      description:
        "Comprehensive documentation covering typography, logo usage, and design standards.",
    },
    {
      icon: <LogoDev sx={{ fontSize: 40, color: brandColors.primary }} />,
      title: "Logo Design",
      description:
        "Memorable and scalable logo designs that work across all platforms and mediums.",
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: brandColors.primary }} />,
      title: "Brand Strategy",
      description:
        "Strategic positioning and messaging that differentiates your brand in the market.",
    },
  ];

  const features = [
    {
      icon: <CheckCircle sx={{ color: brandColors.primary }} />,
      title: "Consistent Brand Identity",
      description:
        "Ensure your brand looks and feels the same across all touchpoints",
    },
    {
      icon: <CheckCircle sx={{ color: brandColors.primary }} />,
      title: "Professional Design Standards",
      description: "Industry-best practices and modern design principles",
    },
    {
      icon: <CheckCircle sx={{ color: brandColors.primary }} />,
      title: "Strategic Brand Positioning",
      description: "Stand out in your market with clear brand differentiation",
    },
    {
      icon: <CheckCircle sx={{ color: brandColors.primary }} />,
      title: "Creative & Data-Driven Approach",
      description:
        "Combine artistic creativity with market insights for optimal results",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹49,999",
      description: "Perfect for startups and new businesses",
      features: [
        "Logo Design (3 concepts)",
        "Basic Color Palette",
        "Typography Selection",
        "Brand Style Guide (PDF)",
        "2 Revisions",
        "4-6 Weeks Delivery",
      ],
    },
    {
      name: "Growth",
      price: "₹99,999",
      description: "Comprehensive brand identity package",
      features: [
        "Everything in Starter +",
        "Complete Visual Identity",
        "Extended Color System",
        "Custom Icon Set (10 icons)",
        "Brand Guidelines (Print & Digital)",
        "Social Media Kit",
        "Stationery Design",
        "6-8 Weeks Delivery",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹1,99,999",
      description: "Enterprise-level brand management",
      features: [
        "Everything in Growth +",
        "Brand Strategy Workshop",
        "Competitive Analysis",
        "Brand Voice & Messaging",
        "Complete Brand Book",
        "Website UI/UX Guidelines",
        "Marketing Collateral",
        "Ongoing Brand Support",
        "8-12 Weeks Delivery",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is included in brand management?",
      answer:
        "Our brand management includes visual identity design (logo, color palette, typography), brand guidelines documentation, brand strategy development, and ongoing brand consistency maintenance across all platforms.",
    },
    {
      question: "Do you provide a full brand guideline?",
      answer:
        "Yes, we provide comprehensive brand guidelines covering logo usage, color specifications, typography hierarchy, imagery style, tone of voice, and application examples across various media.",
    },
    {
      question: "Can you redesign an existing brand?",
      answer:
        "Absolutely! We specialize in brand refreshes and complete redesigns. We'll work with your existing brand equity while modernizing and strengthening your visual identity.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The timeline varies by package: Starter (4-6 weeks), Growth (6-8 weeks), Premium (8-12 weeks). We work efficiently while ensuring quality and attention to detail.",
    },
    {
      question: "Do you offer ongoing brand support?",
      answer:
        "Yes, we offer monthly retainer packages for ongoing brand management, including new asset creation, brand audits, and consistency checks across all marketing materials.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechNova Solutions",
      role: "Marketing Director",
      rating: 5,
      comment:
        "The brand transformation exceeded our expectations. Our new identity perfectly captures our innovative spirit.",
      image: "SC",
    },
    {
      name: "Michael Rodriguez",
      company: "EcoLife Organics",
      role: "Founder & CEO",
      rating: 5,
      comment:
        "Working with this team was exceptional. They understood our vision and created a brand that truly represents our values.",
      image: "MR",
    },
    {
      name: "Priya Sharma",
      company: "UrbanFit Gym",
      role: "Creative Director",
      rating: 5,
      comment:
        "The strategic approach to brand positioning helped us stand out in a crowded market. Highly recommended!",
      image: "PS",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box className="!bg-white sm:!max-h-[100vh]  !p-5 !border !border-red-500">
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: brandColors.light,
          backgroundImage: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
          py: 10,
          position: "relative",
          overflow: "hidden",
          width: "100vw",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Oswald, sans-serif",
                fontSize: { xs: "3rem", md: "4rem" },
                fontWeight: 700,
                color: brandColors.dark,
                mb: 3,
                lineHeight: 1.1,
                padding: "10px",
              }}
            >
              Brand Management – Strengthen Your Identity
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Open Sans, sans-serif",
                color: "#4a5568",
                mb: 4,
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              From color palettes to typography, we craft your visual identity
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: brandColors.primary,
                color: "white",
                fontSize: "1.1rem",
                padding: "12px 32px",
                "&:hover": {
                  backgroundColor: "#e56a2e",
                },
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 600,
              }}
            >
              Start Your Brand Journey
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            {/* Brand Guidelines Mockup */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                width: "95vw",
              }}
            >
              {/* Laptop Frame */}
              <Box
                sx={{
                  backgroundColor: "#2d3748",
                  padding: "20px 20px 0 20px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#f56565",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#f6e05e",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#48bb78",
                    }}
                  ></Box>
                </Box>
              </Box>

              {/* Brand Guidelines Content */}
              <Box sx={{ p: 4 }}>
                {/* Sticky Tabs */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 4,
                    borderBottom: "2px solid #e2e8f0",
                    pb: 2,
                  }}
                >
                  {["Colors", "Typography", "Logo", "Imagery"].map((tab) => (
                    <Chip
                      key={tab}
                      label={tab}
                      variant={tab === "Colors" ? "filled" : "outlined"}
                      sx={{
                        backgroundColor:
                          tab === "Colors"
                            ? brandColors.primary
                            : "transparent",
                        color: tab === "Colors" ? "white" : brandColors.dark,
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>

                {/* Color Palette */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Oswald, sans-serif", mb: 2 }}
                  >
                    Color Palette
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {[
                      brandColors.primary,
                      brandColors.secondary,
                      "#2d3748",
                      "#4a5568",
                      "#e2e8f0",
                    ].map((color, index) => (
                      <Box key={index} sx={{ textAlign: "center" }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            backgroundColor: color,
                            borderRadius: "8px",
                            mb: 1,
                            border: "1px solid #e2e8f0",
                          }}
                        ></Box>
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: "Lato, sans-serif" }}
                        >
                          {color}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Typography */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Oswald, sans-serif", mb: 2 }}
                  >
                    Typography
                  </Typography>
                  <Box
                    sx={{
                      borderLeft: `4px solid ${brandColors.primary}`,
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "Oswald, sans-serif", mb: 1 }}
                    >
                      Heading Font - Oswald
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Open Sans, sans-serif", mb: 1 }}
                    >
                      Subheading Font - Open Sans
                    </Typography>
                    <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
                      Body Font - Lato. Used for paragraphs and longer text
                      content.
                    </Typography>
                  </Box>
                </Box>

                {/* Logo Usage */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Oswald, sans-serif", mb: 2 }}
                  >
                    Logo Usage
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      p: 3,
                      backgroundColor: "#f7fafc",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: brandColors.primary,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                    >
                      BRAND
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          color: "#718096",
                        }}
                      >
                        Primary Logo
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontFamily: "Open Sans, sans-serif" }}
                      >
                        Minimum clear space: 20px
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* What We Offer */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: brandColors.dark,
            mb: 2,
          }}
        >
          What We Offer
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontFamily: "Open Sans, sans-serif",
            color: "#718096",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Comprehensive brand management services to build and maintain a
          strong, consistent brand identity
        </Typography>

        <Grid className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-5">
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  },
                  border: "1px solid #e2e8f0",
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  {service.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      mt: 2,
                      mb: 2,
                      color: brandColors.dark,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      color: "#718096",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Case Studies */}
      <Box sx={{ backgroundColor: "#f7fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: brandColors.dark,
              mb: 2,
            }}
          >
            Brand Case Studies
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {caseStudies.map((study) => (
              <Grid item xs={12} md={4} key={study.id}>
                <Card
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                  onClick={() => setActiveCaseStudy(study)}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Client Logo */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: study.colors[0],
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        mb: 3,
                      }}
                    >
                      {study.logo}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Oswald, sans-serif",
                        mb: 1,
                      }}
                    >
                      {study.client}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Lato, sans-serif",
                        color: "#718096",
                        mb: 3,
                      }}
                    >
                      {study.description}
                    </Typography>

                    {/* Color Palette Preview */}
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      {study.colors.slice(0, 4).map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 30,
                            height: 30,
                            backgroundColor: color,
                            borderRadius: "4px",
                            border: "1px solid #e2e8f0",
                          }}
                        />
                      ))}
                    </Box>

                    {/* Typography Preview */}
                    <Box
                      sx={{
                        borderLeft: `3px solid ${brandColors.primary}`,
                        pl: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          color: "#718096",
                        }}
                      >
                        Typography: {study.typography.heading} &{" "}
                        {study.typography.body}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: brandColors.dark,
            mb: 2,
          }}
        >
          Why Choose Us
        </Typography>

        <Grid className="!grid !grid-cols-1 sm:!grid-cols-2  p-2 !gap-5">
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}
              className="border border-red-500 p-2 rounded-xl hover:shadow-xl  shadow-gray-500  transition-all duration-300  "
            >
              <Box
                sx={{
                  color: brandColors.primary,
                  mt: 0.5,
                }}
              >
                {feature.icon}
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Oswald, sans-serif",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    color: "#718096",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>

      {/* Pricing */}
      <Box sx={{ backgroundColor: "#f7fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: brandColors.dark,
              mb: 2,
            }}
          >
            Pricing Packages
          </Typography>

          <Grid className="!grid !grid-cols-1 sm:!grid-cols-3 !gap-5  ">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="hover:!shadow-xl !shadow-gray-500 !transition-all !duration-300"
                sx={{
                  height: "100%",
                  position: "relative",
                  border: plan.popular
                    ? `2px solid ${brandColors.primary}`
                    : "1px solid #e2e8f0",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                }}
              >
                {plan.popular && (
                  <Chip
                    label="Most Popular"
                    sx={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: brandColors.primary,
                      color: "white",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 600,
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      mb: 1,
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 700,
                      color: brandColors.primary,
                      mb: 2,
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      color: "#718096",
                      mb: 3,
                    }}
                  >
                    {plan.description}
                  </Typography>

                  <Box>
                    {plan.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: brandColors.primary,
                            fontSize: 20,
                            mr: 1.5,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: plan.popular
                        ? brandColors.primary
                        : "white",
                      color: plan.popular ? "white" : brandColors.primary,
                      border: `1px solid ${brandColors.primary}`,
                      mt: 3,
                      py: 1.5,
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: plan.popular
                          ? "#e56a2e"
                          : brandColors.light,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: brandColors.dark,
            mb: 2,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search FAQs"
            variant="outlined"
            InputProps={{
              startAdornment: <Search sx={{ color: "#718096", mr: 1 }} />,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                fontFamily: "Lato, sans-serif",
              },
            }}
          />
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaq === `faq-${index}`}
              onChange={handleFaqChange(`faq-${index}`)}
              sx={{
                border: "1px solid #e2e8f0",
                boxShadow: "none",
                "&:before": { display: "none" },
                mb: 2,
                borderRadius: "8px !important",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography
                  sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: 600 }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    color: "#718096",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: brandColors.primary,
              color: brandColors.primary,
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#e56a2e",
                backgroundColor: `${brandColors.primary}08`,
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>

      {/* Testimonials */}
      <Box sx={{ backgroundColor: "#f7fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: brandColors.dark,
              mb: 2,
            }}
          >
            Client Testimonials
          </Typography>

          <Box
            sx={{ position: "relative", maxWidth: "800px", mx: "auto", mt: 6 }}
          >
            <Card sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: brandColors.primary,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    mr: 3,
                  }}
                >
                  {testimonials[testimonialIndex].image}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {testimonials[testimonialIndex].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Lato, sans-serif", color: "#718096" }}
                  >
                    {testimonials[testimonialIndex].role},{" "}
                    {testimonials[testimonialIndex].company}
                  </Typography>
                  <Rating
                    value={testimonials[testimonialIndex].rating}
                    readOnly
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontStyle: "italic",
                  color: "#4a5568",
                  lineHeight: 1.6,
                }}
              >
                "{testimonials[testimonialIndex].comment}"
              </Typography>
            </Card>
          </Box>

          <IconButton
            onClick={prevTestimonial}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={nextTestimonial}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Container>
      </Box>

      {/* Case Study Modal */}
      <Modal
        open={Boolean(activeCaseStudy)}
        onClose={() => setActiveCaseStudy(null)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            p: 4,
            maxWidth: "600px",
            width: "90%",
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          {activeCaseStudy && (
            <>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Oswald, sans-serif", mb: 3 }}
              >
                {activeCaseStudy.client} - Case Study
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Open Sans, sans-serif", mb: 1 }}
                >
                  Color Palette
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {activeCaseStudy.colors.map((color, index) => (
                    <Box key={index} sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: color,
                          borderRadius: "8px",
                          mb: 1,
                        }}
                      ></Box>
                      <Typography
                        variant="caption"
                        sx={{ fontFamily: "Lato, sans-serif" }}
                      >
                        {color}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Open Sans, sans-serif", mb: 1 }}
                >
                  Typography
                </Typography>
                <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
                  Heading: {activeCaseStudy.typography.heading}, Body:{" "}
                  {activeCaseStudy.typography.body}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ fontFamily: "Lato, sans-serif", lineHeight: 1.6 }}
              >
                {activeCaseStudy.description}
              </Typography>

              <Button
                onClick={() => setActiveCaseStudy(null)}
                sx={{ mt: 3 }}
                variant="contained"
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
      <FreeBusinessConsultationForm />
    </Box>
  );
};

export default BrandManagement;
