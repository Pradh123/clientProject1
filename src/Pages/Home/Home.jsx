import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import {
  Computer,
  Search,
  Campaign,
  Brush,
  ManageAccounts,
  Create,
} from "@mui/icons-material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useMemo } from "react";

const Home = () => {
  const icons = [
    "🖥️",
    "📱",
    "🎧",
    "📔",
    "📒",
    "📚",
    "📘",
    "📸",
    "🐦",
    "💼",
    "▶️",
    "🔍",
    "🌐",
    "🧱",
    "🦴",
  ];
  const randomPositions = useMemo(
    () =>
      icons.map(() => ({
        top: Math.random() * 90 + "%", // random between 0–80%
        left: Math.random() * 80 + "%", // random between 0–90%
        animationDelay: `${Math.random() * 3}s`,
      })),
    []
  );

  const clients = [
    {
      id: 1,
      name: "GlowUp Cafe",
      service: "Branding + Website",
      img: "/client1.jpg",
      tools: "WordPress, SEO",
      result: "Increased online visibility 80%",
    },
    {
      id: 2,
      name: "TechHive",
      service: "SEO + Ads",
      img: "/client2.jpg",
      tools: "Google Ads, Analytics",
      result: "3x traffic growth",
    },
  ];

  const points = [
    "Creative Thinkers + Tech Experts",
    "Result-Driven Strategies",
    "Full-Stack Digital Solutions",
    "Transparent Communication",
  ];

  const testimonials = [
    {
      name: "John Doe",
      text: "Creative Square transformed our brand visibility!",
      rating: 5,
    },
    {
      name: "Sarah Smith",
      text: "Amazing team with creative strategies.",
      rating: 4,
    },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <Box>
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-500 to-yellow-400 text-white overflow-hidden">
        {/* scattered icons */}
        <div className="absolute inset-0 overflow-hidden">
          {icons.map((icon, idx) => (
            <span
              key={idx}
              className="absolute  sm:text-6xl  text-4xl opacity-30 animate-float select-none"
              style={{
                top: randomPositions[idx].top,
                left: randomPositions[idx].left,
                animationDelay: randomPositions[idx].animationDelay,
              }}
            >
              {icon}
            </span>
          ))}
        </div>

        {/* main square box */}
        <div className="relative z-10 border-4 border-yellow-300 bg-orange-500 text-center p-10 max-w-2xl rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold font-['Open Sans']">
            Entering A Creative Square May Cause Extreme Brand Glow-Ups!
          </h1>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Clients</h2>
        <div className="flex overflow-x-auto space-x-6 justify-center pb-6">
          {clients.map((client) => (
            <button
              key={client.id}
              onClick={() => setSelected(client)}
              className="bg-white shadow-md rounded-xl px-6 py-4 hover:bg-orange-100"
            >
              {client.name}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
            <img
              src={selected.img}
              alt={selected.name}
              className="w-72 h-52 object-cover rounded-lg shadow-lg"
            />
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <p className="mt-2 font-semibold">Services: {selected.service}</p>
              <p>Tools: {selected.tools}</p>
              <p>Result: {selected.result}</p>
            </div>
          </div>
        )}
      </section>
      <Services />

      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose A Creative Square?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg px-6 py-4 hover:bg-yellow-100"
            >
              {p}
            </div>
          ))}
        </div>
      </section>
      <FreeBusinessConsultationForm />

      <section className=" bg-orange-500 text-white text-center relative">
        <div className="fixed bottom-6 right-6 flex flex-col gap-4">
          <a
            href="https://wa.me/"
            className="bg-green-500 p-3 rounded-full text-white"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="mailto:info@creative.com"
            className="bg-blue-500 p-3 rounded-full text-white"
          >
            <EmailIcon />
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Client Reviews</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-lg italic">“{t.text}”</p>
              <p className="mt-3 font-semibold">– {t.name}</p>
              <p>{"⭐".repeat(t.rating)}</p>
            </div>
          ))}
        </div>
      </section>
    </Box>
  );
};

export default Home;

