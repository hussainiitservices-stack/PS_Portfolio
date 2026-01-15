import { motion, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

export function ContactProjectCarousel() {
  /**
   * Get one project per category
   * Prefer video projects if available
   */
  const projectsByCategory = Object.values(
    projects.reduce<Record<string, Project>>((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = project;
      } else {
        if (
          acc[project.category].type !== 'video' &&
          project.type === 'video'
        ) {
          acc[project.category] = project;
        }
      }
      return acc;
    }, {})
  );

  /* ==============================
     Motion values
  ============================== */
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ==============================
     Helpers
  ============================== */
  const getMaxScroll = () => {
    if (!containerRef.current) return 0;
    return (
      containerRef.current.scrollWidth -
      containerRef.current.offsetWidth
    );
  };

  const slideBy = (amount: number) => {
    const maxScroll = getMaxScroll();
    const current = x.get();

    const next = Math.max(
      -maxScroll,
      Math.min(0, current + amount)
    );

    animate(x, next, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  /* ==============================
     Auto swipe every 5 sec
  ============================== */
  useEffect(() => {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) return;

    let direction = -1;

    const interval = setInterval(() => {
      const current = x.get();

      if (Math.abs(current) >= maxScroll) {
        direction = 1;
      } else if (current >= 0) {
        direction = -1;
      }

      animate(x, current + direction * 300, {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [x]);

  return (
    <section className="border-t border-border overflow-hidden relative">
      {/* Left Arrow */}
      <button
        onClick={() => slideBy(300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                   size-10 flex items-center justify-center
                   rounded-full border border-border
                   bg-background/80 backdrop-blur
                   hover:bg-accent transition"
        aria-label="Previous"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => slideBy(-300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                   size-10 flex items-center justify-center
                   rounded-full border border-border
                   bg-background/80 backdrop-blur
                   hover:bg-accent transition"
        aria-label="Next"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Carousel */}
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-4 px-6 md:px-12"
      >
        {projectsByCategory.map((project, index) => (
          <motion.div
            key={project.id}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px]"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Link to={`/project/${project.slug}`}>
              <ProjectCard
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
