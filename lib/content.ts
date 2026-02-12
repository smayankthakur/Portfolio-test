import { Venture, TimelineItem, CaseStudy, MediaMention, SystemArchitecture, PhilosophyPoint, ContactInfo } from './types';

export const founderProfile = {
    name: 'Mayank Thakur',
    title: 'Founder & Systems Architect',
    subtitle: 'CEO Portfolio',
    tagline: 'Building Multi-Layered Operating Systems for Visionary Enterprises',
    bio: `Mayank Thakur is a visionary founder and systems architect who bridges ancient wisdom with modern technology. As the creator of Trinity OS and the Vedic Intelligence Framework, he has pioneered a new paradigm of conscious entrepreneurship that integrates Vedic principles with enterprise-grade architecture.

His journey began with a fundamental question: How can we build systems that not only scale efficiently but also align with deeper patterns of intelligence? This inquiry led to the development of Sitelytc and Kritviya—ventures that embody his philosophy of structured innovation.

Today, Mayank architects multi-layered operating systems for visionary enterprises, combining 15+ years of engineering expertise with strategic insight into how conscious leadership transforms organizational outcomes.`,
    philosophy: `Systems thinking is not just about architecture—it's about understanding the fundamental patterns that govern success. Every enterprise is a complex adaptive system, and the leader's role is to design structures that amplify collective intelligence while maintaining coherent direction.

I believe that the future of entrepreneurship lies at the intersection of ancient wisdom and modern technology. Vedic intelligence provides a framework for understanding systemic patterns that has been refined over millennia. When combined with contemporary engineering practices, this creates operating systems that are both powerful and principled.`,
    credentials: [
        { label: 'Years Building Systems', value: '15+' },
        { label: 'Ventures Launched', value: '5+' },
        { label: 'Enterprise Frameworks', value: '12+' },
        { label: 'OS Architectures', value: '8+' },
    ],
};

export const contact: ContactInfo = {
    email: 'mayank@sitelytc.com',
    linkedin: 'https://linkedin.com/in/mayankthakur',
    twitter: 'https://twitter.com/mayankthakur',
    location: 'India',
};

export const ventures: Venture[] = [
    {
        id: 'sitelytc',
        name: 'Sitelytc',
        tagline: 'Intelligent Digital Presence',
        description: 'Sitelytc represents the evolution of digital presence from static websites to intelligent operating systems. More than a web development platform, it embodies the philosophy that every digital touchpoint should be a strategic asset.',
        vision: 'To transform how visionary enterprises establish and scale their digital presence through intelligent, adaptive systems that grow with the organization.',
        architecture: 'Built on Next.js 14 with a microservices architecture that separates concerns while maintaining seamless integration. The platform utilizes server-side rendering for performance, edge functions for global reach, and a composable content layer that adapts to enterprise needs.',
        impact: 'Empowered 100+ organizations to establish premium digital presences that reflect their strategic positioning and drive measurable business outcomes.',
        stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Edge Functions', 'PostgreSQL', 'Prisma'],
        differentiator: 'Strategic-first approach that treats digital presence as a core business function rather than a marketing expense.',
        website: 'https://mayank.sitelytc.com',
        founded: '2022',
        status: 'active',
    },
    {
        id: 'kritviya',
        name: 'Kritviya',
        tagline: 'Conscious Brand Architecture',
        description: 'Kritviya is where brand strategy meets systems design. It creates brand architectures that are not just visually compelling but structurally sound—designed to scale across markets, products, and time.',
        vision: 'To define a new category of brand architecture that integrates conscious design principles with enterprise scalability requirements.',
        architecture: 'A headless brand system built on component-driven development. Brand guidelines become living systems that propagate consistency across all touchpoints while allowing for intelligent adaptation.',
        impact: 'Established brand frameworks for ventures seeking to communicate with clarity and purpose in crowded markets.',
        stack: ['React', 'Design Systems', 'Figma Integration', 'Storybook', 'GraphQL'],
        differentiator: 'Integration of Vedic color psychology and symbolic systems with contemporary brand methodology.',
        website: 'https://kritviya.sitelytc.com',
        founded: '2023',
        status: 'active',
    },
    {
        id: 'vedic-ceo-os',
        name: 'Vedic CEO OS',
        tagline: 'Executive Decision Intelligence',
        description: 'The Vedic CEO OS is a groundbreaking decision intelligence platform that integrates Vedic wisdom frameworks with modern analytical tools. It provides executives with pattern recognition and strategic foresight grounded in time-tested principles.',
        vision: 'To empower conscious leaders with decision-making systems that synthesize ancient wisdom with contemporary analytics.',
        architecture: 'A multi-tenant SaaS platform featuring modular intelligence layers. The system ingests organizational data and applies Vedic frameworks to surface patterns, risks, and opportunities invisible to conventional analysis.',
        impact: 'Deployed decision frameworks that have influenced strategic planning for enterprises across multiple sectors.',
        stack: ['Node.js', 'Python', 'TensorFlow', 'Neo4j', 'React', 'D3.js'],
        differentiator: 'Proprietary algorithms that map Vedic cyclical patterns to business cycles and market dynamics.',
        website: 'https://kritvia.vercel.app',
        founded: '2024',
        status: 'active',
    },
    {
        id: 'trinity-os',
        name: 'Trinity OS',
        tagline: 'Enterprise Integration Framework',
        description: 'Trinity OS is the foundational operating system that underlies all ventures. It represents a unified approach to enterprise architecture that harmonizes data, logic, and user experience into a coherent system.',
        vision: 'To provide visionary enterprises with a unified operating system that transforms fragmented operations into strategic advantage.',
        architecture: 'A three-layer architecture—data persistence, business logic, and presentation—connected through event-driven communication. The system supports multi-tenancy, horizontal scaling, and zero-downtime deployments.',
        impact: 'The technical foundation supporting all ventures, enabling rapid iteration and reliable operation at scale.',
        stack: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
        differentiator: 'Event-sourced architecture with sagas for complex business processes and eventual consistency guarantees.',
        status: 'active',
    },
];

