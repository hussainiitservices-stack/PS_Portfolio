import type { Project, ProjectCategory } from '@/types';

export const projects: Project[] = [
 {
  id: '1',
  title: 'Tesla | Vision of the Future',
  slug: 'tesla-vision-of-the-future',
  year: '2024',

  // Documentary-style branded film
  category: 'commercial',

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

  {
  id: '2',
  title: 'Motion Developer',
  slug: 'motion-developer',
  year: '2024',

  // Motion-focused creative project
  category: 'motion ',

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

  'https://lh3.googleusercontent.com/d/1M81-2mdyAQiuySduvyl4YCca0bwSA7TI=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1M81-2mdyAQiuySduvyl4YCca0bwSA7TI',

  description:
    'A motion-driven visual piece showcasing dynamic animation, smooth transitions, and rhythm-based storytelling. The project highlights precision in motion design, timing, and visual flow, crafted to communicate ideas through movement and cinematic pacing.',

  client: 'Personal Project',
  location: 'India',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '2-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Motion sequence showcasing dynamic animation flow',
      aspectRatio: 'landscape'
    },
    {
      id: '2-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Close-up frame highlighting motion details',
      aspectRatio: 'landscape'
    },
    {
      id: '2-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Visual rhythm and transitions in motion design',
      aspectRatio: 'landscape'
    },
    {
      id: '2-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final cinematic frame emphasizing motion storytelling',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '3',
  title: 'Motion Graphics',
  slug: 'motion-graphics',
  year: '2024',

  // Motion graphics / commercial-style video
  category: 'motion ',

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
    'https://drive.google.com/thumbnail?id=1xtLvAO1qS2sF3KMXih3FAAgbxvYu3vmR&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1xtLvAO1qS2sF3KMXih3FAAgbxvYu3vmR',

  description:
    'A high-energy motion graphics project focused on clean transitions, bold visual language, and rhythmic animation. The film blends typography, motion design, and cinematic timing to deliver impactful visual storytelling suitable for commercial and digital platforms.',

  client: 'Personal Project',
  location: 'India',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '3-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Dynamic motion graphics composition with bold animation',
      aspectRatio: 'landscape'
    },
    {
      id: '3-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Typography-driven motion graphics sequence',
      aspectRatio: 'landscape'
    },
    {
      id: '3-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Fast-paced animated transition frame',
      aspectRatio: 'landscape'
    },
    {
      id: '3-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final motion graphics frame with cinematic finish',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '4',
  title: 'Magento',
  slug: 'magento',
  year: '2024',

  // Commercial / product-focused video
  category: 'Magento',

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
    'https://drive.google.com/thumbnail?id=1JRKN2aoT3HtUpHtIya_KSpHDgOT6UI5L&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1JRKN2aoT3HtUpHtIya_KSpHDgOT6UI5L',

  description:
    'A commercial video project showcasing Magento through clean visuals, structured motion, and clear product-focused storytelling. The film emphasizes performance, scalability, and digital commerce solutions with a polished cinematic approach.',

  client: 'Magento',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '4-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Magento platform showcased through clean visual storytelling',
      aspectRatio: 'landscape'
    },
    {
      id: '4-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Motion-driven product highlights for Magento',
      aspectRatio: 'landscape'
    },
    {
      id: '4-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic transitions emphasizing e-commerce solutions',
      aspectRatio: 'landscape'
    },
    {
      id: '4-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting Magento branding and impact',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '5',
  title: 'Generative AI',
  slug: 'generative-ai',
  year: '2024',

  // Experimental / commercial motion video
  category: 'AI',

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
    'https://drive.google.com/thumbnail?id=1WGdtBWaO-adoFqZQ_ypNY1fpLmmXbvVd&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1WGdtBWaO-adoFqZQ_ypNY1fpLmmXbvVd',

  description:
    'An experimental generative AI video project exploring algorithmic visuals, evolving patterns, and machine-driven creativity. The film blends motion design and artificial intelligence to create a forward-looking visual narrative with a cinematic finish.',

  client: 'Personal Project',
  location: 'India',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '5-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Generative AI visuals with evolving abstract patterns',
      aspectRatio: 'landscape'
    },
    {
      id: '5-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'AI-generated motion graphics composition',
      aspectRatio: 'landscape'
    },
    {
      id: '5-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Machine-driven animation frame with cinematic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '5-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame showcasing generative AI storytelling',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '6',
  title: 'Family Handy',
  slug: 'family-handy',
  year: '2024',

  // Commercial service-based video
  category: 'Family_handy',

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
    'https://drive.google.com/thumbnail?id=1bl5B9ifXA78vptdUV8qgevQVriBRjR41&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1bl5B9ifXA78vptdUV8qgevQVriBRjR41',

  description:
    'A commercial video project created for Family Handy, highlighting reliable home services through clean visuals, smooth motion, and clear storytelling. The film focuses on trust, efficiency, and everyday solutions presented with a cinematic and approachable tone.',

  client: 'Family Handy',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '6-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Family Handy services showcased through cinematic visuals',
      aspectRatio: 'landscape'
    },
    {
      id: '6-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Motion-driven service highlights for Family Handy',
      aspectRatio: 'landscape'
    },
    {
      id: '6-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic transition emphasizing reliability and care',
      aspectRatio: 'landscape'
    },
    {
      id: '6-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting Family Handy branding',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '7',
  title: 'Taste of Home',
  slug: 'taste-of-home',
  year: '2024',

  // Food / lifestyle commercial video
  category: 'commercial',

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
    'https://drive.google.com/thumbnail?id=117M3MTZJpRk1JMy7h7yOV4MdJf6ZfIUg&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '117M3MTZJpRk1JMy7h7yOV4MdJf6ZfIUg',

  description:
    'A lifestyle-driven food commercial capturing the warmth, flavor, and emotional connection of home-cooked meals. The film blends cinematic food visuals, smooth motion, and storytelling to celebrate comfort, tradition, and togetherness.',

  client: 'Taste of Home',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '7-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic food visuals celebrating home-style cooking',
      aspectRatio: 'landscape'
    },
    {
      id: '7-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Warm lifestyle shots emphasizing comfort and tradition',
      aspectRatio: 'landscape'
    },
    {
      id: '7-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Close-up food textures captured in cinematic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '7-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting the essence of Taste of Home',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '8',
  title: 'How to Future-Proof Your Magento Site in 2025',
  slug: 'how-to-future-proof-your-magento-site-in-2025',
  year: '2024',

  // Educational / commercial video
  category: 'Magento',

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
    'https://drive.google.com/thumbnail?id=1RehbZmhtlPQvCnmSPPgkRK7u3RmvF2nA&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1RehbZmhtlPQvCnmSPPgkRK7u3RmvF2nA',

  description:
    'An educational commercial video focused on future-proofing Magento websites for 2025. The project covers performance, scalability, security, and modern e-commerce practices, presented through clean motion graphics and clear, structured storytelling.',

  client: 'Magento',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '8-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Educational motion graphics explaining Magento future strategies',
      aspectRatio: 'landscape'
    },
    {
      id: '8-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Visual breakdown of Magento performance and scalability concepts',
      aspectRatio: 'landscape'
    },
    {
      id: '8-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic frame highlighting modern e-commerce solutions',
      aspectRatio: 'landscape'
    },
    {
      id: '8-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Closing frame emphasizing future-ready Magento websites',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '9',
  title: 'Doco Style',
  slug: 'doco-style',
  year: '2024',

  // Documentary-style commercial video
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
    'https://drive.google.com/thumbnail?id=104egKh3-GNnsHSb0MGguYZeI2x3B3nlI&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '104egKh3-GNnsHSb0MGguYZeI2x3B3nlI',

  description:
    'A documentary-style commercial project focused on natural storytelling, real moments, and authentic visuals. The film embraces a grounded cinematic approach with handheld motion, observational framing, and atmospheric sound design.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '9-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Documentary-style frame captured with natural lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '9-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Observational cinematic shot emphasizing realism',
      aspectRatio: 'landscape'
    },
    {
      id: '9-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Handheld motion sequence with authentic storytelling',
      aspectRatio: 'landscape'
    },
    {
      id: '9-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Closing frame highlighting documentary-style visuals',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '10',
  title: 'E-commerce',
  slug: 'e-commerce',
  year: '2024',

  // E-commerce / product-focused commercial video
  category: 'commercial',

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
    'https://drive.google.com/thumbnail?id=1cILAY2JFWtetGsEi0KXZ1EAbw-G5DIky&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1cILAY2JFWtetGsEi0KXZ1EAbw-G5DIky',

  description:
    'A commercial e-commerce video designed to highlight online shopping experiences through clean visuals, structured motion, and product-focused storytelling. The film emphasizes usability, performance, and conversion-driven design with a cinematic presentation.',

  client: 'E-commerce Brand',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '10-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'E-commerce product showcase with cinematic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '10-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Motion-driven product interaction visuals',
      aspectRatio: 'landscape'
    },
    {
      id: '10-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic transition highlighting digital commerce flow',
      aspectRatio: 'landscape'
    },
    {
      id: '10-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing modern e-commerce experience',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '11',
  title: 'Info',
  slug: 'info',
  year: '2024',

  // Informational / commercial video
  category: 'commercial',

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
    'https://drive.google.com/thumbnail?id=1R0_P8Ap80qcySHglGmOBkMBQ7LJqBQrp&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1R0_P8Ap80qcySHglGmOBkMBQ7LJqBQrp',

  description:
    'An informational commercial video designed to communicate ideas clearly through structured visuals, clean motion, and concise storytelling. The project focuses on clarity, accessibility, and effective visual communication with a polished cinematic style.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '11-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Informational visuals presented with clean motion design',
      aspectRatio: 'landscape'
    },
    {
      id: '11-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Structured visual storytelling for clear communication',
      aspectRatio: 'landscape'
    },
    {
      id: '11-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic frame highlighting informational content',
      aspectRatio: 'landscape'
    },
    {
      id: '11-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing clarity and message delivery',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '12',
  title: 'Salesforce',
  slug: 'salesforce',
  year: '2024',

  // Enterprise / SaaS commercial video
  category: 'Salesforce',

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
    'https://drive.google.com/thumbnail?id=10f1VGqbpxRr-PjnKhbJNan6lVYw3C2VP&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '10f1VGqbpxRr-PjnKhbJNan6lVYw3C2VP',

  description:
    'A commercial video project created for Salesforce, focusing on enterprise solutions, scalability, and digital transformation. The film presents complex concepts through clean motion graphics, structured visuals, and cinematic storytelling tailored for a SaaS audience.',

  client: 'Salesforce',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '12-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Salesforce enterprise solutions showcased through cinematic visuals',
      aspectRatio: 'landscape'
    },
    {
      id: '12-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Motion-driven SaaS storytelling for Salesforce',
      aspectRatio: 'landscape'
    },
    {
      id: '12-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Cinematic transition highlighting digital transformation',
      aspectRatio: 'landscape'
    },
    {
      id: '12-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing Salesforce branding and impact',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '13',
  title: 'SaaS 1',
  slug: 'saas-1',
  year: '2024',

  // SaaS / enterprise commercial video
  category: 'SaaS',

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
    'https://drive.google.com/thumbnail?id=1qPI4MB-ApJFfAzmRM61RF6lVQ68iTuBJ&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1qPI4MB-ApJFfAzmRM61RF6lVQ68iTuBJ',

  description:
    'A SaaS-focused commercial video highlighting software capabilities, scalability, and digital efficiency. The project uses clean motion graphics, structured layouts, and cinematic pacing to communicate complex features with clarity and impact.',

  client: 'SaaS Product',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '13-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'SaaS platform features presented through clean motion design',
      aspectRatio: 'landscape'
    },
    {
      id: '13-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Cinematic SaaS storytelling with structured visuals',
      aspectRatio: 'landscape'
    },
    {
      id: '13-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Motion-driven SaaS interface highlights',
      aspectRatio: 'landscape'
    },
    {
      id: '13-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing modern SaaS solutions',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '14',
  title: 'SaaS 2',
  slug: 'saas-2',
  year: '2024',

  // SaaS / enterprise commercial video
  category: 'SaaS',

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
    'https://drive.google.com/thumbnail?id=1r3CGOrx33zdYfIxkp4e-hRLOHLLCwHZr&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1r3CGOrx33zdYfIxkp4e-hRLOHLLCwHZr',

  description:
    'A SaaS-focused commercial video highlighting advanced software capabilities, performance, and scalability. The project uses clean motion design, structured visual storytelling, and cinematic pacing to communicate enterprise-grade solutions effectively.',

  client: 'SaaS Product',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '14-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'SaaS platform features presented through cinematic motion graphics',
      aspectRatio: 'landscape'
    },
    {
      id: '14-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Enterprise software storytelling with clean visual structure',
      aspectRatio: 'landscape'
    },
    {
      id: '14-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Motion-driven SaaS interface and workflow highlights',
      aspectRatio: 'landscape'
    },
    {
      id: '14-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing modern SaaS solutions',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '15',
  title: 'Tutorial',
  slug: 'tutorial',
  year: '2024',

  // Educational / tutorial-style commercial video
  category: 'tutorial',

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
    'https://drive.google.com/thumbnail?id=1hiu875bBAsIIHdnGj5g-S4EL7hSnxEXq&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1hiu875bBAsIIHdnGj5g-S4EL7hSnxEXq',

  description:
    'A tutorial-style video designed to educate and guide viewers through concepts with clarity and precision. The project combines clean screen visuals, structured pacing, and motion-driven highlights to make learning intuitive and engaging.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '15-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Tutorial video showcasing step-by-step guidance',
      aspectRatio: 'landscape'
    },
    {
      id: '15-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Clean instructional visuals with motion highlights',
      aspectRatio: 'landscape'
    },
    {
      id: '15-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Screen-focused tutorial sequence with cinematic framing',
      aspectRatio: 'landscape'
    },
    {
      id: '15-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing clarity and learning outcome',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '16',
  title: 'Travel',
  slug: 'travel',
  year: '2024',

  // Travel / lifestyle commercial video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1UlAmR2z1Sy2_CMGboMsE2N7f1K6Mp4ee&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1UlAmR2z1Sy2_CMGboMsE2N7f1K6Mp4ee',

  description:
    'A travel-focused video project capturing exploration, movement, and atmosphere through cinematic visuals and fluid motion. The film emphasizes locations, transitions, and emotional storytelling to convey the spirit of travel and discovery.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '16-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic travel visuals capturing exploration and movement',
      aspectRatio: 'landscape'
    },
    {
      id: '16-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Wide scenic shot emphasizing atmosphere and scale',
      aspectRatio: 'landscape'
    },
    {
      id: '16-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Motion-driven travel sequence with cinematic pacing',
      aspectRatio: 'landscape'
    },
    {
      id: '16-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting the spirit of travel',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '17',
  title: 'Russian Helicopter',
  slug: 'russian-helicopter',
  year: '2024',

  // Aviation / industrial cinematic-style video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1U7xIFi262rGlwvRodSIJr10syOpa0pRF&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1U7xIFi262rGlwvRodSIJr10syOpa0pRF',

  description:
    'An aviation-focused cinematic video showcasing a Russian helicopter through powerful visuals, mechanical detail shots, and dramatic motion. The project emphasizes engineering precision, scale, and performance using a documentary-inspired commercial approach.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '17-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic helicopter shot emphasizing scale and power',
      aspectRatio: 'landscape'
    },
    {
      id: '17-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Mechanical detail shot highlighting aviation engineering',
      aspectRatio: 'landscape'
    },
    {
      id: '17-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Dynamic flight sequence captured in motion',
      aspectRatio: 'landscape'
    },
    {
      id: '17-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final cinematic frame showcasing helicopter performance',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '18',
  title: 'Axcon',
  slug: 'axcon',
  year: '2024',

  // Corporate / commercial video
  category: 'commercial',

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
    'https://drive.google.com/thumbnail?id=1CRIPob8zbosaC5wxELSq5bYQQMDQcWMu&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1CRIPob8zbosaC5wxELSq5bYQQMDQcWMu',

  description:
    'A corporate commercial video created for Axcon, focusing on brand presence, professional storytelling, and clean cinematic visuals. The film highlights services and identity through structured motion, refined pacing, and a polished visual language.',

  client: 'Axcon',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '18-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Axcon brand showcased through cinematic corporate visuals',
      aspectRatio: 'landscape'
    },
    {
      id: '18-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Professional motion design highlighting Axcon services',
      aspectRatio: 'landscape'
    },
    {
      id: '18-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Clean corporate transitions with cinematic pacing',
      aspectRatio: 'landscape'
    },
    {
      id: '18-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing Axcon brand identity',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '19',
  title: 'Cinematic',
  slug: 'cinematic',
  year: '2024',

  // Cinematic commercial-style video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=14QYLy0ECYMttNgkN_h8keZ8wYUPRxTD7&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '14QYLy0ECYMttNgkN_h8keZ8wYUPRxTD7',

  description:
    'A cinematic-style video project focused on dramatic visuals, atmospheric lighting, and emotionally driven storytelling. The film emphasizes mood, pacing, and composition to deliver a strong cinematic experience with a refined visual language.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '19-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic frame with dramatic lighting and composition',
      aspectRatio: 'landscape'
    },
    {
      id: '19-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Moody cinematic shot emphasizing atmosphere',
      aspectRatio: 'landscape'
    },
    {
      id: '19-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Motion-driven cinematic sequence',
      aspectRatio: 'landscape'
    },
    {
      id: '19-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final cinematic frame with polished visual tone',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '20',
  title: 'AI Warfare',
  slug: 'ai-warfare',
  year: '2024',

  // Conceptual / cinematic commercial video
  category: 'AI',

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
    'https://drive.google.com/thumbnail?id=1cUIFMGrVEFVYpZPHNurqccfVcvjibaaR&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1cUIFMGrVEFVYpZPHNurqccfVcvjibaaR',

  description:
    'A conceptual cinematic video exploring the theme of AI warfare through dramatic visuals, high-contrast lighting, and intense motion design. The project focuses on tension, scale, and future-facing storytelling with a strong cinematic tone.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '20-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic AI warfare visual with dramatic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '20-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Futuristic warfare concept driven by artificial intelligence',
      aspectRatio: 'landscape'
    },
    {
      id: '20-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'High-intensity cinematic sequence representing AI conflict',
      aspectRatio: 'landscape'
    },
    {
      id: '20-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing the impact of AI-driven warfare',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '21',
  title: 'Flame Thrower',
  slug: 'flame-thrower',
  year: '2024',

  // High-impact cinematic commercial video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1ZobJ26QyLmDSflgSQg27bXXwKEodqeG3&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1ZobJ26QyLmDSflgSQg27bXXwKEodqeG3',

  description:
    'A high-impact cinematic video centered around intense visuals, controlled chaos, and dramatic motion. The project emphasizes raw energy, precision, and atmosphere through bold lighting, slow-motion sequences, and powerful visual storytelling.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '21-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic flame thrower shot with intense lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '21-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'High-energy action frame emphasizing fire and motion',
      aspectRatio: 'landscape'
    },
    {
      id: '21-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Slow-motion flame sequence with cinematic composition',
      aspectRatio: 'landscape'
    },
    {
      id: '21-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting dramatic cinematic impact',
      aspectRatio: 'landscape'
    }
  ]
},
{
  id: '22',
  title: 'Jake Gyllenhaal',
  slug: 'jake-gyllenhaal',
  year: '2024',

  // Cinematic / celebrity-style commercial video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1JWyakQjg1K5qIOAeuGRniOvHAfu2qG5r&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1JWyakQjg1K5qIOAeuGRniOvHAfu2qG5r',

  description:
    'A cinematic character-focused video inspired by the intense screen presence of Jake Gyllenhaal. The project emphasizes mood, performance, and dramatic visual storytelling through controlled lighting, close-up compositions, and atmospheric pacing.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '22-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic portrait-style frame with dramatic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '22-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Moody close-up shot emphasizing performance',
      aspectRatio: 'landscape'
    },
    {
      id: '22-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Atmospheric cinematic sequence with strong character focus',
      aspectRatio: 'landscape'
    },
    {
      id: '22-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting cinematic character storytelling',
      aspectRatio: 'landscape'
    }
  ]
},
{
  id: '23',
  title: 'AI 1.1',
  slug: 'ai-1-1',
  year: '2024',

  // Conceptual / AI-driven commercial video
  category: 'AI',

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
    'https://drive.google.com/thumbnail?id=1BpJaAlBZBgn3vh6UVNVZFbj6n1SWl9al&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1BpJaAlBZBgn3vh6UVNVZFbj6n1SWl9al',

  description:
    'A conceptual AI-driven video project exploring evolving intelligence, digital aesthetics, and futuristic motion design. The film focuses on abstract visuals, rhythmic pacing, and cinematic storytelling to present artificial intelligence through a bold visual narrative.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '23-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'AI-driven cinematic visuals with abstract motion design',
      aspectRatio: 'landscape'
    },
    {
      id: '23-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Futuristic AI sequence emphasizing digital intelligence',
      aspectRatio: 'landscape'
    },
    {
      id: '23-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'High-contrast cinematic frame representing AI evolution',
      aspectRatio: 'landscape'
    },
    {
      id: '23-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting the concept of AI 1.1',
      aspectRatio: 'landscape'
    }
  ]
},
{
  id: '24',
  title: 'AI 1.2',
  slug: 'ai-1-2',
  year: '2024',

  // Conceptual / AI-driven commercial video
  category: 'AI',

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
    'https://drive.google.com/thumbnail?id=1JfjjLtCagCI35qYN4uA08I_ElWC6P9zf&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1JfjjLtCagCI35qYN4uA08I_ElWC6P9zf',

  description:
    'A continuation of the AI concept series, this project explores advanced artificial intelligence themes through abstract visuals, refined motion design, and cinematic pacing. The film builds on futuristic aesthetics to present AI evolution with depth and atmosphere.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '24-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Advanced AI visuals with abstract cinematic motion',
      aspectRatio: 'landscape'
    },
    {
      id: '24-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Futuristic AI concept frame with refined lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '24-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'High-contrast cinematic sequence representing AI 1.2',
      aspectRatio: 'landscape'
    },
    {
      id: '24-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame emphasizing evolution in AI storytelling',
      aspectRatio: 'landscape'
    }
  ]
},
{
  id: '25',
  title: 'Shooter',
  slug: 'shooter',
  year: '2024',

  // Action / cinematic commercial video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1WSM83HxaDGbUN7SzCphaFnxYxGp2R6NZ&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1WSM83HxaDGbUN7SzCphaFnxYxGp2R6NZ',

  description:
    'A high-intensity cinematic action video driven by sharp visuals, dynamic motion, and dramatic pacing. The project focuses on tension, precision, and impact through controlled framing, rapid transitions, and a bold cinematic tone.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '25-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic action frame emphasizing intensity and motion',
      aspectRatio: 'landscape'
    },
    {
      id: '25-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Dynamic shooter sequence with dramatic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '25-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'High-energy cinematic transition in action sequence',
      aspectRatio: 'landscape'
    },
    {
      id: '25-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting cinematic action impact',
      aspectRatio: 'landscape'
    }
  ]
},
{
  id: '26',
  title: 'HUMVEE',
  slug: 'humvee',
  year: '2024',

  // Military / automotive cinematic commercial video
  category: 'cinematic',

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
    'https://drive.google.com/thumbnail?id=1q-5ApOEzyGXV5cD82VMnZtXzFcUF1yMs&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1q-5ApOEzyGXV5cD82VMnZtXzFcUF1yMs',

  description:
    'A rugged, high-impact cinematic video showcasing the HUMVEE through powerful visuals, mechanical detail shots, and dramatic motion. The project emphasizes durability, strength, and performance using bold framing and cinematic pacing.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '26-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Cinematic HUMVEE shot emphasizing strength and scale',
      aspectRatio: 'landscape'
    },
    {
      id: '26-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'Military vehicle detail shot with dramatic lighting',
      aspectRatio: 'landscape'
    },
    {
      id: '26-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Dynamic motion sequence highlighting HUMVEE performance',
      aspectRatio: 'landscape'
    },
    {
      id: '26-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final cinematic frame showcasing HUMVEE presence',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '27',
  title: 'AI PIT Viper',
  slug: 'ai-pit-viper',
  year: '2024',

  // AI-driven cinematic video
  category: 'Ai',

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
    'https://drive.google.com/thumbnail?id=1Cro2HRqIQnaOohJ4Tu4PciLkslcCRkRG&sz=w1000',

  /**
   * Google Drive file ID
   * Used by VideoCard for playback
   */
  driveFileId: '1Cro2HRqIQnaOohJ4Tu4PciLkslcCRkRG',

  description:
    'An AI-driven cinematic project exploring aggression, speed, and precision through stylized motion and high-contrast visuals. The film blends artificial intelligence aesthetics with cinematic pacing to create a bold, futuristic visual narrative.',

  client: 'Personal Project',
  location: 'Global',

  /**
   * Screenshots from the video
   * (Not rendered for video projects but kept for schema consistency)
   */
  images: [
    {
      id: '27-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'AI-generated cinematic frame featuring PIT Viper concept',
      aspectRatio: 'landscape'
    },
    {
      id: '27-2',
      src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
      alt: 'High-contrast AI visual emphasizing speed and intensity',
      aspectRatio: 'landscape'
    },
    {
      id: '27-3',
      src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
      alt: 'Stylized AI-driven motion sequence',
      aspectRatio: 'landscape'
    },
    {
      id: '27-4',
      src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
      alt: 'Final frame highlighting AI PIT Viper cinematic tone',
      aspectRatio: 'landscape'
    }
  ]
},

