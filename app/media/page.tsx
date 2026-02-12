'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { mediaMentions } from '@/lib/content';
import { ExternalLink, FileText, Mic, Newspaper, Camera } from 'lucide-react';

const typeIcons = {
    article: FileText,
    interview: Mic,
    podcast: Mic,
    feature: Camera,
};

export default function MediaPage() {
    return (
        <>
            {/* Hero */}
            <Section className="min-h-[50vh] flex items-center justify-center pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="heading-xl text-executive-white mb-6"
                    >
                        Media & Thought Leadership
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        Insights, perspectives, and strategic thinking shared across platforms.
                    </motion.p>
                </div>
            </Section>

            {/* Media Grid */}
            <Section background="dark" className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid gap-4">
                        {mediaMentions.map((mention, index) => {
                            const Icon = typeIcons[mention.type];
                            return (
                                <motion.a
                                    key={mention.id}
                                    href={mention.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="glass-card p-6 hover-lift group flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-executive-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-executive-white font-medium group-hover:text-executive-gold transition-colors duration-300">
                                                {mention.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-executive-gold text-sm">{mention.source}</span>
                                                <span className="text-executive-muted text-sm">•</span>
                                                <span className="text-executive-muted text-sm">{mention.date}</span>
                                                <span className="text-executive-muted/50 text-sm capitalize">• {mention.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-executive-muted group-hover:text-executive-gold transition-colors duration-300" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Speaking */}
            <Section background="gradient" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 lg:p-12 text-center"
                    >
                        <h2 className="heading-md text-executive-white mb-4">Speaking & Engagements</h2>
                        <p className="text-executive-muted leading-relaxed mb-8">
                            Available for keynotes, workshops, and strategic consultations on systems thinking,
                            conscious leadership, and the integration of ancient wisdom with modern technology.
                        </p>
                        <a
                            href="/contact"
                            className="executive-btn executive-btn-primary"
                        >
                            Inquire About Speaking
                        </a>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
