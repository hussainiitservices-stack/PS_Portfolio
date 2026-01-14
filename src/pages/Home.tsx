import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { useState, useEffect, useRef } from 'react';

/**
 * Home page with Work intro animation
 */
export default function Home() {
  const location = useLocation();
  const showWorkIntro =
    new URLSearchParams(location.search).get('showWorkIntro') === 'true';

  const [showGrid, setShowGrid] = useState(!showWorkIntro);

  /* =====================================================
     HARD FIX: Lock initial scroll position on refresh
     ===================================================== */
  const initialScrollY = useRef<number | null>(null);

  useEffect(() => {
    initialScrollY.current = window.scrollY;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (initialScrollY.current !== null) {
          window.scrollTo({
            top: initialScrollY.current,
            left: 0,
            behavior: 'instant',
          });
        }
      });
    });
  }, []);
  /* ===================================================== */

  useEffect(() => {
    if (showWorkIntro) {
      setShowGrid(false);
    }
  }, [showWorkIntro]);

  return (
    <>
      <SEOHead
        title="ADVANCE CINEMATICS — Portfolio"
        description="A minimalist creative portfolio showcasing exceptional visual work through an editorial lens."
      />

      <div className="min-h-screen pt-20 md:pt-24">
        {/* Intro Section */}
        {showWorkIntro && (
          <section className="pt-1 pb-0 ">
            <div className="container-editorial">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
                onAnimationComplete={() =>
                  setTimeout(() => setShowGrid(true), 400)
                }
              >
                {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-4">
                  Work
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
                  Browse my complete portfolio of video editing and motion graphic
                  design projects, showcasing my skills in storytelling, visual
                  effects, and creative direction.
                </p> */}
              </motion.div>
            </div>
          </section>
        )}

        {/* Grid */}
        <motion.section
          className="pt-6 pb-12 md:pt-8 md:pb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={showGrid ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="project-card group block relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="project-card-overlay">
                    <span className="project-card-title">
                      {project.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="h-12 md:h-16" />
      </div>
    </>
  );
}
