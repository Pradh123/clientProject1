import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Tab,
  Tabs,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import {
  ExpandMore,
  Search,
  ArrowBackIos,
  ArrowForwardIos,
  Instagram,
  LinkedIn,
  Google,
} from "@mui/icons-material";
import { FreeBusinessConsultationForm } from "../Pages/Home/Home";

export const Performance = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const testimonials = [
    {
      name: "Impreet Singh Bakshi",
      comment:
        "Outstanding results! Our leads increased by 300% in just 2 months.",
      platform: "Google Ads",
    },
    {
      name: "Priyal Bhardwaj",
      comment:
        "The team's creative approach to Meta ads transformed our business.",
      platform: "Meta Ads",
    },
    {
      name: "Cornell Forge",
      comment:
        "Professional service with transparent reporting. Highly recommended!",
      platform: "LinkedIn Ads",
    },
    {
      name: "Wealth Protector",
      comment: "ROI-focused campaigns that actually deliver what they promise.",
      platform: "Google & Meta",
    },
  ];

  const faqs = [
    {
      question: "What's the minimum budget for running ads?",
      answer:
        "We work with budgets starting from ₹10,000 for comprehensive campaign management across platforms.",
    },
    {
      question: "Do you create ad creatives?",
      answer:
        "Yes! Our Pro Plan includes up to 4 creatives per platform, and Ultra Pro includes up to 8 carousel/reels/story ads monthly.",
    },
    {
      question: "How are your charges structured?",
      answer:
        "We offer transparent pricing with clear deliverables. No hidden costs - you only pay for the management services outlined in your chosen plan.",
    },
    {
      question: "Do you guarantee leads?",
      answer:
        "While we optimize for maximum conversions, we provide lead estimates based on historical performance: 50+ leads/day for Pro Plan and 100+ leads/day for Ultra Pro Plan.",
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

  const Feature = [
    {
      title: "ROI-focused Campaign Strategy",
      description:
        "Every campaign is optimized for maximum return on investment",
    },
    {
      title: "Multi-Platform Expertise",
      description:
        "Google + Meta + LinkedIn integration for comprehensive coverage",
    },
    {
      title: "Creative + Data-driven Approach",
      description: "Combine compelling creatives with analytical optimization",
    },
    {
      title: "Transparent Reporting",
      description:
        "Clear, actionable insights with regular performance updates",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Performance Marketing – Ads That Convert
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              We manage Google, Meta, and LinkedIn Ads to maximize ROI
            </p>
          </div>

          {/* Google-style Sponsored Snippet */}
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">
                Ad
              </span>
              <span>www.yourbusiness.com</span>
            </div>
            <h3 className="text-blue-600 text-lg font-semibold mb-1">
              Performance Marketing Agency - Maximize Your ROI
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Expert Google, Meta & LinkedIn Ads Management. Get 50+ Qualified
              Leads Daily. Transparent Reporting & Data-Driven Strategies.
            </p>
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
            >
              Launch My Ads
            </Button>
          </div>
        </Container>
      </section>

      {/* What We Offer - Ad Formats */}
      <section className="py-20 bg-white">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ads We Run To Power Growth
          </h2>

          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab icon={<Google />} label="Google Ads" />
              <Tab icon={<Instagram />} label="Meta Ads" />
              <Tab icon={<LinkedIn />} label="LinkedIn Ads" />
            </Tabs>
          </Box>

          <Box className="mt-8">
            {activeTab === 0 && (
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="bg-white p-4 rounded shadow max-w-md">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">
                      Ad
                    </span>
                    <span>www.example.com</span>
                  </div>
                  <h4 className="text-blue-600 text-lg font-semibold">
                    Google Search Ad Preview
                  </h4>
                  <p className="text-gray-700">
                    Drive qualified traffic with optimized search campaigns
                  </p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-pink-500">
                <div className="bg-white p-4 rounded shadow max-w-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    <div>
                      <div className="text-sm font-semibold">Your Business</div>
                      <div className="text-xs text-gray-500">Sponsored</div>
                    </div>
                  </div>
                  <div className="bg-gray-200 h-64 rounded mb-3"></div>
                  <div className="text-sm">
                    <strong>Engaging Instagram Ad</strong> - Drive conversions
                    with visually appealing content
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="bg-white p-4 rounded shadow max-w-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded mr-3"></div>
                    <div>
                      <div className="font-semibold">Your Company</div>
                      <div className="text-xs text-gray-500">
                        Sponsored • Follow
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Professional LinkedIn ad targeting B2B decision makers with
                    high-converting content.
                  </p>
                  <div className="bg-gray-200 h-32 rounded"></div>
                </div>
              </div>
            )}
          </Box>
        </Container>
      </section>

      {/* Our Clientele - Case Studies */}
      <section className="py-20 bg-gray-100">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Campaigns We've Managed
          </h2>

          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              className="!grid sm:!grid-cols-2 !grid-cols-1 !gap-5"
            >
              <div className="bg-white rounded-lg shadow p-6 max-h-[300px]">
                <h3 className="text-xl font-semibold mb-4">Our Clients</h3>
                <ul className="space-y-3">
                  {[
                    "Impreet Singh Bakshi",
                    "Priyal Bhardwaj",
                    "Cornell Forge",
                    "Wealth Protector",
                  ].map((client, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-blue-50 rounded cursor-pointer border-l-4 border-blue-500"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </div>

              <Grid item xs={12} md={8}>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Case Study: Impreet Singh Bakshi
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Objectives</h4>
                      <p className="text-gray-600">
                        Increase qualified leads by 200% within 3 months
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Strategies</h4>
                      <p className="text-gray-600">
                        Multi-platform retargeting, A/B testing, conversion
                        optimization
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Results</h4>
                      <p className="text-green-600 font-semibold">
                        300% increase in qualified leads • 45% reduction in CPA
                      </p>
                    </div>
                    <div className="bg-gray-200 h-48 rounded flex items-center justify-center">
                      Ad Screenshots Preview
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Partner With Us For Ads?
        </h2>

        <Grid
          container
          spacing={4}
          className="!grid  sm:!grid-cols-2 !grid-cols-1 sm:p-25 p-10"
        >
          {Feature?.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card className="h-full shadow-lg border-t-4 border-blue-500">
                <CardContent className="p-6">
                  <Typography variant="h6" className="font-semibold mb-2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-gray-100">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Ad Management Pricing
          </h2>

          <Grid
            container
            spacing={4}
            justifyContent="center 
          "
            className="!max-h-[30vh] !grid !grid-col-1  sm:!grid-cols-2 !gap-5"
          >
            <Card className="shadow-xl border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Typography variant="h5" className="font-bold text-blue-600">
                    Pro Plan
                  </Typography>
                  <Typography variant="h6" className="text-gray-600">
                    ₹10,000 – ₹2,00,000 budget
                  </Typography>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Google & Meta Ads setup/maintenance</li>
                  <li>✓ Troubleshooting & performance tracking</li>
                  <li>✓ Creatives (up to 4 per platform)</li>
                  <li>✓ 10 ads/day • 50+ leads/day</li>
                  <li>✓ Standard reporting & support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Typography
                    variant="h5"
                    className="font-bold text-purple-600"
                  >
                    Ultra Pro Plan
                  </Typography>
                  <Typography variant="h6" className="text-gray-600">
                    ₹2,00,000+ budget
                  </Typography>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Everything in Pro Plan plus:</li>
                  <li>✓ Advanced campaign structures</li>
                  <li>✓ Carousel/reels/story ads (up to 8/month/platform)</li>
                  <li>✓ Dedicated landing page optimization</li>
                  <li>✓ 20 ads/day • 100+ leads/day</li>
                  <li>✓ Priority support & bi-weekly strategy reporting</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <TextField
                fullWidth
                placeholder="Search FAQs"
                variant="outlined"
                InputProps={{
                  startAdornment: <Search className="text-gray-400 mr-2" />,
                }}
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expandedFaq === `panel${index}`}
                  onChange={handleFaqChange(`panel${index}`)}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography className="font-semibold">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <Container maxWidth="lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>

          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <Typography variant="h6" className="font-semibold mb-2">
                  {testimonials[testimonialIndex].name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mb-4"
                >
                  {testimonials[testimonialIndex].platform}
                </Typography>
                <Typography variant="body1" className="italic">
                  "{testimonials[testimonialIndex].comment}"
                </Typography>
              </div>
            </div>

            <div className="absolute  bottom-0 flex  justify-between w-full">
              <IconButton className="" onClick={prevTestimonial}>
                <ArrowBackIos />
              </IconButton>
              <IconButton className="" onClick={nextTestimonial}>
                <ArrowForwardIos />
              </IconButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Lead Form */}
      <FreeBusinessConsultationForm />
    </div>
  );
};