// {
//   id: '28',
//   title: 'Benefits of AgentForce',
//   slug: 'benefits-of-agentforce',
//   year: '2024',

//   // Salesforce / enterprise explainer video
//   category: 'Salesforce',

//   // Explicitly mark as video project
//   type: 'video',

//   // Explicit video provider (NO GUESSING)
//   provider: 'drive',

//   /**
//    * Google Drive thumbnail for grid / preview
//    * Format:
//    * https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
//    */
//   coverImage:
//     'https://drive.google.com/thumbnail?id=1cT7jHAYrobYbBZvFt7z-MxV-G3zQerQy&sz=w1000',

//   /**
//    * Google Drive file ID
//    * Used by VideoCard for playback
//    */
//   driveFileId: '1cT7jHAYrobYbBZvFt7z-MxV-G3zQerQy',

//   description:
//     'An enterprise explainer video highlighting the benefits of Salesforce AgentForce. The project uses clean motion graphics, structured information flow, and cinematic polish to clearly communicate product value, efficiency, and real-world business impact.',

//   client: 'Salesforce',
//   location: 'Global',

//   /**
//    * Screenshots from the video
//    * (Not rendered for video projects but kept for schema consistency)
//    */
//   images: [
//     {
//       id: '28-1',
//       src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
//       alt: 'Salesforce AgentForce explainer visuals with clean motion design',
//       aspectRatio: 'landscape'
//     },
//     {
//       id: '28-2',
//       src: 'https://i.ibb.co/REPLACE-IMAGE-2.jpg',
//       alt: 'Enterprise workflow illustration showcasing AgentForce benefits',
//       aspectRatio: 'landscape'
//     },
//     {
//       id: '28-3',
//       src: 'https://i.ibb.co/REPLACE-IMAGE-3.jpg',
//       alt: 'Cinematic motion graphics highlighting Salesforce solutions',
//       aspectRatio: 'landscape'
//     },
//     {
//       id: '28-4',
//       src: 'https://i.ibb.co/REPLACE-IMAGE-4.jpg',
//       alt: 'Final frame emphasizing productivity and automation',
//       aspectRatio: 'landscape'
//     }
//   ]
// },

