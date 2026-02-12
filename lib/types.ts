export interface Venture {
    id: string;
    name: string;
    tagline: string;
    description: string;
    vision: string;
    architecture: string;
    impact: string;
    stack: string[];
    differentiator: string;
    website?: string;
    founded?: string;
    status: 'active' | 'acquired' | 'archived';
}

export interface TimelineItem {
    id: string;
    year: string;
    title: string;
    description: string;
    icon?: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    challenge: string;
    solution: string;
    outcome: string;
    metrics?: string[];
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company?: string;
}

export interface MediaMention {
    id: string;
    title: string;
    source: string;
    date: string;
    url?: string;
    type: 'article' | 'interview' | 'podcast' | 'feature';
}

export interface SystemArchitecture {
    id: string;
    name: string;
    description: string;
    components: string[];
    layer: string;
}

export interface PhilosophyPoint {
    id: string;
    title: string;
    description: string;
    category: 'leadership' | 'technology' | 'strategy' | 'consciousness';
}

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    twitter?: string;
    location?: string;
}
