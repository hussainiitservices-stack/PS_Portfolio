import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ContactProjectCarousel } from '@/components/portfolio/ContactProjectCarousel';

/**
 * Contact page - Minimal, editorial typography
 * Display contact information only (no form)
 */

// const footerLogos = [
//   { name: 'Logo 1', src: 'https://i.ibb.co/q33qc4W5/1674821857-saasguru-logo.png' },
//   { name: 'Logo 2', src: 'https://i.ibb.co/yBh5Nt7D/blue-pink.png' },
//   { name: 'Logo 3', src: 'https://i.ibb.co/9mZZFB9p/salesfroce.png' },
//   { name: 'Logo 4', src: 'https://i.ibb.co/8nFtGpfz/MGT.jpg' },
//   { name: 'Logo 5', src: 'https://i.ibb.co/hxQvLnSJ/TMB-Media-modified.webp' },
// ];

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with us for inquiries, collaborations, and project bookings."
      />

      <div className="min-h-screen pt-4 md:pt-5">
        {/* Contact Content */}
        <section className="pt-6 pb-6 md:pt-0 md:pb-8">
          <div className="container-editorial">
            <div className="max-w-2xl mx-auto text-center">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-4">
                  Let's Work Together
                </h1>

                <p className="
                  text-[15px] md:text-[17px]
                  text-gray-900
                  font-sans font-light
                  leading-relaxed
                  drop-shadow-sm
                  mb-10
                ">
                  We're always interested in new projects and collaborations.
                  Reach out to discuss how we can bring your vision to life.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-8"
              >
                {/* Email */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="
                      block
                      text-[20px] md:text-[22px]
                      font-light
                      text-gray-900
                      drop-shadow-sm
                      hover:text-muted-foreground
                      transition-colors
                    "
                  >
                    {photographerInfo.email}
                  </a>
                </div>

                {/* Phone */}
                {photographerInfo.phone && (
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      Phone
                    </p>

                    <div className="space-y-1">
                      {photographerInfo.phone.map((number) => (
                        <a
                          key={number}
                          href={`tel:${number.replace(/[^\d+]/g, '')}`}
                          className="
                            block
                            text-base md:text-lg
                            font-sans font-normal
                            text-gray-800
                            hover:text-muted-foreground
                            transition-colors
                            tabular-nums
                          "
                          style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Location
                  </p>
                  <p
                    className="
                      text-[20px] md:text-[22px]
                      font-sans font-light
                      text-gray-900
                      drop-shadow-sm
                      leading-snug
                      tabular-nums
                    "
                    style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}
                  >
                    {photographerInfo.location}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Carousel */}
        <ContactProjectCarousel />

        {/* ================= LOGO SECTION (COMMENTED) ================= */}
        {/*
        <section className="relative w-screen left-1/2 -translate-x-1/2 border-t border-border mt-20">
          <div className="py-12 md:py-16">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
              {footerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="
                    h-11
                    md:h-14
                    w-auto
                    opacity-80
                    hover:opacity-100
                    transition-opacity
                  "
                />
              ))}
            </div>
          </div>
        </section>
        */}
        {/* ============================================================ */}

      </div>
    </>
  );
}