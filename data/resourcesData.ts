export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  thumbnail?: string;
  downloadUrl?: string;
  type: 'video' | 'pdf' | 'template' | 'image' | 'prompt';
  tags: string[];
  duration?: string;
  fileSize?: string;
  author?: string;
  publishDate?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  features?: string[];
  requirements?: string[];
  whatYouWillLearn?: string[];
  includesFiles?: string[];
}

export const resourcesData: ResourceItem[] = [
  // Videos
  {
    id: 1,
    title: 'AI Automation for Construction Projects',
    description: 'Learn how to automate repetitive tasks in construction management using AI tools.',
    longDescription: 'This comprehensive video course teaches you how to leverage artificial intelligence to automate time-consuming tasks in construction project management. You\'ll learn practical strategies for implementing AI tools that can save your team hours every week, reduce errors, and improve project outcomes. We cover everything from document processing to scheduling automation and client communication.',
    category: 'Video',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/video1/800/450',
    downloadUrl: '#',
    tags: ['AI', 'Automation', 'Construction'],
    duration: '15:30',
    author: 'Michael Chen',
    publishDate: 'March 2024',
    difficulty: 'Beginner',
    whatYouWillLearn: [
      'How to identify automation opportunities in your construction workflow',
      'Setting up AI-powered document processing systems',
      'Automating project scheduling and resource allocation',
      'Using AI for predictive maintenance and quality control',
      'Integrating AI tools with existing project management software',
      'Best practices for training your team on new AI systems'
    ],
    requirements: [
      'Basic understanding of construction project management',
      'Access to a computer and internet connection',
      'No prior AI or programming experience required'
    ],
    features: [
      'HD video quality',
      'Step-by-step demonstrations',
      'Real-world construction examples',
      'Downloadable resource guide',
      'Certificate of completion'
    ]
  },
  {
    id: 2,
    title: 'Getting Started with N8N Workflows',
    description: 'Complete tutorial on setting up your first N8N automation workflow for contractor management.',
    longDescription: 'N8N is a powerful workflow automation tool that can revolutionize how you manage your contracting business. This in-depth tutorial walks you through everything from installation to creating your first automated workflows. Perfect for contractors who want to streamline their operations without writing code. By the end of this course, you\'ll have built several working automations that you can immediately deploy in your business.',
    category: 'Video',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/video2/800/450',
    downloadUrl: '#',
    tags: ['N8N', 'Workflow', 'Tutorial'],
    duration: '22:45',
    author: 'Sarah Martinez',
    publishDate: 'April 2024',
    difficulty: 'Beginner',
    whatYouWillLearn: [
      'Installing and configuring N8N on your system',
      'Understanding workflow nodes and connections',
      'Creating automated lead capture workflows',
      'Setting up email and SMS notifications',
      'Integrating with popular contractor tools (QuickBooks, Google Calendar, etc.)',
      'Troubleshooting common N8N issues',
      'Best practices for workflow organization'
    ],
    requirements: [
      'Computer with at least 4GB RAM',
      'Basic familiarity with business process concepts',
      'Willingness to learn new software'
    ],
    features: [
      'Complete beginner-friendly tutorial',
      '5 ready-to-use workflow templates included',
      'Live demonstrations with real contractor scenarios',
      'Access to private support community',
      'Lifetime access to course updates'
    ]
  },
  {
    id: 3,
    title: 'ChatGPT for Project Documentation',
    description: 'Master the art of using ChatGPT to generate professional project documentation.',
    longDescription: 'Stop spending hours on documentation! Learn how to use ChatGPT to quickly generate professional project documentation including proposals, reports, safety checklists, and more. This course reveals the exact prompts and techniques used by successful contractors to cut documentation time by 70% while maintaining high quality and compliance standards.',
    category: 'Video',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/video3/800/450',
    downloadUrl: '#',
    tags: ['ChatGPT', 'Documentation', 'AI'],
    duration: '18:20',
    author: 'David Thompson',
    publishDate: 'May 2024',
    difficulty: 'Intermediate',
    whatYouWillLearn: [
      'Crafting effective prompts for different document types',
      'Generating compliant safety documentation',
      'Creating professional project proposals and bids',
      'Automating progress reports and status updates',
      'Customizing ChatGPT output to match your brand voice',
      'Using ChatGPT for client communication and emails',
      'Legal considerations when using AI for documentation'
    ],
    requirements: [
      'Active ChatGPT account (free or paid)',
      'Familiarity with construction documentation requirements',
      'Examples of your existing documentation (optional)'
    ],
    features: [
      '50+ proven documentation prompts',
      'Before/after examples',
      'Template library for quick starts',
      'Legal compliance checklist',
      'Monthly prompt updates'
    ]
  },
  // PDFs
  {
    id: 4,
    title: 'AI Tools Handbook for Contractors',
    description: 'Comprehensive guide covering 50+ AI tools specifically designed for construction and contracting businesses.',
    longDescription: 'The ultimate reference guide for contractors looking to leverage AI in their business. This 150-page handbook features detailed reviews and tutorials for over 50 AI tools, organized by business function. Each tool includes pricing information, setup guides, pros/cons analysis, and real contractor case studies. Whether you\'re looking to automate estimating, improve scheduling, or enhance client communication, this handbook has you covered.',
    category: 'PDF',
    type: 'pdf',
    thumbnail: 'https://picsum.photos/seed/pdf1/800/450',
    downloadUrl: '#',
    tags: ['Guide', 'AI Tools', 'Reference'],
    fileSize: '12.5 MB',
    author: 'Construction AI Collective',
    publishDate: 'February 2024',
    difficulty: 'Beginner',
    features: [
      '50+ AI tools reviewed and rated',
      'Organized by business function',
      'Step-by-step setup guides',
      'Pricing comparison charts',
      '15 contractor case studies',
      'Monthly digital updates included'
    ],
    includesFiles: [
      'Main handbook (PDF, 150 pages)',
      'Quick reference guide (PDF, 10 pages)',
      'Tool comparison spreadsheet (Excel)',
      'Setup checklists (PDF, 20 pages)'
    ]
  },
  {
    id: 5,
    title: 'Prompt Engineering Masterclass',
    description: 'Complete guide to writing effective prompts for AI models to get the best results for your business.',
    longDescription: 'Transform how you interact with AI tools with this comprehensive prompt engineering guide. Learn the science and art of crafting prompts that consistently deliver high-quality, relevant results. This guide covers advanced techniques including chain-of-thought prompting, role-based prompts, and output formatting strategies specifically tailored for construction and contracting scenarios.',
    category: 'PDF',
    type: 'pdf',
    thumbnail: 'https://picsum.photos/seed/pdf2/800/450',
    downloadUrl: '#',
    tags: ['Prompts', 'Guide', 'AI'],
    fileSize: '8.2 MB',
    author: 'Dr. Emily Rodriguez',
    publishDate: 'March 2024',
    difficulty: 'Intermediate',
    features: [
      '200+ example prompts',
      'Framework for creating custom prompts',
      'Contractor-specific use cases',
      'Prompt troubleshooting guide',
      'Advanced techniques section',
      'Prompt library templates'
    ],
    whatYouWillLearn: [
      'The anatomy of an effective prompt',
      'How to structure multi-step prompts',
      'Techniques for improving output accuracy',
      'Context-setting strategies',
      'Output formatting and constraints',
      'Handling edge cases and errors',
      'Creating reusable prompt templates'
    ],
    includesFiles: [
      'Masterclass guide (PDF, 95 pages)',
      'Prompt template library (PDF, 40 pages)',
      'Quick reference card (PDF, 2 pages)',
      'Exercise workbook (PDF, 25 pages)'
    ]
  },
  {
    id: 6,
    title: 'Contract Templates & AI Optimization',
    description: 'Legal contract templates optimized for AI processing and document management systems.',
    longDescription: 'A collection of 25 professionally-drafted contract templates designed specifically for contractors and optimized for AI-powered document management systems. These templates are structured to work seamlessly with AI tools for automatic data extraction, clause analysis, and risk assessment. Each template has been reviewed by legal professionals and includes guidance on customization and compliance requirements.',
    category: 'PDF',
    type: 'pdf',
    thumbnail: 'https://picsum.photos/seed/pdf3/800/450',
    downloadUrl: '#',
    tags: ['Contracts', 'Legal', 'Templates'],
    fileSize: '5.8 MB',
    author: 'Legal Tech Solutions',
    publishDate: 'January 2024',
    difficulty: 'Intermediate',
    features: [
      '25 customizable contract templates',
      'AI-optimized formatting',
      'Legal compliance notes',
      'Clause library with 100+ options',
      'State-specific variations included',
      'Integration guide for popular AI tools'
    ],
    includesFiles: [
      'Contract templates (Word, 25 files)',
      'Clause library (PDF, 45 pages)',
      'Customization guide (PDF, 30 pages)',
      'State compliance matrix (Excel)',
      'AI integration instructions (PDF, 15 pages)'
    ],
    requirements: [
      'Microsoft Word or compatible software',
      'Basic understanding of contract law',
      'Consultation with local attorney recommended for customization'
    ]
  },
  // N8N Templates
  {
    id: 7,
    title: 'Lead Generation Automation',
    description: 'N8N workflow template to automatically capture and qualify leads from multiple sources.',
    longDescription: 'Never miss another lead! This sophisticated N8N workflow automatically captures leads from your website forms, social media, email inquiries, and phone calls. It then qualifies them based on your criteria, enriches the data with additional information, and routes high-value leads directly to your sales team while nurturing others with automated follow-ups. The system includes built-in duplicate detection and CRM integration.',
    category: 'N8N Template',
    type: 'template',
    thumbnail: 'https://picsum.photos/seed/n8n1/800/450',
    downloadUrl: '#',
    tags: ['N8N', 'Lead Gen', 'Automation'],
    author: 'Automation Pro Team',
    publishDate: 'April 2024',
    difficulty: 'Intermediate',
    features: [
      'Multi-source lead capture',
      'Automatic lead scoring and qualification',
      'CRM integration (Salesforce, HubSpot, Pipedrive)',
      'Email and SMS follow-up sequences',
      'Duplicate lead detection',
      'Customizable qualification criteria',
      'Real-time notifications for hot leads'
    ],
    requirements: [
      'N8N instance (self-hosted or cloud)',
      'CRM system account',
      'Email and SMS service accounts (Twilio, SendGrid, etc.)',
      'Basic N8N knowledge recommended'
    ],
    includesFiles: [
      'N8N workflow JSON file',
      'Setup guide (PDF, 20 pages)',
      'Configuration spreadsheet (Excel)',
      'Video walkthrough (15 minutes)',
      'Troubleshooting guide (PDF, 8 pages)'
    ]
  },
  {
    id: 8,
    title: 'Invoice Processing & Payment Tracking',
    description: 'Automated workflow for processing invoices, sending reminders, and tracking payments.',
    longDescription: 'Streamline your entire invoicing process with this comprehensive N8N workflow. Automatically generate invoices from completed work orders, send them to clients via email, track payment status, and send polite reminders for overdue invoices. The system integrates with QuickBooks, Xero, and other accounting software, and includes a client portal link for easy online payments. Reduce late payments by an average of 40% and save 5+ hours per week on invoice management.',
    category: 'N8N Template',
    type: 'template',
    thumbnail: 'https://picsum.photos/seed/n8n2/800/450',
    downloadUrl: '#',
    tags: ['N8N', 'Finance', 'Automation'],
    author: 'Finance Automation Co.',
    publishDate: 'March 2024',
    difficulty: 'Advanced',
    features: [
      'Automatic invoice generation from work orders',
      'Multi-channel invoice delivery (email, SMS, portal)',
      'Payment tracking and reconciliation',
      'Automated payment reminders (gentle escalation)',
      'Late fee calculation and application',
      'Accounting software sync (QuickBooks, Xero, FreshBooks)',
      'Payment confirmation notifications',
      'Monthly financial reports'
    ],
    requirements: [
      'N8N instance with cloud hosting recommended',
      'Accounting software account',
      'Payment processor integration (Stripe, PayPal, Square)',
      'Email service account',
      'SMS service for text reminders (optional)'
    ],
    includesFiles: [
      'N8N workflow JSON file',
      'Complete setup guide (PDF, 35 pages)',
      'Accounting software integration guides (PDF, 15 pages)',
      'Email template library (HTML)',
      'Video tutorial series (4 videos, 45 minutes total)',
      'Client portal setup guide (PDF, 10 pages)'
    ]
  },
  {
    id: 9,
    title: 'Client Communication Hub',
    description: 'Centralized communication workflow integrating email, SMS, and project management tools.',
    longDescription: 'Keep all client communications organized and accessible in one place. This N8N workflow creates a centralized hub that automatically logs all client interactions from email, SMS, phone calls, and in-person meetings. It syncs with your project management system, maintains a complete communication history, sets follow-up reminders, and can even analyze sentiment to flag potentially unhappy clients before issues escalate.',
    category: 'N8N Template',
    type: 'template',
    thumbnail: 'https://picsum.photos/seed/n8n3/800/450',
    downloadUrl: '#',
    tags: ['N8N', 'Communication', 'CRM'],
    author: 'ClientFirst Solutions',
    publishDate: 'May 2024',
    difficulty: 'Intermediate',
    features: [
      'Multi-channel communication logging',
      'Unified client communication history',
      'Automatic follow-up reminders',
      'Sentiment analysis for client satisfaction',
      'Project management tool integration',
      'Team collaboration features',
      'Client portal access',
      'Communication analytics dashboard'
    ],
    requirements: [
      'N8N instance',
      'Email account with IMAP access',
      'SMS service account',
      'Project management software (Monday, Asana, Trello, etc.)',
      'Cloud storage (Google Drive or Dropbox)'
    ],
    includesFiles: [
      'N8N workflow JSON file',
      'Implementation guide (PDF, 28 pages)',
      'Team training guide (PDF, 12 pages)',
      'Client portal setup (PDF, 10 pages)',
      'Integration templates for popular PM tools',
      'Video walkthrough (18 minutes)'
    ]
  },
  {
    id: 10,
    title: 'Project Status Reporting',
    description: 'Automatically generate and send weekly project status reports to clients and stakeholders.',
    longDescription: 'Save hours each week on status reporting with this intelligent N8N workflow. The system automatically collects data from your project management tools, time tracking software, and accounting system to generate comprehensive, professional status reports. Reports are customized per client and can include progress photos, budget updates, milestone tracking, and upcoming tasks. Reports are automatically sent via email with a beautiful dashboard view.',
    category: 'N8N Template',
    type: 'template',
    thumbnail: 'https://picsum.photos/seed/n8n4/800/450',
    downloadUrl: '#',
    tags: ['N8N', 'Reporting', 'Project Management'],
    author: 'ReportPro Automation',
    publishDate: 'April 2024',
    difficulty: 'Advanced',
    features: [
      'Automatic data collection from multiple sources',
      'Customizable report templates by client type',
      'Progress photo integration',
      'Budget vs. actual tracking',
      'Milestone and deadline tracking',
      'Automated scheduling and distribution',
      'Interactive dashboard links',
      'Mobile-friendly report viewing',
      'Executive summary generation'
    ],
    requirements: [
      'N8N instance (cloud hosting recommended)',
      'Project management software',
      'Time tracking tool (optional)',
      'Accounting software (optional)',
      'Cloud photo storage (Google Photos, Dropbox, etc.)'
    ],
    includesFiles: [
      'N8N workflow JSON file',
      'Report template library (HTML/PDF)',
      'Setup guide (PDF, 40 pages)',
      'Customization guide (PDF, 18 pages)',
      'Data source integration guides (PDF, 25 pages)',
      'Video tutorial series (5 videos, 60 minutes total)',
      'Sample reports (PDF, 10 examples)'
    ]
  },
  // Prompts
  {
    id: 11,
    title: 'Bid Proposal Generator Prompts',
    description: 'Collection of ChatGPT prompts for creating competitive and professional bid proposals.',
    longDescription: 'Win more contracts with professionally-crafted bid proposals generated in minutes instead of hours. This comprehensive prompt library includes 30+ specialized prompts for different types of construction projects, from residential remodels to commercial builds. Each prompt has been refined through hundreds of iterations to consistently produce compelling, detailed proposals that highlight your strengths and address client needs. Includes techniques for competitive pricing presentation, scope of work clarity, and value proposition emphasis.',
    category: 'Prompt Library',
    type: 'prompt',
    downloadUrl: '#',
    tags: ['Prompts', 'Bidding', 'ChatGPT'],
    author: 'Bid Win Strategies',
    publishDate: 'March 2024',
    difficulty: 'Beginner',
    features: [
      '30+ specialized bid proposal prompts',
      'Templates for 15 different project types',
      'Competitive pricing presentation techniques',
      'Value proposition frameworks',
      'Risk mitigation language',
      'Customization instructions for your business',
      'Examples of winning proposals'
    ],
    whatYouWillLearn: [
      'How to structure winning proposals',
      'Techniques for standing out from competitors',
      'Ways to address common client concerns',
      'How to present pricing effectively',
      'Methods for highlighting your unique value',
      'Strategies for different project types',
      'Follow-up and negotiation approaches'
    ],
    includesFiles: [
      'Prompt library document (PDF, 55 pages)',
      'Quick reference guide (PDF, 8 pages)',
      'Example proposals (PDF, 30 pages)',
      'Customization worksheet (Word)',
      'Pricing strategy guide (PDF, 12 pages)'
    ]
  },
  {
    id: 12,
    title: 'Safety Inspection Report Prompts',
    description: 'Pre-built prompts for generating thorough safety inspection reports and checklists.',
    longDescription: 'Ensure OSHA compliance and maintain the highest safety standards with AI-generated inspection reports. This prompt library helps you quickly create detailed, compliant safety inspection reports and checklists for various construction scenarios. The prompts are designed to be thorough yet efficient, covering all required safety elements while being easy to customize for specific site conditions. Reduce inspection documentation time by 75% while improving accuracy and consistency.',
    category: 'Prompt Library',
    type: 'prompt',
    downloadUrl: '#',
    tags: ['Prompts', 'Safety', 'Compliance'],
    author: 'SafetyFirst Consulting',
    publishDate: 'February 2024',
    difficulty: 'Intermediate',
    features: [
      'OSHA-compliant report templates',
      'Prompts for 20+ inspection scenarios',
      'Pre-built safety checklists',
      'Hazard identification frameworks',
      'Corrective action language',
      'Incident report prompts',
      'Regular and surprise inspection formats'
    ],
    requirements: [
      'Basic OSHA knowledge',
      'ChatGPT or similar AI tool',
      'Understanding of construction safety standards'
    ],
    includesFiles: [
      'Safety prompt library (PDF, 68 pages)',
      'OSHA compliance checklist (PDF, 15 pages)',
      'Inspection report examples (PDF, 25 pages)',
      'Hazard classification guide (PDF, 10 pages)',
      'Incident report templates (PDF, 8 pages)',
      'Quick reference cards (PDF, 6 pages)'
    ]
  },
  {
    id: 13,
    title: 'Client Email Response Templates',
    description: 'AI prompts for drafting professional responses to common client inquiries and requests.',
    longDescription: 'Respond to client emails faster and more professionally with these specialized prompt templates. This collection covers 40+ common client communication scenarios including quote requests, change orders, delays, complaints, and follow-ups. Each prompt is designed to maintain a professional yet friendly tone while clearly addressing client concerns and setting appropriate expectations. Includes specific guidance for handling difficult situations with diplomacy.',
    category: 'Prompt Library',
    type: 'prompt',
    downloadUrl: '#',
    tags: ['Prompts', 'Communication', 'Email'],
    author: 'Communication Excellence Group',
    publishDate: 'April 2024',
    difficulty: 'Beginner',
    features: [
      '40+ email response prompts',
      'Scenarios for different client situations',
      'Tone adjustment guidance',
      'Difficult conversation frameworks',
      'Follow-up sequence templates',
      'Upselling and cross-selling techniques',
      'Complaint resolution approaches'
    ],
    whatYouWillLearn: [
      'Professional email communication best practices',
      'How to set clear expectations',
      'Techniques for de-escalating conflicts',
      'Ways to maintain client relationships',
      'Strategies for upselling services',
      'Methods for requesting reviews and referrals',
      'Approaches for different client personality types'
    ],
    includesFiles: [
      'Email prompt library (PDF, 42 pages)',
      'Scenario guide (PDF, 20 pages)',
      'Example email threads (PDF, 18 pages)',
      'Tone and voice guide (PDF, 8 pages)',
      'Quick response templates (PDF, 12 pages)'
    ]
  },
  {
    id: 14,
    title: 'Material Cost Estimation Prompts',
    description: 'Prompts designed to help estimate material costs and create accurate project budgets.',
    longDescription: 'Create more accurate and competitive project estimates with AI-powered material cost calculations. This prompt library helps you quickly generate detailed material lists and cost estimates for various construction projects. The prompts take into account waste factors, regional pricing variations, and seasonal considerations. Perfect for contractors who want to improve their estimating accuracy and speed while maintaining competitive pricing.',
    category: 'Prompt Library',
    type: 'prompt',
    downloadUrl: '#',
    tags: ['Prompts', 'Budgeting', 'Estimation'],
    author: 'EstimatePro Solutions',
    publishDate: 'May 2024',
    difficulty: 'Advanced',
    features: [
      '25+ estimation prompts by trade',
      'Material quantity calculators',
      'Waste factor considerations',
      'Regional pricing adjustment guides',
      'Labor hour estimation prompts',
      'Contingency planning frameworks',
      'Budget tracking templates'
    ],
    requirements: [
      'Construction estimating experience',
      'Understanding of material costs in your region',
      'Access to current supplier pricing',
      'ChatGPT Plus recommended for complex calculations'
    ],
    includesFiles: [
      'Estimation prompt library (PDF, 58 pages)',
      'Material quantity calculators (Excel)',
      'Regional pricing guides (PDF, 22 pages)',
      'Waste factor reference (PDF, 10 pages)',
      'Example estimates (PDF, 30 pages)',
      'Budget template (Excel)',
      'Cost tracking spreadsheet (Excel)'
    ]
  },
  // Images & Graphics
  {
    id: 15,
    title: 'AI Workflow Diagrams Pack',
    description: 'High-resolution infographics showing AI automation workflows for contractors.',
    longDescription: 'Visualize your AI automation strategy with this collection of professional workflow diagrams and infographics. Perfect for team training, client presentations, or planning your automation roadmap. Includes 25 fully customizable diagrams covering common contractor automation scenarios from lead capture to project completion. All files are provided in multiple formats (PNG, SVG, PDF) and are fully editable in popular design tools.',
    category: 'Graphics',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/graphic1/800/450',
    downloadUrl: '#',
    tags: ['Graphics', 'Diagrams', 'Visual'],
    fileSize: '25.3 MB',
    author: 'Visual Automation Studio',
    publishDate: 'March 2024',
    difficulty: 'Beginner',
    features: [
      '25 professional workflow diagrams',
      'Multiple file formats (PNG, SVG, PDF)',
      'Fully editable and customizable',
      'Print-ready high resolution',
      'Color and black/white versions',
      'Icon library included',
      'PowerPoint templates'
    ],
    includesFiles: [
      'Workflow diagrams (25 files, multiple formats)',
      'Icon library (100+ icons)',
      'PowerPoint presentation templates',
      'Customization guide (PDF, 15 pages)',
      'Brand integration guide (PDF, 8 pages)',
      'Print specifications (PDF, 5 pages)'
    ],
    requirements: [
      'Design software (Adobe Illustrator, Figma, or Canva)',
      'Or use provided PowerPoint templates',
      'Basic design knowledge helpful but not required'
    ]
  },
  {
    id: 16,
    title: 'Social Media Graphics Bundle',
    description: 'Editable Canva templates for promoting your AI-powered contractor services.',
    longDescription: 'Boost your social media presence with 100+ professionally-designed Canva templates specifically created for contractors using AI tools. This bundle includes templates for Instagram posts and stories, Facebook posts, LinkedIn articles, and Twitter graphics. Each template is optimized for engagement and can be quickly customized with your branding, services, and project photos. Includes content calendars and social media strategy guide.',
    category: 'Graphics',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/graphic2/800/450',
    downloadUrl: '#',
    tags: ['Graphics', 'Marketing', 'Social Media'],
    fileSize: '18.7 MB',
    author: 'Social Contractor Marketing',
    publishDate: 'April 2024',
    difficulty: 'Beginner',
    features: [
      '100+ Canva templates',
      'Templates for all major platforms',
      'Before/after project showcase layouts',
      'Client testimonial designs',
      'AI technology highlight templates',
      '30-day content calendar',
      'Hashtag strategy guide',
      'Post caption templates'
    ],
    whatYouWillLearn: [
      'How to customize templates in Canva',
      'Social media best practices for contractors',
      'Content scheduling strategies',
      'Engagement optimization techniques',
      'Branding consistency across platforms',
      'Photography tips for construction projects',
      'Hashtag research and usage'
    ],
    includesFiles: [
      'Canva template links (PDF with access codes)',
      'Content calendar templates (Excel, Google Sheets)',
      'Social media strategy guide (PDF, 35 pages)',
      'Caption template library (PDF, 28 pages)',
      'Hashtag research guide (PDF, 15 pages)',
      'Photography guide for contractors (PDF, 20 pages)',
      'Engagement tracking spreadsheet (Excel)'
    ],
    requirements: [
      'Free or Pro Canva account',
      'Social media accounts',
      'Photos of your work (optional)',
      'Logo and brand colors'
    ]
  },
];