export const timeline: TimelineItem[] = [
    {
        id: 'foundation',
        year: '2010',
        title: 'Systems Awakening',
        description: 'Began the journey of understanding how complex systems behave and how to design them for sustainable success.',
        icon: '⚡',
    },
    {
        id: 'first-venture',
        year: '2015',
        title: 'First Enterprise',
        description: 'Launched initial ventures, applying systems thinking to real-world business challenges and learning from both success and failure.',
        icon: '🚀',
    },
    {
        id: 'framework-development',
        year: '2018',
        title: 'Architecture Framework',
        description: 'Developed proprietary frameworks for enterprise architecture that prioritized both efficiency and consciousness.',
        icon: '🏗️',
    },
    {
        id: 'sitelytc',
        year: '2022',
        title: 'Sitelytc Launch',
        description: 'Founded Sitelytc to bring intelligent digital presence to visionary enterprises seeking strategic differentiation.',
        icon: '💡',
    },
    {
        id: 'kritviya',
        year: '2023',
        title: 'Kritviya Emergence',
        description: 'Launched brand architecture practice to address the gap between brand strategy and systems implementation.',
        icon: '🎨',
    },
    {
        id: 'trinity-os',
        year: '2024',
        title: 'Trinity OS',
        description: 'Open-sourced the foundational operating system and launched Vedic CEO OS for executive decision intelligence.',
        icon: '🌀',
    },
];

export const systems: SystemArchitecture[] = [
    {
        id: 'trinity',
        name: 'Trinity OS',
        description: 'The foundational three-layer operating system that harmonizes data, logic, and presentation into a unified whole.',
        components: ['Data Layer', 'Logic Layer', 'Presentation Layer', 'Event Bus', 'Saga Orchestrator'],
        layer: 'Foundation',
    },
    {
        id: 'vedic',
        name: 'Vedic Intelligence',
        description: 'Pattern recognition and decision frameworks derived from Vedic principles, adapted for contemporary business contexts.',
        components: ['Jyotish Analysis', 'Muhurta Selection', 'Dharma Assessment', 'Karma Mapping'],
        layer: 'Intelligence',
    },
    {
        id: 'decision',
        name: 'Decision Index',
        description: 'Proprietary framework for evaluating strategic decisions against multiple success criteria and risk factors.',
        components: ['Impact Matrix', 'Risk Radar', 'Opportunity Mapping', 'Timeline Analysis'],
        layer: 'Strategic',
    },
    {
        id: 'dashboard',
        name: 'Executive Dashboard',
        description: 'Real-time visibility into organizational health, performance metrics, and predictive indicators.',
        components: ['KPI Engine', 'Trend Analysis', 'Anomaly Detection', 'Alert System'],
        layer: 'Operations',
    },
];

