import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with editorial layout
 * Large typography, generous whitespace, refined aesthetic
 */
export default function About() {
  const headline =
    'Shaping stories through cinematic editing, motion design, and visual storytelling.';

  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);


  /* =========================
     TYPEWRITER EFFECT
  ========================= */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + headline.charAt(index));
      index++;

      if (index >= headline.length) {
        clearInterval(interval);
        setShowContent(true);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     AUTO SCROLL AFTER TYPE
  ========================= */
  useEffect(() => {
    if (showContent) {
      window.scrollTo({
        top: window.innerHeight * 0.6,
        behavior: 'smooth',
      });
    }
  }, [showContent]);

  return (
    <>
      <SEOHead
        title="About"
        description={`${photographerInfo.name} — ${photographerInfo.tagline}. Learn about our approach, philosophy, and vision.`}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        {/* =========================
            HERO SECTION
        ========================= */}
        <section className="section-padding border-b border-border">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-8 text-balance">
                {typedText}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================
            CONTENT REVEAL AFTER TYPE
        ========================= */}
        {showContent && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* =========================
                ABOUT TEXT (CENTERED)
            ========================= */}
            <section className="section-padding">
              <div className="container-editorial max-w-3xl mx-auto text-center">
                <h2 className="text-sm tracking-[0.25em] uppercase mb-12 font-sans">
                  ABOUT
                </h2>

                <div className="space-y-6 text-muted-foreground font-sans font-light leading-relaxed text-justify">
                  <p>
                    Advance Cinematics is a global creative studio helping brands
                    turn ideas into unforgettable visual stories. We produce
                    high-impact video content for clients across the USA, UK,
                    Europe, Australia, and New Zealand, blending cinematic
                    storytelling with broadcast-grade precision.
                  </p>

                  <p>
                    With over 8 years of professional experience in the television
                    industries of India and New Zealand, our leadership brings a
                    rare mix of creative direction, technical mastery, and
                    real-world production insight. From large-scale TV productions
                    to fast-moving digital campaigns, we understand what it takes
                    to make content perform — not just look good.
                  </p>

                  <p>
                    We offer complete end-to-end solutions including filming,
                    editing, motion graphics, color grading, sound design, and
                    multi-platform delivery. Our work spans TV dramas,
                    documentaries, corporate films, commercials, short films,
                    infomercials, current-affairs programming, industrial
                    projects, and high-engagement social media content.
                  </p>

                  <p>
                    We are currently contracted with Trusted Media Brands Inc.
                    (TMBI), producing premium content for globally recognized U.S.
                    streaming brands such as Family Handyman, Taste of Home, and
                    FailArmy, and collaborate with 90seconds.com cloud-based video
                    creation platform across the New Zealand and UK markets.
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
                        Mokomokai ‘The One’ — Winner, SILVER (Cinematography) · NZCS Awards 2025
                      </li>
                      <li>
                        Veterans’ Affairs — Winner, GOLD (Cinematography) · NZCS Awards 2024
                      </li>
                      <li>
                        ANZ ‘Rising Star’ — Winner, BRONZE (Cinematography) · NZCS Awards 2016
                      </li>
                    </ul>

                    <button
  onClick={() => setResumeOpen(true)}
  className="mt-8 text-sm underline underline-offset-4 font-sans  cursor-pointer"
>
  CAMERA OPERATOR RESUME 2025
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
          </motion.section>
        )}
{resumeOpen && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-background w-[90vw] h-[85vh] rounded-lg relative p-6"
    >
      

      {/* Header */}
<div className="flex items-center justify-between mb-4">
  <h3 className="font-sans text-sm">
    Camera Operator Resume
  </h3>

  <div className="flex items-center gap-3">
    {/* Download Button */}
    <a
      href="https://docs.google.com/uc?export=download&id=1XiAtwQngsqf_uSKEVn7vXcno80xWjGFD"
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-sm
        font-sans
        px-4
        py-2
        border
        border-border
        rounded-full
        hover:bg-foreground
        hover:text-background
        transition-colors
      "
    >
      Download Resume
    </a>

    {/* Close Button */}
    <button
      onClick={() => setResumeOpen(false)}
      className="
        text-sm
        w-9
        h-9
        flex
        items-center
        justify-center
        rounded-full
        border
        border-border
        hover:bg-foreground
        hover:text-background
        transition-colors
      "
      aria-label="Close"
    >
      ✕
    </button>
  </div>
</div>


      {/* Iframe Preview */}
      <iframe
        src="https://docs.google.com/document/d/1XiAtwQngsqf_uSKEVn7vXcno80xWjGFD/preview"
        className="w-full h-full rounded"
        allow="autoplay"
      ></iframe>
    </motion.div>
  </div>
)}


        {/* Bottom spacing */}
        <div className="h-16 md:h-24" />
      </div>
    </>
  );
}
