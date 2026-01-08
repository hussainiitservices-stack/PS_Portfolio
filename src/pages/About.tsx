import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with editorial layout
 * Large typography, generous whitespace, refined aesthetic
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`${photographerInfo.name} — ${photographerInfo.tagline}. Learn about our approach, philosophy, and vision.`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Bold headline */}
        <section className="section-padding border-b border-border">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-8 text-balance">
                We create visual stories that resonate and inspire
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content - Split layout */}
        <section className="section-padding">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={photographerInfo.portraitImage}
                    alt="Studio portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
                      Our Philosophy
                    </h2>
                    <div className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed">
                      {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Approach */}
                  {photographerInfo.approach && (
                    <div className="pt-8 border-t border-border">
                      <h3 className="text-2xl font-display font-light mb-4">
                        Our Approach
                      </h3>
                      <div className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed">
                        {photographerInfo.approach.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards & Clients Section */}
        <section className="section-padding border-t border-border bg-secondary/30">
          <div className="container-editorial">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* Awards */}
              {photographerInfo.awards && photographerInfo.awards.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-light mb-8">
                    Recognition
                  </h3>
                  <ul className="space-y-4">
                    {photographerInfo.awards.map((award, index) => (
                      <li 
                        key={index}
                        className="text-muted-foreground font-sans font-light border-b border-border pb-4 last:border-0"
                      >
                        {award}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Clients */}
              {photographerInfo.clients && photographerInfo.clients.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-light mb-8">
                    Select Clients
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {photographerInfo.clients.map((client, index) => (
                      <span 
                        key={index}
                        className="text-muted-foreground font-sans font-light"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-16 md:h-24" />
      </div>
    </>
  );
}
