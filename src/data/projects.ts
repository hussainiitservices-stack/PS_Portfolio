import type { Project, ProjectCategory } from '@/types';

export const projects: Project[] = [
 {
  id: '1',
  title: 'Tesla | Vision of the Future',
  slug: 'tesla-vision-of-the-future',
  year: '2024',

  // Documentary-style branded film
  category: 'documentary',

  // Explicitly mark as video project
  type: 'video',

  // Explicit video provider (NO GUESSING)
  provider: 'drive',

  /**
   * Google Drive thumbnail for grid / preview
   * Format:
   * https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
   */
  coverImage:
    'https://drive.google.com/thumbnail?id=1s92ONyoqVlPIe8zFO_qLpt95T15uaAQb&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1s92ONyoqVlPIe8zFO_qLpt95T15uaAQb',

  description:
    'A cinematic documentary-style commercial exploring Tesla’s vision, innovation, and impact on the future of mobility. The film blends powerful storytelling, immersive visuals, and atmospheric sound design to highlight technology, sustainability, and human ambition through a refined cinematic lens.',

  client: 'Tesla',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '1-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Tesla vehicle revealed in cinematic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '1-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Interior detail shot with futuristic design language',
      aspectRatio: 'landscape'
    },
    {
      id: '1-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Tesla driving sequence captured in motion',
      aspectRatio: 'landscape'
    },
    {
      id: '1-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Closing cinematic frame emphasizing innovation',
      aspectRatio: 'landscape'
    }
  ]
},

  // {
  //   id: '2',
  //   title: 'Urban Portraits',
  //   category: 'portraits',
  //   year: '2024',
  //   slug: 'urban-portraits',
  //   // Photo by Bradley Andrews on Unsplash
  //   coverImage: 'https://images.unsplash.com/photo-1761069234906-a7c77124f641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
  //   description: 'A portrait series celebrating the diversity and character of city dwellers. Each subject was photographed in their favorite urban location, revealing the intimate connection between people and their environment.',
  //   client: 'The New York Times Magazine',
  //   camera: 'Canon EOS R5',
  //   location: 'New York City',
  //   images: [
  //     {
  //       id: '2-1',
  //       // Photo by ali mahmoodi on Unsplash
  //       src: 'https://images.unsplash.com/photo-1559123988-ebd5228736b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
  //       alt: 'Portrait of young man in urban setting',
  //       aspectRatio: 'portrait'
  //     },
  //     {
  //       id: '2-2',
  //       // Photo by mouad bouallayel on Unsplash
  //       src: 'https://images.unsplash.com/photo-1628173422874-0d18ff5bfb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
  //       alt: 'Professional portrait in natural light',
  //       aspectRatio: 'portrait'
  //     },
  //     {
  //       id: '2-3',
  //       // Photo by Ivan Lenin on Unsplash
  //       src: 'https://images.unsplash.com/photo-1581329318020-a226e3713ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
  //       alt: 'Candid street portrait',
  //       aspectRatio: 'square'
  //     },
  //     {
  //       id: '2-4',
  //       // Photo by Elric Pxl on Unsplash
  //       src: 'https://images.unsplash.com/photo-1651464416004-60ae4e4846d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
  //       alt: 'Portrait with city backdrop',
  //       aspectRatio: 'portrait'
  //     }
  //   ]
  // },
  
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};

// Helper function to get related projects by category (excluding current)
export const getRelatedProjects = (
  category: ProjectCategory,
  currentId: string
): Project[] => {
  return projects.filter(
    project =>
      project.category === category &&
      project.id !== currentId
  );
};