{
  id: '29',
  title: 'SAAS YouTube Video',
  slug: 'youtube-SAAS',
  year: '2024',

  // YouTube-based video
  category: 'SaaS',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/nbeTL71Gnjs/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'nbeTL71Gnjs',

  description:
    'A YouTube-hosted video project showcasing cinematic storytelling and visual presentation. Designed for online distribution with optimized pacing and engagement.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '29-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'YouTube video preview frame',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '30',
  title: 'Magento YouTube Video',
  slug: 'youtube-magento',
  year: '2024',

  // YouTube-based video
  category: 'Magneto',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/wRCLz3O2iF4/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'wRCLz3O2iF4',

  description:
    'A Magento-focused YouTube video explaining concepts, workflows, and best practices through clear visuals and structured presentation. Optimized for online viewing with engaging pacing and practical insights.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '30-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Magento YouTube video preview frame',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '31',
  title: "Russia's Kamov Helicopters Break Every Rule",
  slug: 'russias-kamov-helicopters',

  year: '2024',

  // YouTube-based video
  category: 'Youtube',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/LpRdecE7gHw/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'LpRdecE7gHw',

  description:
    "An in-depth YouTube video exploring Russia’s Kamov helicopter designs, breaking conventional aviation rules through coaxial rotor systems and unconventional engineering. Presented with cinematic pacing and technical storytelling.",

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '31-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: "Russia's Kamov helicopter in flight",
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '32',
  title: 'XM7 Rifle | SIG Sauer’s Cutting-Edge Design Explained',
  slug: 'xm7-rifle-sig-sauer',
  year: '2024',

  // YouTube-based video
  category: 'Youtube',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/EDRx5-BetaA/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'EDRx5-BetaA',

  description:
    'A detailed YouTube video explaining the XM7 rifle by SIG Sauer, highlighting its advanced engineering, modular design, and next-generation military technology through clear visuals and structured storytelling.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '32-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'XM7 rifle by SIG Sauer showcased in video',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '33',
  title: 'Aircraft Carrier Shooter in Action',
  slug: 'aircraft-carrier-shooter-in-action',
  year: '2024',

  // YouTube-based video
  category: 'Youtube',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/UJsdTtST9kY/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'UJsdTtST9kY',

  description:
    'A high-intensity YouTube video capturing aircraft carrier deck operations, focusing on the precision, coordination, and speed of shooters in action during carrier-based flight operations.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '33-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Aircraft carrier shooter directing aircraft on deck',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '34',
  title: 'New Salesforce AI Specialist Certification 2024: Everything You Need To Know | saasguru',
  slug: 'salesforce-ai-specialist-certification-2024',
  year: '2024',

  // YouTube-based video
  category: 'Salesforce',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/Ctz8l9STU1M/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'Ctz8l9STU1M',

  description:
    'A comprehensive YouTube video explaining the new Salesforce AI Specialist Certification for 2024. Covers exam structure, skills required, AI concepts, and preparation strategy, presented by saasguru with clear and practical insights.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '34-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Salesforce AI Specialist Certification video preview',
      aspectRatio: 'landscape'
    }
  ]
},

