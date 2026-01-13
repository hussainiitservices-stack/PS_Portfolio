import { motion } from 'framer-motion';
import { useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { VideoCard } from '@/components/portfolio/VideoCard';

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
      />

      <div className="min-h-screen">

        {/* =========================
            ABOUT TEXT + RESUME LINK
        ========================= */}
        <section className="pt-12 pb-20">
          <div className="container-editorial max-w-3xl mx-auto text-center">
            <h2 className="text-sm tracking-[0.25em] uppercase mb-10 font-sans">
              ABOUT
            </h2>

            <div className="space-y-6 font-sans font-light leading-relaxed text-justify text-black">
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

            {/* Resume link moved HERE */}
            <button
              onClick={() => setResumeOpen(true)}
              className="mt-12 text-sm underline underline-offset-4 font-sans cursor-pointer"
            >
              Puneet Bakshi's RESUME 2026
            </button>
          </div>
        </section>

        {/* =========================
            SHOWREEL VIDEOS
        ========================= */}
        <section className="pt-20 pb-24 border-t border-border">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
              <VideoCard provider="vimeo" vimeoId="1153470464" />
              <VideoCard provider="vimeo" vimeoId="1153474335" />
              <VideoCard provider="vimeo" vimeoId="1153496488" />
              <VideoCard provider="vimeo" vimeoId="1153474376" />
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