import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const FreeBusinessConsultationForm = () => {
  const servicesOptions = [
    "Branding",
    "Logo Design",
    "Website",
    "UI/UX",
    "Social Media",
    "SEO",
    "Marketing Strategy",
  ];

  const times = [
    "Anytime",
    "Morning (9am - 12pm)",
    "Afternoon (12pm - 3pm)",
    "Late Afternoon (3pm - 6pm)",
    "Evening (6pm - 9pm)",
  ];

  const [values, setValues] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    link: "",
    services: [],
    goals: "",
    preferredTime: "",
  });

  const handleChange = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
  };

  const handleServiceToggle = (service) => () => {
    setValues((v) => {
      const exists = v.services.includes(service);
      return {
        ...v,
        services: exists
          ? v.services.filter((s) => s !== service)
          : [...v.services, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", values);
    alert("Thanks! Your free call request has been received.");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-orange-500 p-6">
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="w-full max-w-3xl text-orange-500 bg-white rounded-2xl shadow-lg p-8 md:p-10"
        >
          {/* <Typography
            variant="h4"
            component="h1"
            className="mb-2 font-semibold"
          >
            Ready to Build Your Dream Brand? Let’s Get Started.
          </Typography> */}

          <h2 className="text-3xl font-bold mb-6">
            Let’s Make Your Brand the Talk of the Town!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              required
              label="Full Name"
              value={values.fullName}
              onChange={handleChange("fullName")}
              fullWidth
            />

            <TextField
              label="Business Name (optional)"
              value={values.businessName}
              onChange={handleChange("businessName")}
              fullWidth
            />

            <TextField
              required
              label="Email Address"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              fullWidth
            />

            <TextField
              label="Phone Number (optional)"
              value={values.phone}
              onChange={handleChange("phone")}
              fullWidth
            />

            <TextField
              label="Website / Social Media Link (optional)"
              value={values.link}
              onChange={handleChange("link")}
              fullWidth
              className="md:col-span-2"
            />

            <FormControl className="md:col-span-2">
              <InputLabel id="services-label">
                What Services Are You Interested In?
              </InputLabel>
              <Select
                labelId="services-label"
                multiple
                value={values.services}
                input={
                  <OutlinedInput label="What Services Are You Interested In?" />
                }
                renderValue={(selected) => (
                  <div className="flex flex-wrap gap-1">
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </div>
                )}
              >
                {servicesOptions.map((service) => (
                  <MenuItem key={service} value={service}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.services.includes(service)}
                          onChange={handleServiceToggle(service)}
                        />
                      }
                      label={service}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Describe Your Business Goals or Problems"
              value={values.goals}
              onChange={handleChange("goals")}
              fullWidth
              multiline
              rows={4}
              className="md:col-span-2"
            />

            <FormControl fullWidth>
              <InputLabel id="time-label">Preferred Time to Talk</InputLabel>
              <Select
                labelId="time-label"
                value={values.preferredTime}
                label="Preferred Time to Talk"
                onChange={handleChange("preferredTime")}
              >
                {times.map((t) => (
                  <MenuItem
                    key={t}
                    value={t}
                    className="!flex  !justify-items-start border border-red-500"
                  >
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-yellow-300 text-orange-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400"
            >
              Book a Free Strategy Call
            </button>
          </div>
        </Box>
      </div>
    </>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <Computer />,
      title: "Web Design & Full Stack Dev",
      desc: "Modern, responsive websites",
    },
    { icon: <Search />, title: "SEO", desc: "Rank your site higher on Google" },
    {
      icon: <Campaign />,
      title: "Performance Marketing",
      desc: "Drive traffic, boost conversions",
    },
    {
      icon: <Brush />,
      title: "Brand Management",
      desc: "Build and manage strong brands",
    },
    {
      icon: <ManageAccounts />,
      title: "Content Management",
      desc: "Strategy + Creation",
    },
    {
      icon: <Create />,
      title: "Social Media Marketing",
      desc: "Engage and grow audience",
    },
  ];
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 hover:bg-orange-500 hover:text-white transition-all"
          >
            <div className="text-4xl mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
