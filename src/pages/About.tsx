import { motion } from 'framer-motion';
import { useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with editorial layout
 * Large typography, generous whitespace, refined aesthetic
 */
export default function About() {
  const headline = 'Cinematic stories in motion.';

  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="About"
        description={`${photographerInfo.name} — ${photographerInfo.tagline}. Learn about our approach, philosophy, and vision.`}
        // image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        {/* =========================
            HERO SECTION
        ========================= */}
        <section className="pt-24 pb-16 border-b border-border">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-balance">
                {headline}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================
            ABOUT TEXT
        ========================= */}
        <section className="pt-12 pb-20">
          <div className="container-editorial max-w-3xl mx-auto text-center">
            <h2 className="text-sm tracking-[0.25em] uppercase mb-10 font-sans">
              ABOUT
            </h2>

            <div className="space-y-6 text-muted-foreground font-sans font-light leading-relaxed text-justify">
              <p>
                Advance Cinematics is a global creative studio helping brands turn
                ideas into unforgettable visual stories. We produce high-impact
                video content for clients across the USA, UK, Europe, Australia,
                and New Zealand, blending cinematic storytelling with
                broadcast-grade precision.
              </p>

              <p>
                With over 8 years of professional experience in the television
                industries of India and New Zealand, our leadership brings a rare
                mix of creative direction, technical mastery, and real-world
                production insight.
              </p>

              <p>
                We offer complete end-to-end solutions including filming, editing,
                motion graphics, color grading, sound design, and multi-platform
                delivery across television, digital, and commercial media.
              </p>

              <p>
                We are currently contracted with Trusted Media Brands Inc. (TMBI)
                and collaborate with 90seconds.com across the New Zealand and UK
                markets.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            AWARDS & CLIENTS
        ========================= */}
        <section className="section-padding border-t border-border bg-secondary/30">
          <div className="container-editorial">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* Awards */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-light mb-8">
                  Awards
                </h3>

                <ul className="space-y-4 text-muted-foreground font-sans font-light">
                  <li>
                    Mokomokai ‘The One’ — Winner, SILVER · NZCS Awards 2025
                  </li>
                  <li>
                    Veterans’ Affairs — Winner, GOLD · NZCS Awards 2024
                  </li>
                  <li>
                    ANZ ‘Rising Star’ — Winner, BRONZE · NZCS Awards 2016
                  </li>
                </ul>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="mt-8 text-sm underline underline-offset-4 font-sans cursor-pointer"
                >
                  Puneet Bakshi's RESUME 2026
                </button>
              </div>

              {/* Clients */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-light mb-8">
                  Select Clients
                </h3>

                <div className="grid grid-cols-2 gap-4 text-muted-foreground font-sans font-light">
                  <span>Trusted Media Brands</span>
                  <span>Family Handyman</span>
                  <span>Taste of Home</span>
                  <span>FailArmy</span>
                  <span>90 Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* =========================
    RESUME MODAL
========================= */}
{resumeOpen && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="resume-modal"
    >
      {/* Header */}
      <div className="resume-modal-header">
        <h3 className="text-sm font-sans">
          Puneet Bakshi's Resume
        </h3>

        <div className="flex items-center gap-3">
          <a
            href="https://docs.google.com/uc?export=download&id=1XiAtwQngsqf_uSKEVn7vXcno80xWjGFD"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-btn"
          >
            Download Resume
          </a>

          <button
            onClick={() => setResumeOpen(false)}
            className="resume-close-btn"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="resume-modal-body">
        <iframe
          src="https://docs.google.com/document/d/1XiAtwQngsqf_uSKEVn7vXcno80xWjGFD/preview"
          title="Resume Preview"
        />
      </div>
    </motion.div>
  </div>
)}


        {/* Bottom spacing */}
        <div className="h-12 md:h-16" />
      </div>
    </>
  );
}
