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
            <h2 className="text-sm tracking-[0.25em] uppercase mb-10 font-sans text-foreground">
              ABOUT
            </h2>

            {/* ✅ THE FIX IS HERE */}
            <div className="space-y-6 font-sans font-light leading-relaxed text-justify text-foreground">
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

              {/* <p>
                We are currently contracted with Trusted Media Brands Inc. (TMBI)
                and collaborate with 90seconds.com across the New Zealand and UK
                markets.
              </p> */}
            </div>

            {/* Resume link */}
<button
  onClick={() => setResumeOpen(true)}
  className="
    mt-12 text-sm font-sans cursor-pointer
    relative overflow-hidden
    px-5 py-2 rounded-full
    border border-foreground/30
    text-foreground

    /* HARD RESET underline from anywhere */
    [text-decoration:none]
    decoration-transparent

    transition-colors duration-300

    /* custom underline */
    after:absolute after:left-1/2 after:-translate-x-1/2
    after:bottom-2 after:h-px after:w-6
    after:bg-foreground
    after:transition-all after:duration-300

    /* hover fill */
    hover:text-background
    hover:after:w-full
    hover:after:h-full
    hover:after:bottom-0
    hover:after:left-0
    hover:after:translate-x-0
  "
>
  <span className="relative z-10 pointer-events-none">
    RESUME
  </span>
</button>





          </div>
        </section>

        {/* =========================
            SHOWREEL VIDEOS
        ========================= */}
        <section className="pt-20 pb-24 border-t border-border">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
              <VideoCard provider="vimeo" vimeoId="1153496488" />
              <VideoCard provider="vimeo" vimeoId="1153470464" />
              <VideoCard provider="vimeo" vimeoId="1153474335" />
              {/* <VideoCard provider="vimeo" vimeoId="1153470464" /> */}
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
              <div className="resume-modal-header">
                <h3 className="text-sm font-sans text-foreground">
                    Resume
                </h3>

                <div className="flex items-center gap-3">
  <a
    href="https://docs.google.com/uc?export=download&id=1Zu6xW3_VQfaxjcmRWViWbSu1cRgtxeOE"
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

<div className="resume-modal-body">
  <iframe
    src="https://docs.google.com/document/d/1Zu6xW3_VQfaxjcmRWViWbSu1cRgtxeOE/preview"
    title="Resume Preview"
  />
</div>

            </motion.div>
          </div>
        )}

        <div className="h-12 md:h-16" />
      </div>
    </>
  );
}