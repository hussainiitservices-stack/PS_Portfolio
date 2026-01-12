import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Work page - Grid-based portfolio layout
 * Inspired by alexanderglucina.com with large thumbnails and hover effects
 */
export default function Work() {
  return (
    <>
      <SEOHead 
        title="Work"
        description="Browse our complete portfolio of visual work spanning diverse subjects and styles."
      />
      
      <div className="min-h-screen pt-24">

        {/* Hero Section */}
        {/* <section className="py-16 md:py-24 border-b border-border">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6">
                Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
                Browse my complete portfolio of video editing and motion graphic design projects, showcasing my skills in storytelling, visual effects, and creative direction.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Projects Grid */}
        <section className="py-6 md:py-8">
         <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-1 md:gap-2
              px-[4.5vw] py-[4vw]

            "
          >

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
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

                  {/* Hover overlay */}
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

        {/* Bottom spacing */}
        <div className="h-16 md:h-24" />
      </div>
    </>
  );
}
