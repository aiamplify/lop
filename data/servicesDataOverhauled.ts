export interface Deliverable {
  name: string;
  description: string;
  formats?: string[];
}

export interface ServiceSubcategory {
  name: string;
  deliverables: Deliverable[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  heroImage: string;
  subcategories: ServiceSubcategory[];
  processSteps: ProcessStep[];
  startingPrice?: string;
  typicalTimeline?: string;
  features: string[];
}

export const servicesDataOverhauled: ServiceCategory[] = [
  {
    id: 'branding',
    name: 'Brand & Identity Design',
    tagline: 'Build a memorable brand that stands out',
    description: 'Complete branding solutions from concept to execution. We create distinctive visual identities that capture your essence and resonate with your audience.',
    icon: '🎨',
    color: '#FF6B6B',
    heroImage: 'https://picsum.photos/seed/branding/1920/1080',
    startingPrice: '$2,500',
    typicalTimeline: '2-4 weeks',
    features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography', 'Business Materials'],
    subcategories: [
      {
        name: 'Core Branding',
        deliverables: [
          { name: 'Flat Logos', description: 'Clean, scalable logo designs', formats: ['AI', 'SVG', 'PNG'] },
          { name: '3D Logos', description: 'Three-dimensional logo renderings', formats: ['PNG', 'C4D', 'BLEND'] },
          { name: 'Animated Logos', description: 'Motion logo sequences', formats: ['MP4', 'GIF', 'WEBM'] },
          { name: 'Minimalistic Logos', description: 'Simple, timeless designs', formats: ['AI', 'SVG'] },
          { name: 'Futuristic Logos', description: 'Modern, tech-forward branding', formats: ['AI', 'SVG'] },
          { name: 'Retro Logos', description: 'Vintage-inspired designs', formats: ['AI', 'SVG'] },
          { name: 'Brand Mascots', description: 'Character designs for your brand', formats: ['AI', 'PNG', 'PSD'] },
          { name: 'Color Palettes', description: 'Complete color systems', formats: ['PDF', 'ASE'] },
          { name: 'Style Boards', description: 'Visual direction documents', formats: ['PDF', 'PNG'] },
          { name: 'Typography Systems', description: 'Font pairing and hierarchy', formats: ['PDF'] },
        ],
      },
      {
        name: 'Business Materials',
        deliverables: [
          { name: 'Business Cards', description: 'Professional card designs', formats: ['PDF', 'AI'] },
          { name: 'Letterheads', description: 'Branded stationery', formats: ['PDF', 'DOCX'] },
          { name: 'Envelopes', description: 'Custom envelope designs', formats: ['PDF', 'AI'] },
          { name: 'Invoice Templates', description: 'Branded billing documents', formats: ['PDF', 'XLSX'] },
          { name: 'Brand Guidelines', description: 'Complete usage documentation', formats: ['PDF'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Discovery', description: 'Deep dive into your brand vision and values', icon: '🔍' },
      { step: 2, title: 'Concept', description: 'Multiple creative directions to explore', icon: '💡' },
      { step: 3, title: 'Refinement', description: 'Perfect the chosen direction', icon: '✨' },
      { step: 4, title: 'Delivery', description: 'Complete asset package with guidelines', icon: '🚀' },
    ],
  },
  {
    id: 'digital-web',
    name: 'Digital & Web Design',
    tagline: 'Stunning interfaces that users love',
    description: 'Modern, user-centric web and app designs that combine beautiful aesthetics with exceptional usability.',
    icon: '💻',
    color: '#4ECDC4',
    heroImage: 'https://picsum.photos/seed/webdesign/1920/1080',
    startingPrice: '$3,000',
    typicalTimeline: '3-6 weeks',
    features: ['UI/UX Design', 'Responsive Layouts', 'Prototypes', 'Design Systems', 'Web Assets'],
    subcategories: [
      {
        name: 'UI/UX Design',
        deliverables: [
          { name: 'Website Hero Banners', description: 'Eye-catching header sections', formats: ['PSD', 'FIGMA', 'PNG'] },
          { name: 'Landing Page Mockups', description: 'Complete page designs', formats: ['FIGMA', 'XD', 'SKETCH'] },
          { name: 'App Screens', description: 'Mobile and web app interfaces', formats: ['FIGMA', 'XD'] },
          { name: 'Dashboard Concepts', description: 'Data-rich interface designs', formats: ['FIGMA', 'XD'] },
          { name: 'Wireframe-to-Visual', description: 'Transform wireframes to polished UI', formats: ['FIGMA', 'PDF'] },
        ],
      },
      {
        name: 'Web Assets',
        deliverables: [
          { name: 'Icon Packs', description: 'Custom icon sets', formats: ['SVG', 'PNG', 'AI'] },
          { name: 'UI Kits', description: 'Reusable component libraries', formats: ['FIGMA', 'SKETCH'] },
          { name: 'Button Sets', description: 'Interactive element designs', formats: ['SVG', 'CSS'] },
          { name: 'Interactive Prototypes', description: 'Clickable mockups', formats: ['FIGMA', 'XD'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Research', description: 'User research and competitive analysis', icon: '📊' },
      { step: 2, title: 'Wireframes', description: 'Structure and information architecture', icon: '📐' },
      { step: 3, title: 'Design', description: 'High-fidelity visual design', icon: '🎨' },
      { step: 4, title: 'Prototype', description: 'Interactive, testable prototype', icon: '🔗' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & Advertising',
    tagline: 'Creative campaigns that convert',
    description: 'Strategic creative assets designed to capture attention, engage audiences, and drive measurable results across all channels.',
    icon: '📱',
    color: '#95E1D3',
    heroImage: 'https://picsum.photos/seed/marketing/1920/1080',
    startingPrice: '$500',
    typicalTimeline: '1-2 weeks',
    features: ['Social Media', 'Ad Campaigns', 'Print Ads', 'Email Graphics', 'Lead Magnets'],
    subcategories: [
      {
        name: 'Social Media Content',
        deliverables: [
          { name: 'Static Posts', description: 'Single-image social graphics', formats: ['PNG', 'JPG'] },
          { name: 'Carousel Posts', description: 'Multi-slide content', formats: ['PNG', 'PDF'] },
          { name: 'Meme Graphics', description: 'Viral-ready content', formats: ['PNG', 'JPG'] },
          { name: 'Quote Graphics', description: 'Inspirational post designs', formats: ['PNG', 'JPG'] },
          { name: 'Instagram Stories', description: 'Vertical story templates', formats: ['PNG', 'PSD'] },
          { name: 'TikTok Ads', description: 'Short-form video assets', formats: ['MP4', 'MOV'] },
          { name: 'Facebook Ads', description: 'Optimized ad creatives', formats: ['PNG', 'JPG'] },
        ],
      },
      {
        name: 'Campaign Materials',
        deliverables: [
          { name: 'Web Banners', description: 'Display ad creatives', formats: ['PNG', 'JPG', 'GIF'] },
          { name: 'Retargeting Ads', description: 'Remarketing visuals', formats: ['PNG', 'JPG'] },
          { name: 'Email Graphics', description: 'Email campaign headers', formats: ['PNG', 'JPG'] },
          { name: 'Infographics', description: 'Data visualization content', formats: ['PDF', 'PNG', 'AI'] },
        ],
      },
      {
        name: 'Print Advertising',
        deliverables: [
          { name: 'Billboards', description: 'Large-format outdoor ads', formats: ['PDF', 'AI'] },
          { name: 'Posters', description: 'Promotional posters', formats: ['PDF', 'AI'] },
          { name: 'Flyers', description: 'Handout marketing materials', formats: ['PDF', 'AI'] },
          { name: 'Brochures', description: 'Multi-page promotional pieces', formats: ['PDF', 'INDD'] },
        ],
      },
      {
        name: 'Lead Generation',
        deliverables: [
          { name: 'eBook Covers', description: 'Digital book cover design', formats: ['PNG', 'PDF'] },
          { name: 'Guide Covers', description: 'Lead magnet covers', formats: ['PNG', 'PDF'] },
          { name: 'Report Covers', description: 'Whitepaper and report designs', formats: ['PNG', 'PDF'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Strategy', description: 'Campaign goals and audience targeting', icon: '🎯' },
      { step: 2, title: 'Concepts', description: 'Creative direction options', icon: '💭' },
      { step: 3, title: 'Production', description: 'Asset creation and optimization', icon: '⚡' },
      { step: 4, title: 'Delivery', description: 'Platform-ready files', icon: '📦' },
    ],
  },
  {
    id: 'product-viz',
    name: 'Product & Visualization',
    tagline: 'Bring your products to life',
    description: 'Photorealistic renders, mockups, and visualizations that showcase your products in the best possible light.',
    icon: '📦',
    color: '#F38181',
    heroImage: 'https://picsum.photos/seed/product/1920/1080',
    startingPrice: '$800',
    typicalTimeline: '1-3 weeks',
    features: ['3D Renders', 'Product Mockups', 'Packaging Design', 'Process Diagrams', 'Visualizations'],
    subcategories: [
      {
        name: 'Product Design',
        deliverables: [
          { name: 'Product Mockups', description: 'Realistic product presentations', formats: ['PNG', 'PSD'] },
          { name: 'Packaging Design', description: 'Box and label designs', formats: ['AI', 'PDF'] },
          { name: 'Merch Mockups', description: 'T-shirts, hats, mugs', formats: ['PNG', 'PSD'] },
          { name: '3D Product Renders', description: 'Photorealistic 3D visuals', formats: ['PNG', 'JPG', 'BLEND'] },
          { name: 'Digital Product Covers', description: 'Software, course, app covers', formats: ['PNG', 'PSD'] },
        ],
      },
      {
        name: 'Service Visualization',
        deliverables: [
          { name: 'Process Diagrams', description: 'Service workflow visuals', formats: ['PDF', 'PNG', 'AI'] },
          { name: 'Before/After Visuals', description: 'Transformation showcases', formats: ['PNG', 'JPG'] },
          { name: '3D Environment Renders', description: 'Spatial visualizations', formats: ['PNG', 'JPG'] },
          { name: 'Instructional Diagrams', description: 'How-to visuals', formats: ['PDF', 'PNG'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Brief', description: 'Product specs and vision', icon: '📋' },
      { step: 2, title: 'Modeling', description: '3D modeling or mockup setup', icon: '🎲' },
      { step: 3, title: 'Rendering', description: 'Lighting and material refinement', icon: '✨' },
      { step: 4, title: 'Polish', description: 'Final touches and variations', icon: '💎' },
    ],
  },
  {
    id: 'content-media',
    name: 'Content & Media Production',
    tagline: 'Captivating visuals for every platform',
    description: 'From YouTube thumbnails to presentation slides, we create scroll-stopping visuals that enhance your content.',
    icon: '🎬',
    color: '#AA96DA',
    heroImage: 'https://picsum.photos/seed/media/1920/1080',
    startingPrice: '$300',
    typicalTimeline: '3-5 days',
    features: ['Video Assets', 'Editorial Content', 'Presentations', 'Print Materials', 'Storyboards'],
    subcategories: [
      {
        name: 'Video Assets',
        deliverables: [
          { name: 'YouTube Thumbnails', description: 'Click-worthy video covers', formats: ['PNG', 'JPG'] },
          { name: 'Podcast Cover Art', description: 'Episode artwork', formats: ['PNG', 'JPG'] },
          { name: 'Storyboards', description: 'Video planning frames', formats: ['PDF', 'PNG'] },
          { name: 'B-Roll Imagery', description: 'Background visuals', formats: ['PNG', 'JPG'] },
          { name: 'Virtual Backgrounds', description: 'Studio set backdrops', formats: ['PNG', 'JPG'] },
        ],
      },
      {
        name: 'Editorial Content',
        deliverables: [
          { name: 'Blog Hero Images', description: 'Article header graphics', formats: ['PNG', 'JPG'] },
          { name: 'Blog Illustrations', description: 'In-article visuals', formats: ['PNG', 'SVG'] },
          { name: 'Presentation Slides', description: 'Slide deck designs', formats: ['PPTX', 'KEY', 'PDF'] },
          { name: 'Presentation Templates', description: 'Reusable slide sets', formats: ['PPTX', 'KEY'] },
        ],
      },
      {
        name: 'Print Materials',
        deliverables: [
          { name: 'Flyers', description: 'Promotional handouts', formats: ['PDF', 'AI'] },
          { name: 'Posters', description: 'Wall-ready prints', formats: ['PDF', 'AI'] },
          { name: 'Postcards', description: 'Mailer designs', formats: ['PDF', 'AI'] },
          { name: 'Event Signage', description: 'Directional and promo signs', formats: ['PDF', 'AI'] },
          { name: 'Booth Graphics', description: 'Trade show displays', formats: ['PDF', 'AI'] },
          { name: 'Vehicle Wraps', description: 'Car, van, truck graphics', formats: ['PDF', 'AI'] },
          { name: 'Stickers & Decals', description: 'Custom sticker designs', formats: ['PDF', 'AI', 'PNG'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Content Review', description: 'Understand the message and medium', icon: '📖' },
      { step: 2, title: 'Concept', description: 'Visual approach and style', icon: '🖼️' },
      { step: 3, title: 'Creation', description: 'Design and asset production', icon: '🎨' },
      { step: 4, title: 'Optimize', description: 'Platform-specific formatting', icon: '⚙️' },
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate & Professional',
    tagline: 'Professional materials that command respect',
    description: 'Polished, authoritative designs for presentations, proposals, and corporate communications.',
    icon: '💼',
    color: '#FCBAD3',
    heroImage: 'https://picsum.photos/seed/corporate/1920/1080',
    startingPrice: '$1,200',
    typicalTimeline: '1-2 weeks',
    features: ['Pitch Decks', 'Reports', 'Proposals', 'Data Visualization', 'Training Materials'],
    subcategories: [
      {
        name: 'Presentations',
        deliverables: [
          { name: 'Pitch Decks', description: 'Investor-ready presentations', formats: ['PPTX', 'KEY', 'PDF'] },
          { name: 'Training Slides', description: 'Educational slide decks', formats: ['PPTX', 'KEY'] },
          { name: 'Report Visuals', description: 'Annual report graphics', formats: ['PDF', 'INDD'] },
          { name: 'Whitepaper Layouts', description: 'Long-form document design', formats: ['PDF', 'INDD'] },
          { name: 'Data Visualization', description: 'Charts and infographics', formats: ['PDF', 'AI', 'PNG'] },
          { name: 'Corporate Wallpapers', description: 'Branded screensavers', formats: ['PNG', 'JPG'] },
        ],
      },
      {
        name: 'Sales Materials',
        deliverables: [
          { name: 'Proposal Templates', description: 'Client proposal designs', formats: ['PDF', 'INDD', 'DOCX'] },
          { name: 'Quote Covers', description: 'Estimate cover pages', formats: ['PDF', 'PNG'] },
          { name: 'Case Study Visuals', description: 'Success story layouts', formats: ['PDF', 'PNG'] },
          { name: 'Portfolio Mockups', description: 'Work showcase designs', formats: ['PDF', 'INDD'] },
          { name: 'One-Pagers', description: 'Quick reference sheets', formats: ['PDF', 'AI'] },
          { name: 'Sell Sheets', description: 'Product/service summaries', formats: ['PDF', 'AI'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Align', description: 'Understand objectives and audience', icon: '🤝' },
      { step: 2, title: 'Structure', description: 'Information architecture', icon: '📊' },
      { step: 3, title: 'Design', description: 'Professional visual treatment', icon: '✒️' },
      { step: 4, title: 'Refine', description: 'Executive-level polish', icon: '💼' },
    ],
  },
  {
    id: 'events',
    name: 'Events & Community',
    tagline: 'Make every moment memorable',
    description: 'Eye-catching event materials that generate excitement and create lasting impressions.',
    icon: '🎉',
    color: '#FFFFD2',
    heroImage: 'https://picsum.photos/seed/events/1920/1080',
    startingPrice: '$400',
    typicalTimeline: '5-10 days',
    features: ['Event Design', 'Invitations', 'Signage', 'Certificates', 'Promo Materials'],
    subcategories: [
      {
        name: 'Event Design',
        deliverables: [
          { name: 'Event Posters', description: 'Promotional event graphics', formats: ['PDF', 'PNG', 'AI'] },
          { name: 'Invitations', description: 'Digital and print invites', formats: ['PDF', 'PNG'] },
          { name: 'Social Event Promos', description: 'Event announcement graphics', formats: ['PNG', 'JPG'] },
          { name: 'Tickets', description: 'Digital and print tickets', formats: ['PDF', 'PNG'] },
          { name: 'Banners & Roll-ups', description: 'Large-format event signage', formats: ['PDF', 'AI'] },
          { name: 'Commemorative Visuals', description: 'Event memory graphics', formats: ['PNG', 'JPG'] },
          { name: 'Certificates & Awards', description: 'Recognition documents', formats: ['PDF', 'AI'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Event Brief', description: 'Theme, audience, and goals', icon: '📅' },
      { step: 2, title: 'Design System', description: 'Cohesive visual identity', icon: '🎨' },
      { step: 3, title: 'Asset Creation', description: 'All event materials', icon: '🖨️' },
      { step: 4, title: 'Launch', description: 'Print and digital delivery', icon: '🚀' },
    ],
  },
  {
    id: 'experimental',
    name: 'Experimental & Cutting-Edge',
    tagline: 'Push boundaries with emerging tech',
    description: 'Innovative creative solutions using AI, AR/VR, and experimental techniques to create viral-worthy content.',
    icon: '🚀',
    color: '#00FF99',
    heroImage: 'https://picsum.photos/seed/experimental/1920/1080',
    startingPrice: '$1,000',
    typicalTimeline: '1-3 weeks',
    features: ['AI Content', 'Viral Creative', 'AR/VR Assets', 'Experimental Design', 'Emerging Tech'],
    subcategories: [
      {
        name: 'AI & Emerging Tech',
        deliverables: [
          { name: 'Meme Templates', description: 'Viral-ready formats', formats: ['PNG', 'PSD'] },
          { name: 'AI Influencer Avatars', description: 'Virtual character designs', formats: ['PNG', 'BLEND'] },
          { name: 'AR/VR Assets', description: 'Immersive experience graphics', formats: ['FBX', 'OBJ', 'GLTF'] },
          { name: 'Cinematic Scenes', description: 'AI-generated storytelling', formats: ['PNG', 'JPG', 'MP4'] },
          { name: 'Fantasy Environments', description: 'Surreal digital worlds', formats: ['PNG', 'JPG'] },
          { name: 'Timelapse Illustrations', description: 'Sequence animations', formats: ['MP4', 'GIF'] },
        ],
      },
    ],
    processSteps: [
      { step: 1, title: 'Explore', description: 'Experimental concept development', icon: '🔬' },
      { step: 2, title: 'Prototype', description: 'Test emerging techniques', icon: '🧪' },
      { step: 3, title: 'Produce', description: 'Create cutting-edge assets', icon: '⚡' },
      { step: 4, title: 'Deploy', description: 'Platform-optimized delivery', icon: '🌐' },
    ],
  },
];
