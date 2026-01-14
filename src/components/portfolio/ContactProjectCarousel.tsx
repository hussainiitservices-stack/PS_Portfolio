import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

/**
 * Contact page project carousel
 * - One project per category
 * - Drag-based horizontal carousel
 * - Auto-updates when categories are added
 */
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
        // Prefer video over image if both exist
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

  return (
<section className="border-t border-border overflow-hidden">
      {/* Section heading */}
      {/* <div className="container-editorial mb-12">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
          Selected Work
        </p>
      </div> */}

      {/* Carousel */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        className="flex gap-4 cursor-grab active:cursor-grabbing px-6 md:px-12"
      >
        {projectsByCategory.map((project, index) => (
          <motion.div
  key={project.id}
  className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px]"
  whileHover={{ scale: 1.03, y: -6 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  whileTap={{ scale: 0.97 }}
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
