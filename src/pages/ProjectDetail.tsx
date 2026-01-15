import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug, getRelatedProjects } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { VideoCard } from '@/components/portfolio/VideoCard';
import { Lightbox } from '@/components/portfolio/Lightbox';


/**
 * ProjectDetail
 * ------------------------------------------------
 * Image Project:
 * - Hero image
 * - Metadata
 * - Image gallery + lightbox
 *
 * Video Project:
 * - Full-width landscape video (Vimeo / Drive)
 * - Related videos only
 * - NO gallery, NO metadata, NO lightbox
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 404 handling
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const isVideoProject = project.type === 'video';

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      {/* SEO stays for both (safe & lightweight) */}
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        {/* ==================================
            HERO / VIDEO BANNER
        =================================== */}
        <motion.div
          className="relative w-full bg-black overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isVideoProject ? (
            /* VIDEO PROJECT HERO */
            <div className="w-full aspect-video">
              <VideoCard
                provider={project.provider} // 'vimeo' | 'drive'
                vimeoId={project.vimeoId}
                driveFileId={project.driveFileId}
              />
            </div>
          ) : (
            /* IMAGE PROJECT HERO */
            <div className="relative w-full h-[70vh] bg-muted overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          )}
        </motion.div>

        {/* ==================================
            IMAGE PROJECT CONTENT
        =================================== */}
        {!isVideoProject && (
          <>
            {/* Project Info */}
            <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title & Meta */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                    {project.title}
                  </h1>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>{project.year}</span>
                    </div>

                    <div className="flex items-center gap-2 capitalize">
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>

                    {project.location && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          <span>{project.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                  {project.description}
                </p>

                {/* Technical Details */}
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {project.camera && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm uppercase text-muted-foreground">
                        <Camera className="size-4" />
                        <span>Camera</span>
                      </div>
                      <p>{project.camera}</p>
                    </div>
                  )}

                  {project.client && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm uppercase text-muted-foreground">
                        <User className="size-4" />
                        <span>Client</span>
                      </div>
                      <p>{project.client}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </section>

            {/* Image Gallery */}
            <section className="py-12 md:py-16">
              <div className="space-y-8 md:space-y-12">
                {project.images.map((image, index) => (
                  <ScrollReveal key={image.id} delay={index * 0.1}>
                    <ImageWithLightbox
                      image={image}
                      onClick={() => openLightbox(index)}
                      priority={index === 0}
                      index={index}
                      className="w-full"
                    />
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Lightbox */}
            <Lightbox
              images={project.images}
              currentIndex={currentImageIndex}
              isOpen={lightboxOpen}
              onClose={closeLightbox}
              onNavigate={setCurrentImageIndex}
            />
          </>
        )}

        {/* ==================================
            RELATED VIDEOS (VIDEO ONLY)
        =================================== */}
        {isVideoProject && (
          <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-light tracking-wide mb-10">
              Related Videos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getRelatedProjects(project.category, project.id)
                .filter(p => p.type === 'video')
                .map(video => (
                  <Link
                    key={video.id}
                    to={`/project/${video.slug}`}
                    className="group block"
                  >
                    <div className="aspect-video overflow-hidden bg-black">
                      <img
                        src={video.coverImage}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-light">
                      {video.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}