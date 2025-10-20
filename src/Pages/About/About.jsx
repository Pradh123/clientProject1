import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FreeBusinessConsultationForm } from "../Home/Home";

// Styled components with the specified color scheme


const YellowAccentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fedd24",
  padding: "2px 8px",
  display: "inline-block",
  marginBottom: "8px",
}));

const StoryCard = styled(Card)(({ theme }) => ({
  border: "3px solid #f77b37",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(247, 123, 55, 0.1)",
  height: "100%",
}));

const About = () => {



 

  

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: "#f8f9fa" }}>
        {/* Founder's Office Scene */}
        <img
          src="/Gemini_Generated_Image_z6v2y2z6v2y2z6v2.png"
          alt=""
          className="w-[100vw]   max-h-[90vh]   object-cover border border-red-500"
        />
      </Box>
      <Box sx={{ backgroundColor: "#f8f9fa", marginTop: "5vh", p: 8 }}>
        <h1 className="font-bold text-[25px] mb-5">{`Our Story:`}</h1>

        <Typography variant="h6" color="initial">
          Frustrated by slow, complex digital launches, we built a streamlined
          system to make getting online simple. Our story is simple: we create
          the Minimum Viable Product you need to start, validate, and grow
          immediatel
        </Typography>
      </Box>

      {/* About the Brand Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <StoryCard>
            <CardContent sx={{ p: 6 }}>
              <YellowAccentBox>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontSize: "2rem",
                    color: "#333",
                    margin: 0,
                  }}
                >
                  About the Brand
                </Typography>
              </YellowAccentBox>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Lato", sans-serif',
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "#555",
                  mb: 4,
                  mt: 3,
                }}
              >
                A Creative Square began as a vision to transform the digital
                landscape through innovative storytelling and strategic brand
                development. Founded with a passion for creativity and a
                commitment to excellence, we've grown into a trusted partner for
                brands seeking to make their mark in the digital world.
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      color: "#f77b37",
                      fontSize: "1.5rem",
                      mb: 2,
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Lato", sans-serif',
                      lineHeight: 1.6,
                      color: "#555",
                    }}
                  >
                    To ignite creativity, strategy, and visibility for brands,
                    transforming their digital presence into powerful tools for
                    growth and engagement.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      color: "#f77b37",
                      fontSize: "1.5rem",
                      mb: 2,
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Lato", sans-serif',
                      lineHeight: 1.6,
                      color: "#555",
                    }}
                  >
                    To be the square where digital brilliance and brand impact
                    meet, creating lasting connections between businesses and
                    their audiences.
                  </Typography>
                </Grid>
              </Grid>

              {/* Core Values */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    color: "#f77b37",
                    fontSize: "1.5rem",
                    mb: 3,
                  }}
                >
                  Our Core Values
                </Typography>
                <Grid container spacing={2}>
                  {[
                    "Creativity",
                    "Transparency",
                    "Innovation",
                    "Strategy",
                    "Reliability",
                  ].map((value, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2.4} key={value}>
                      <Box
                        sx={{
                          padding: "16px",
                          border: `2px solid ${
                            index % 2 === 0 ? "#f77b37" : "#fedd24"
                          }`,
                          borderRadius: "8px",
                          textAlign: "center",
                          backgroundColor: "white",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 8px 25px rgba(247, 123, 55, 0.15)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: '"Oswald", sans-serif',
                            color: "#333",
                            fontSize: "1rem",
                          }}
                        >
                          {value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </StoryCard>
        </Container>
      </Box>

      {/* Business Consultation Form */}
      <FreeBusinessConsultationForm />
    </Box>
  );
};

export default About;
