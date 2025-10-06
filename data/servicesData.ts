import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Project Cyberscape',
    category: 'Branding & UI/UX',
    description: 'Branding and UI/UX design for a next-gen tech startup.',
    icon: 'palette',
    shortDescription: 'Create a memorable brand identity that resonates with your audience.',
    features: [
      'Custom logo design',
      'Brand style guide',
      'Color palette development',
      'Typography selection',
      'Brand messaging',
      'Marketing collateral design'
    ],
    process: [
      'Discovery & research',
      'Concept development',
      'Design iterations',
      'Final refinement',
      'Brand guidelines delivery'
    ],
    imageUrl: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: 'Aperture Labs',
    category: 'Interface Design',
    description: 'Futuristic interface design for a data visualization tool.',
    icon: 'megaphone',
    shortDescription: 'Stand out on social media with scroll-stopping graphics.',
    features: [
      'Social media templates',
      'Ad campaign graphics',
      'Infographic design',
      'Email marketing assets',
      'Presentation design',
      'Print marketing materials'
    ],
    process: [
      'Strategy consultation',
      'Content planning',
      'Design execution',
      'Platform optimization',
      'Asset delivery'
    ],
    imageUrl: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    title: 'Quantum Motion',
    category: 'Motion Graphics',
    description: 'Motion graphics and promo assets for a product launch.',
    icon: 'sparkles',
    shortDescription: 'Harness the power of AI for rapid, innovative design.',
    features: [
      'AI-assisted concept generation',
      'Rapid prototyping',
      'Style transfer & variations',
      'Image enhancement',
      'Custom AI workflows',
      'Design automation'
    ],
    process: [
      'Requirements gathering',
      'AI tool selection',
      'Creative direction',
      'Human refinement',
      'Quality assurance'
    ],
    imageUrl: 'https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];
