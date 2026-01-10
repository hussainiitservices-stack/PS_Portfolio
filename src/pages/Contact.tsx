import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page - Minimal, large typography
 * Display contact information only (no form)
 * Editorial, centered layout
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with us for inquiries, collaborations, and project bookings. Reach out via email or phone.`}
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Main Content - Centered, editorial layout */}
        <section className="flex-1 flex items-center justify-center section-padding">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-8">
                  Let's Work Together
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed mb-16">
                  We're always interested in new projects and collaborations. 
                  Reach out to discuss how we can bring your vision to life.
                </p>
              </motion.div>

              {/* Contact Info - Large typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-12"
              >
                {/* Email - Primary contact */}
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Email
                  </p>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {photographerInfo.email}
                  </a>
                </div>

                {/* Phone - Optional */}
                {photographerInfo.phone && (
                  <div>
                    <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Phone
                    </p>
                    <a
                      href={`tel:${photographerInfo.phone}`}
                      className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {photographerInfo.phone}
                    </a>
                  </div>
                )}

                {/* Location */}
                <div>
                  <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Location
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground">
                    {photographerInfo.location}
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-20 pt-12 border-t border-border"
              >
                <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Follow Us
                </p>
                <div className="flex items-center justify-center gap-8">
                  {photographerInfo.socialLinks.instagram && (
                    <a
                      href={photographerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                      <span className="text-sm font-sans font-light hidden md:inline">Instagram</span>
                    </a>
                  )}
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                      <span className="text-sm font-sans font-light hidden md:inline">LinkedIn</span>
                    </a>
                  )}
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="size-5" />
                    <span className="text-sm font-sans font-light hidden md:inline">Email</span>
                  </a>
                </div>
              </motion.div> */}

              {/* Availability Notice */}
              {/* {photographerInfo.availability && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-16"
                >
                  <p className="text-sm text-muted-foreground font-sans font-light">
                    {photographerInfo.availability}
                  </p>
                </motion.div>
              )} */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
