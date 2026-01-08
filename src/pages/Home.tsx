import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight } from 'lucide-react';

/**
 * Home page doubles as Work page - Grid-based portfolio layout
 * Inspired by alexanderglucina.com with large thumbnails and hover effects
 */
export default function Home() {
  return (
    <>
      <SEOHead 
        title="Studio — Creative Portfolio"
        description="A minimalist creative portfolio showcasing exceptional visual work through an editorial lens."
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Minimal, editorial */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={projects[0]?.coverImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight">
                Visual Stories
              </h1>
              <p className="text-lg md:text-xl font-sans font-light tracking-wide text-white/80 max-w-xl mx-auto">
                Capturing moments that transcend the ordinary
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-16 bg-white/40"
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Grid - Like alexanderglucina.com */}
        <section className="py-2 md:py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="project-card group block relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                  
                  {/* Hover overlay with yellow title */}
                  <div className="project-card-overlay">
                    <span className="project-card-title">
                      {project.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* View all work CTA */}
        <section className="py-16 md:py-24">
          <div className="container-editorial text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 text-sm font-sans font-medium tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
