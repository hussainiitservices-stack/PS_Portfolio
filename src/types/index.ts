/**
 * Core TypeScript interfaces for Frame Portfolio
 * Based on SPECIFICATION.md data model requirements
 *
 * NOTE:
 * - Schema is intentionally simple
 * - No runtime logic
 * - No provider guessing
 * - Video handling is explicit
 */

/* ======================
   PROJECT ENUMS
====================== */

export type ProjectCategory = string;

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export type ProjectType = 'image' | 'video';

/**
 * Supported video providers
 * (YouTube intentionally excluded)
 */
export type VideoProvider = 'vimeo' | 'drive' ;

/* ======================
   IMAGE TYPE
====================== */

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

/* ======================
   PROJECT TYPE
====================== */

export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;

  category: ProjectCategory;

  /**
   * Explicit project type
   * - image → gallery-based project
   * - video → cinematic / documentary video
   */
  type: ProjectType;

  /**
   * Used for grid thumbnail
   * (image OR video thumbnail)
   */
  coverImage: string;

  /**
   * Image gallery
   * - Required for image projects
   * - Can be empty array for video projects
   */
  images: ProjectImage[];

  /**
   * SEO-safe description
   * (even if not rendered for video projects)
   */
  description: string;

  /* -------- Optional metadata (image projects mainly) -------- */

  client?: string;
  camera?: string;
  location?: string;

  /* -------- Video-specific fields -------- */

  /**
   * Required ONLY when type === 'video'
   */
  provider?: VideoProvider;

  /**
   * Vimeo video ID
   * Required when provider === 'vimeo'
   */
  vimeoId?: string;

    /**
   * Google Drive file ID
   * Required when provider === 'drive'
   */
  driveFileId?: string;

  /**
   * YouTube video ID
   * Used ONLY for embed playback
   */
  youtubeId?: string;

  /**
   * Optional keywords for filtering (contact carousel)
   */
  keywords?: string[];
}


/* ======================
   PHOTOGRAPHER INFO
====================== */

export interface PhotographerInfo {
  portraitImage: string;
  name: string;
  tagline: string;

  location?: string;
  email?: string;
  phone?: string;

  heroIntroduction?: string;
  biography?: string;
  approach?: string;
  awards?: string[];
  clients?: string[];
}

/* ======================
   CONTACT FORM
====================== */

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
