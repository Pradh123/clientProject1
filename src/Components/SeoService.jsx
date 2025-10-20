import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  PlayArrow as PlayIcon,
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Link as LinkIcon,
  Speed as SpeedIcon,
  Place as PlaceIcon,
} from "@mui/icons-material";
import { FreeBusinessConsultationForm } from "../Pages/Home/Home";

export const SeoService = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [videoOpen, setVideoOpen] = useState(false);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : null);
  };

  const services = [
    {
      icon: <VisibilityIcon className="text-blue-600" />,
      title: "On-Page SEO",
      description:
        "Optimize your website's content and HTML elements for better search visibility.",
      features: [
        "Meta Titles & Descriptions",
        "Header Tags Optimization",
        "Keyword Placement & Density",
        "Internal Linking Strategy",
        "Image Alt Optimization",
      ],
    },
    {
      icon: <LinkIcon className="text-green-600" />,
      title: "Off-Page SEO",
      description:
        "Build authority and credibility through strategic link building and online presence.",
      features: [
        "Backlink Building",
        "Directory Submissions",
        "Guest Blogging & PR",
        "Social Bookmarking",
        "Competitor Link Analysis",
      ],
    },
    {
      icon: <SpeedIcon className="text-purple-600" />,
      title: "Technical SEO",
      description:
        "Improve your website's technical foundation for better crawling and indexing.",
      features: [
        "Website Speed Optimization",
        "Mobile-Friendly Setup",
        "Crawlability & Indexing Fixes",
        "Schema Markup Integration",
        "Sitemap & Robots.txt",
      ],
    },
    {
      icon: <PlaceIcon className="text-red-600" />,
      title: "Local SEO",
      description:
        "Dominate local search results and attract customers in your area.",
      features: [
        "Google My Business Optimization",
        "Local Directory Listings",
        "NAP Consistency",
        "Local Keyword Targeting",
        "Map Pack Ranking",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "STARTER PLAN",
      price: "₹7,999",
      period: "/month",
      features: [
        "On-Page + Off-Page SEO",
        "10 Keywords",
        "Monthly Reports",
        "Basic Backlinking",
        "Technical Fixes",
      ],
      popular: false,
      color: "blue",
    },
    {
      name: "GROWTH PLAN",
      price: "₹14,999",
      period: "/month",
      features: [
        "Includes Starter +",
        "20–25 Keywords",
        "Advanced Backlinking",
        "Local SEO Setup",
        "Schema Integration",
        "Weekly Reports",
      ],
      popular: true,
      color: "green",
    },
    {
      name: "DOMINATOR PLAN",
      price: "₹24,999",
      period: "/month",
      features: [
        "Includes Growth +",
        "40+ Keywords",
        "Competitor SEO Strategy",
        "Content Writing (Blogs + PR)",
        "Dedicated SEO Manager",
        "Bi-Weekly Progress Calls",
      ],
      popular: false,
      color: "purple",
    },
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO results usually take 3–6 months depending on competition, website health, and strategy.",
    },
    {
      question: "What's included in your SEO packages?",
      answer:
        "Keyword research, on-page SEO, off-page SEO, technical SEO, and reporting.",
    },
    {
      question: "Can you guarantee #1 ranking on Google?",
      answer:
        "No agency can guarantee #1 ranking, but we ensure visibility, traffic, and growth.",
    },
    {
      question: "Do you provide monthly reports?",
      answer:
        "Yes, transparent reports with rankings, traffic data, and recommendations.",
    },
    {
      question: "Is SEO better than paid ads?",
      answer: "SEO builds long-term results; ads provide instant visibility.",
    },
  ];

  const resultsGallery = [
    {
      type: "analytics",
      title: "Traffic Growth",
      metric: "+350%",
      period: "6 months",
    },
    {
      type: "ranking",
      title: "Keyword Rankings",
      metric: "Top 3",
      count: "45 keywords",
    },
    {
      type: "conversion",
      title: "Conversion Rate",
      metric: "+220%",
      period: "4 months",
    },
    {
      type: "organic",
      title: "Organic Traffic",
      metric: "+480%",
      period: "8 months",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-white py-20"
        style={{
          py: 10,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="font-bold text-gray-900 mb-4">
              SEO Services – Rank Higher, Reach Further
            </Typography>
            <Typography variant="h5" className="text-gray-600 mb-8">
              Drive traffic, build authority, and grow your business
              organically.
            </Typography>
          </div>

          {/* Google Search Bar */}
          <div className="max-w-2xl mx-auto">
            <Paper className="p-1 shadow-lg rounded-full">
              <div className="flex items-center px-4">
                <SearchIcon className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Your Business Name"
                  className="w-full py-3 outline-none text-lg"
                />
                <Button
                  variant="contained"
                  className="bg-blue-600 rounded-full px-6"
                >
                  Search
                </Button>
              </div>
            </Paper>
          </div>

          {/* SERP Cards */}
          <Grid container spacing={2} className="mt-12">
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Paper className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-1">
                      <Typography
                        variant="caption"
                        className="text-white font-bold"
                      >
                        {item}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        className="text-blue-600 hover:underline"
                      >
                        Your Business Name - Best Services in Your Area
                      </Typography>
                      <Typography variant="body2" className="text-green-700">
                        https://yourbusiness.com
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body2" className="text-gray-600">
                    Discover why thousands of customers trust Your Business Name
                    for quality services. Contact us today for a free
                    consultation and see the difference.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center font-bold mb-12">
            Comprehensive SEO Services
          </Typography>
          <Grid
            container
            spacing={4}
            className="!grid sm:!grid-cols-2 !grid-cols-1"
          >
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{service.icon}</div>
                      <Typography variant="h5" className="font-bold">
                        {service.title}
                      </Typography>
                    </div>
                    <Typography variant="body1" className="text-gray-600 mb-4">
                      {service.description}
                    </Typography>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <Typography variant="body2" className="text-gray-700">
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
        </Container>
      </section>

      {/* Why We're Perfect Section */}
      <section className="py-20 bg-white">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="font-bold mb-4">
                Why We're Built for Search Success
              </Typography>
              <Typography variant="body1" className="text-gray-600 mb-6">
                Our proven methodology combines technical expertise with
                strategic content planning to deliver sustainable growth and
                dominate search results.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="bg-red-600 hover:bg-red-700"
                onClick={() => setVideoOpen(true)}
                startIcon={<PlayIcon />}
              >
                Watch SEO Journey Explainer
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
               
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Results Gallery */}
      <section className="py-20 bg-gray-900 text-white flex  flex-col justify-center items-center gap-4">
        <Typography variant="h3" className="text-center font-bold mb-12">
          Explore Our SEO Wins
        </Typography>
        <Grid
          container
          spacing={4}
          className="!grid !grid-cols-2 sm:!grid-cols-4"
        >
          {resultsGallery.map((result, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper className="p-6 bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="text-center">
                  <AnalyticsIcon className="text-4xl mb-4 text-green-400" />
                  <Typography
                    variant="h4"
                    className="font-bold text-green-400 mb-2"
                  >
                    {result.metric}
                  </Typography>
                  <Typography variant="h6" className="mb-2">
                    {result.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    {result.count || result.period}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white flex flex-col justify-center items-center gap-5">
        <Typography variant="h3" className="text-center font-bold mb-12">
          SEO Plans That Deliver Growth
        </Typography>
        <Grid
          container
          spacing={4}
          className="!grid !grid-cols-1 sm:!grid-cols-3"
        >
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? "border-2 border-green-500 transform scale-105"
                    : "border"
                }`}
              >
              
                <CardContent className="p-6 text-center">
                  <Typography variant="h5" className="font-bold mb-4">
                    {plan.name}
                  </Typography>
                  <div className="mb-6">
                    <Typography variant="h3" className="font-bold">
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      {plan.period}
                    </Typography>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        className="text-gray-700"
                      >
                        {feature}
                      </Typography>
                    ))}
                  </div>
                  <Button
                    variant={plan.popular ? "contained" : "outlined"}
                    className={`w-full ${
                      plan.popular ? "bg-green-600 hover:bg-green-700" : ""
                    }`}
                    size="large"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center font-bold mb-8">
            Frequently Asked Questions
          </Typography>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <Paper className="p-2">
              <div className="flex items-center px-3">
                <SearchIcon className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full py-2 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Paper>
          </div>

          {/* FAQ Accordions */}
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `panel${index}`}
                onChange={handleFaqChange(`panel${index}`)}
                className="mb-2"
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⭐</span>
                    <Typography variant="h6" className="font-medium">
                      {faq.question}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" className="text-gray-600">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Container>
      </section>

      {/* Lead Form Section */}
      <FreeBusinessConsultationForm />

      {/* Video Dialog */}
      <Dialog
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>SEO Journey Explainer</DialogTitle>
        <DialogContent>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <Typography className="text-white">
              Video Player Placeholder - Replace with actual video embed
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
