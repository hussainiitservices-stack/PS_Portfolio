import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ContactProjectCarousel } from '@/components/portfolio/ContactProjectCarousel';

/**
 * Contact page - Minimal, editorial typography
 * Display contact information only (no form)
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with us for inquiries, collaborations, and project bookings."
      />

      <div className="min-h-screen flex flex-col pt-4 md:pt-5">
        <section className="flex-1 pt-6 pb-12 md:pt-0 md:pb-16">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center scale-[0.8] md:scale-[0.85] origin-top">


              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
                  Let's Work Together
                </h1>
                <p className="text-base md:text-lg text-muted-foreground font-sans font-light leading-[2em] mb-14">
                  We're always interested in new projects and collaborations.
                  Reach out to discuss how we can bring your vision to life.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-10"
              >
                {/* Email */}
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans">
                    Email
                  </p>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="block text-xl md:text-2xl lg:text-3xl font-light font-sans text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {photographerInfo.email}
                  </a>
                </div>

                {/* Phone */}
                {photographerInfo.phone && (
                  <div>
                    <p
                      className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
                      style={{
                        fontFamily:
                          'Merriweather, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                      }}
                    >
                      Phone
                    </p>
                    <div className="space-y-2">
                      {photographerInfo.phone.map((number) => (
                        <a
                          key={number}
                          href={`tel:${number.replace(/[^\d+]/g, '')}`}
                          className="block text-2xl md:text-3xl lg:text-4xl font-light text-foreground hover:text-muted-foreground transition-colors"
                          style={{
                            fontFamily:
                              'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                          }}
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location */}
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
                    style={{
                      fontFamily:
                        'Merriweather, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Location
                  </p>
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground"
                    style={{
                      fontFamily:
                        'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    {photographerInfo.location}
                  </p>
                </div>
              </motion.div>

              {/* Socials (optional) */}
              {/*
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-20 pt-12 border-t border-border"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-sans">
                  Follow Us
                </p>
                <div className="flex justify-center gap-8">
                  {photographerInfo.socialLinks.instagram && (
                    <a
                      href={photographerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>
              */}
            </div>
          </div>
        </section>

        <ContactProjectCarousel />
      </div>
    </>
  );
}
