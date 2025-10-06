export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  // Optional fields for detail pages
  longDescription?: string;
  images?: string[];
  technologies?: string[];
  client?: string;
  date?: string; // e.g., "2025-01"
  liveUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  shortDescription: string;
  features: string[];
  process: string[];
  imageUrl: string;
}
