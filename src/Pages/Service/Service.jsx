import React from "react";

/**
 * ServicesPage.tsx
 * A TypeScript/React implementation of the "Services" wireframe for
 * A Creative Square. Ready to drop into a React + Tailwind project.
 *
 * Notes:
 * - Uses Tailwind classes for quick layout. Replace placeholders with real images/SVGs.
 * - Colors and fonts follow the brand guidelines provided by the user.
 */

const ORANGE = "#f77b37";
const YELLOW = "#fedd24";
import { Services } from "../Home/Home";
import { FreeBusinessConsultationForm } from "../Home/Home";

export const ServicesPage = () => {
  return (
    <div
      className="min-h-screen bg-white text-slate-800 antialiased"
      style={{
        fontFamily: `Lato, 'Open Sans', Oswald, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
      }}
    >
      {/* HERO */}
      <header
        className="py-20"
        style={{
          //   background: `linear-gradient(135deg, ${ORANGE}20 0%, ${YELLOW}10 100%)`,
          //   sx={{
          py: 10,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
          // }}
        }}
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Open Sans" }}
          >
            We Don’t Just Offer Services, We Engineer Your Digital Breakthrough!
          </h1>
          <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
            A full-stack creative and digital agency for the new digital age.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a className="rounded-2xl bg-[#f77b37] text-white px-6 py-3 font-medium">
              Let’s Work Together
            </a>
            <a className="rounded-2xl border px-6 py-3 font-medium">
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* SERVICES GRID */}
      <Services />
      <FreeBusinessConsultationForm />
    </div>
  );
};