{
  id: '35',
  title: 'Salesforce Admin Career Path 🚀: Essential Certifications, Steps, and Advancement',
  slug: 'salesforce-admin-career-path',
  year: '2024',

  // YouTube-based video
  category: 'Salesforce',

  // Explicitly mark as video project
  type: 'video',

  // Explicit provider
  // provider: 'youtube',

  /**
   * YouTube thumbnail
   * Format:
   * https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
   */
  coverImage:
    'https://img.youtube.com/vi/D7PSceNGX54/hqdefault.jpg',

  /**
   * YouTube video ID
   */
  youtubeId: 'D7PSceNGX54',

  description:
    'A detailed YouTube video outlining the Salesforce Admin career path, covering essential certifications, step-by-step growth strategies, and advancement opportunities for professionals entering or progressing in the Salesforce ecosystem.',

  keywords: ['youtube'],

  client: 'YouTube',
  location: 'Global',

  images: [
    {
      id: '35-1',
      src: 'https://i.ibb.co/REPLACE-IMAGE-1.jpg',
      alt: 'Salesforce Admin career path video preview',
      aspectRatio: 'landscape'
    }
  ]
},













  
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
  category: string,
  currentId: string
): Project[] => {
  return projects.filter(
    project =>
      project.category?.toLowerCase() === category?.toLowerCase() &&
      project.id !== currentId
  );
};
