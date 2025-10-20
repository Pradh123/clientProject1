import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { FreeBusinessConsultationForm } from "../Pages/Home/Home";

// Styled components with social media theme
const SocialMediaButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f77b37",
  color: "white",
  fontWeight: "bold",
  padding: "12px 32px",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "#e56a2a",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s ease",
}));

const PricingCard = styled(Card)(({ theme }) => ({
  border: "2px solid #e0e0e0",
  borderRadius: "16px",
  padding: "30px 20px",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  background: "white",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
    borderColor: "#f77b37",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #f77b37, #fedd24)",
  },
}));

export const Marketing = () => {
  const [expandedFaq, setExpandedFaq] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  // Mock data for services
  const services = [
    {
      category: "Social Media Optimization",
      items: [
        "Bio Optimization",
        "Company/Personal Page Optimization",
        "Highlights Optimization",
        "Boosting/Ads Optimization",
      ],
    },
    {
      category: "Hashtag & Trends Research",
      items: [
        "Competitor Research & Analysis",
        "Competitor Social Media Audit",
        "Market Gap Analysis",
        "Engagement Strategy Reports",
        "Content Gap Identification",
      ],
    },
    {
      category: "Analytics & Reports Management",
      items: [
        "Monthly/Weekly Analytics Reports",
        "Growth Tracking Dashboards",
        "Platform-wise Performance Reports",
        "ROI & Engagement Analysis",
      ],
    },
    {
      category: "Campaign Creation",
      items: [
        "Post Creation (Static & Reels)",
        "Video Campaigns",
        "Live Session Planning",
        "Story Scheduling",
        "Event-based Custom Content",
      ],
    },
  ];

  // Mock data for pricing plans
  const pricingPlans = [
    {
      name: "PRO PLAN",
      price: "₹8,999/month",
      features: [
        "Instagram + Facebook",
        "Optimization + Setup",
        "Hashtag + Content Calendar",
        "20 Monthly Posts",
        "Daily Stories (2-3)",
        "Engagement Boost",
        "Guaranteed Organic Growth",
      ],
      popular: false,
    },
    {
      name: "ULTRA PRO PLAN",
      price: "₹15,999/month",
      features: [
        "Includes Pro Plan +",
        "20+ Organic Leads",
        "Quora & Reddit Optimization",
        "Monthly Reports",
        "Email Marketing & Automation",
        "GMB, LinkedIn, YouTube Optimization",
        "Content Buckets + Shorts",
      ],
      popular: true,
    },
    {
      name: "PREMIUM PLAN",
      price: "₹19,999/month",
      features: [
        "Includes Ultra Pro Plan +",
        "Full Customization",
        "Tailored Campaign Strategy",
        "Dedicated Creative & Ads Manager",
      ],
      popular: false,
    },
  ];

  // Mock data for FAQ
  const faqs = [
    {
      question: "How soon can I see results from social media marketing?",
      answer:
        "Most clients see initial engagement improvements within 2-4 weeks, with significant growth in followers and conversions within 3-6 months of consistent strategy implementation.",
    },
    {
      question: "Will I get a monthly report?",
      answer:
        "Yes! We provide comprehensive monthly reports detailing your growth metrics, engagement rates, ROI analysis, and strategic recommendations for continuous improvement.",
    },
    {
      question: "What if I want a custom plan?",
      answer:
        "We offer completely customized plans tailored to your specific business needs. Contact us for a personalized consultation and we'll create a package that fits your goals and budget.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely! We offer flexible month-to-month contracts with no long-term commitments. You can cancel your service with 30 days notice.",
    },
  ];

  

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Social Media Marketing
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 4,
                opacity: 0.9,
              }}
            >
              Unlocking Your Brand's Digital Influence
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                mb: 6,
                opacity: 0.8,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              We handle your socials so you can handle your business
            </Typography>
            <SocialMediaButton size="large">
              Start Your Journey
            </SocialMediaButton>
          </Box>
        </Container>
      </Box>

      {/* Services Offered */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "center",
              color: "#f77b37",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Comprehensive Social Media Services
          </Typography>

          <Grid
            container
            spacing={4}
            className="!grid sm:!grid-cols-2 !grid-cols-1"
          >
            {services.map((service, index) => (
              <>
                <CardContent className="!border-2 !border-red-500 !rounded-2xl">
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      color: "#333",
                      fontSize: "1.5rem",
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#f77b37",
                        borderRadius: "50%",
                      }}
                    />
                    {service.category}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {service.items.map((item, itemIndex) => (
                      <Box
                        key={itemIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          padding: "8px 12px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(247, 123, 55, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(247, 123, 55, 0.1)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "#fedd24",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: '"Lato", sans-serif',
                            color: "#555",
                            fontSize: "0.95rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why We Are Perfect */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "center",
              color: "#f77b37",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Why We're Built for Your Social Buzz
          </Typography>

          <Box
            sx={{
              mt: 6,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
              cursor: "pointer",
              position: "relative",
              "&:hover .play-button": {
                transform: "scale(1.1)",
                backgroundColor: "#f77b37",
              },
            }}
            onClick={() => setVideoOpen(true)}
          >
            {/* Video Thumbnail */}
            <Box
              sx={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                className="play-button"
                sx={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fedd24",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                }}
              >
                <PlayArrowIcon sx={{ fontSize: "2rem", color: "white" }} />
              </Box>
            </Box>

            {/* Caption */}
            <Box
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontSize: "1.2rem",
                  color: "#333",
                }}
              >
                Watch how we transform brands online.
              </Typography>
            </Box>
          </Box>

          {/* Video Dialog */}
          <Dialog
            open={videoOpen}
            onClose={() => setVideoOpen(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogContent>
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Brand Transformation Demo
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  <Typography>Video Player Embed</Typography>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Container>
      </Box>

      {/* Campaign Gallery */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "center",
              color: "#f77b37",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Explore Our Most Viral Campaigns
          </Typography>

          <Grid
            container
            spacing={2}
            className="!grid md:!grid-cols-4 sm:grid-cols-2 !grid-cols-1 "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <>
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    background: `linear-gradient(135deg, 
                        hsl(${item * 40}, 70%, 60%), 
                        hsl(${item * 40 + 30}, 70%, 50%))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    border: "2px solid red",
                    borderRadius: "10px",
                  }}
                >
                  Campaign {item}
                </Box>
              </>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "center",
              color: "#f77b37",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Plans That Scale With Your Growth
          </Typography>

          <Grid container spacing={4}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PricingCard>
                  {plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        backgroundColor: "#fedd24",
                        color: "#333",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    >
                      MOST POPULAR
                    </Box>
                  )}

                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: '"Oswald", sans-serif',
                        color: "#333",
                        fontSize: "1.5rem",
                        mb: 1,
                      }}
                    >
                      {plan.name}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: "#f77b37",
                        fontSize: "1.8rem",
                        mb: 3,
                        fontWeight: "bold",
                      }}
                    >
                      {plan.price}
                    </Typography>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <Box
                          key={featureIndex}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#f77b37",
                              borderRadius: "50%",
                              mt: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: '"Lato", sans-serif',
                              color: "#555",
                              fontSize: "0.9rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <SocialMediaButton fullWidth sx={{ mt: 4 }}>
                      Get Started
                    </SocialMediaButton>
                  </CardContent>
                </PricingCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 10, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "center",
              color: "#f77b37",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `panel${index}`}
                onChange={handleFaqChange(`panel${index}`)}
                sx={{
                  border: "none",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  "&:not(:last-child)": {
                    borderBottom: "1px solid #e0e0e0",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor:
                      expandedFaq === `panel${index}`
                        ? "rgba(247, 123, 55, 0.05)"
                        : "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(247, 123, 55, 0.08)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: '"Lato", sans-serif',
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Lead Form */}
      <FreeBusinessConsultationForm />
    </Box>
  );
};