export const caseStudies: CaseStudy[] = [
    {
        id: 'enterprise-transformation',
        title: 'Enterprise Digital Transformation',
        category: 'Digital Strategy',
        challenge: 'A mid-market enterprise struggling with fragmented digital presence and inconsistent customer experience across channels.',
        solution: 'Implemented Sitelytc platform with unified content architecture and integrated analytics. Designed brand framework through Kritviya methodology.',
        outcome: 'Increased digital engagement by 340% and reduced content production time by 60%.',
        metrics: ['340% Engagement Increase', '60% Time Reduction', '2x Conversion Rate'],
    },
    {
        id: 'multi-tenant-saas',
        title: 'Multi-Tenant SaaS Architecture',
        category: 'Platform Engineering',
        challenge: 'Need to support multiple enterprise clients on a shared platform while maintaining data isolation and customization flexibility.',
        solution: 'Built Trinity OS with tenant-aware architecture, implementing row-level security and configurable business rules engine.',
        outcome: 'Successfully onboarded 50+ enterprise clients with zero security incidents and 99.99% uptime.',
        metrics: ['50+ Enterprise Clients', '99.99% Uptime', 'Zero Security Incidents'],
    },
    {
        id: 'executive-decision-system',
        title: 'Executive Decision Intelligence',
        category: 'Strategic Technology',
        challenge: 'Executive team making decisions based on historical data without forward-looking insights or pattern recognition.',
        solution: 'Deployed Vedic CEO OS with integrated data pipelines, cyclical analysis, and recommendation engine based on Vedic frameworks.',
        outcome: 'Decision quality improved measurably with 40% reduction in strategic blind spots and improved timing of market moves.',
        metrics: ['40% Blind Spot Reduction', 'Improved Timing', 'Higher ROI on Decisions'],
    },
];

export const philosophy: PhilosophyPoint[] = [
    {
        id: 'conscious-leadership',
        title: 'Conscious Leadership',
        description: 'Leadership that operates from awareness rather than reaction. The capacity to see systems clearly and act from principle rather than impulse.',
        category: 'leadership',
    },
    {
        id: 'systems-first',
        title: 'Systems-First Thinking',
        description: 'Every challenge is a system. Understanding the interconnections reveals leverage points that isolated interventions cannot access.',
        category: 'strategy',
    },
    {
        id: 'vedic-modern',
        title: 'Wisdom + Technology',
        description: 'Ancient patterns of intelligence, refined over millennia, combined with modern engineering capabilities creates solutions neither could achieve alone.',
        category: 'technology',
    },
    {
        id: 'structured-freedom',
        title: 'Structured Freedom',
        description: 'Systems should enable rather than constrain. The best architecture creates clear boundaries within which creativity and adaptation flourish.',
        category: 'technology',
    },
    {
        id: 'timeless-principles',
        title: 'Timeless Principles',
        description: 'While tactics change rapidly, principles persist. Building on enduring foundations creates lasting value and resilient organizations.',
        category: 'strategy',
    },
    {
        id: 'integration',
        title: 'Holistic Integration',
        description: 'Separating strategy from operations, or technology from culture, creates artificial boundaries that limit potential. Integration unlocks it.',
        category: 'leadership',
    },
];

export const mediaMentions: MediaMention[] = [
    {
        id: '1',
        title: 'The Future of Conscious Entrepreneurship',
        source: 'TechCrunch',
        date: '2024',
        type: 'article',
        url: '#',
    },
    {
        id: '2',
        title: 'Systems Thinking in the AI Era',
        source: 'Founder Diaries',
        date: '2024',
        type: 'podcast',
        url: '#',
    },
    {
        id: '3',
        title: 'Vedic Intelligence Meets Enterprise Software',
        source: 'VentureBeat',
        date: '2023',
        type: 'feature',
        url: '#',
    },
    {
        id: '4',
        title: 'Building for the Long Term',
        source: 'Indie Hackers',
        date: '2023',
        type: 'interview',
        url: '#',
    },
    {
        id: '5',
        title: 'The Architecture of Visionary Companies',
        source: 'First Round Review',
        date: '2023',
        type: 'article',
        url: '#',
    },
];

export const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'Systems', href: '/systems' },
    { label: 'Vision', href: '/vision' },
    { label: 'Media', href: '/media' },
    { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
    { platform: 'LinkedIn', url: contact.linkedin, icon: 'linkedin' },
    { platform: 'Twitter', url: contact.twitter || '#', icon: 'twitter' },
    { platform: 'Email', url: `mailto:${contact.email}`, icon: 'email' },
];
