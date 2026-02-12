'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Zap, Layers, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { VentureCard } from '@/components/CaseStudyCard';
import { founderProfile, ventures, systems, caseStudies, philosophy } from '@/lib/content';

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Founder Profile Preview */}
            <Section id="about" background="dark" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-lg text-executive-white mb-6">
                                Founder Profile
                            </h2>
                            <div className="space-y-6 text-executive-muted leading-relaxed">
                                <p className="text-lg">{founderProfile.bio.split('.')[0]}.</p>
                                <p>{founderProfile.bio.split('.').slice(1).join('. ')}</p>
                            </div>
                            <Link
                                href="/about"
                                className="inline-flex items-center space-x-2 mt-8 text-executive-gold hover:text-executive-goldLight transition-colors duration-300"
                            >
                                <span className="font-medium">Read Full Story</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {founderProfile.credentials.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass-card p-6 text-center hover-lift"
                                >
                                    <div className="text-3xl font-display font-semibold text-executive-gold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-executive-muted">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Ventures Preview */}
            <Section id="ventures" background="gradient" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg text-executive-white mb-4">Ventures</h2>
                        <p className="text-executive-muted max-w-2xl mx-auto">
                            Operating companies that embody the philosophy of structured innovation and conscious enterprise.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ventures.slice(0, 3).map((venture, index) => (
                            <VentureCard key={venture.id} venture={venture} index={index} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/ventures"
                            className="executive-btn executive-btn-secondary"
                        >
                            View All Ventures
                        </Link>
                    </motion.div>
                </div>
            </Section>

            {/* Systems Architecture Preview */}
            <Section id="systems" background="dark" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg text-executive-white mb-4">Systems Architecture</h2>
                        <p className="text-executive-muted max-w-2xl mx-auto">
                            Proprietary frameworks that power strategic decision-making and enterprise operations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {systems.map((system, index) => (
                            <motion.div
                                key={system.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card p-6 hover-lift group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center mb-4 group-hover:bg-executive-gold/20 transition-colors duration-300">
                                    {system.id === 'trinity' && <Layers className="w-6 h-6 text-executive-gold" />}
                                    {system.id === 'vedic' && <Zap className="w-6 h-6 text-executive-gold" />}
                                    {system.id === 'decision' && <Target className="w-6 h-6 text-executive-gold" />}
                                    {system.id === 'dashboard' && <TrendingUp className="w-6 h-6 text-executive-gold" />}
                                </div>
                                <h3 className="text-executive-white font-medium text-lg mb-2">{system.name}</h3>
                                <p className="text-executive-muted text-sm mb-4">{system.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {system.components.slice(0, 3).map((comp) => (
                                        <span key={comp} className="text-xs text-executive-gold/70">
                                            {comp}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/systems"
                            className="executive-btn executive-btn-secondary"
                        >
                            Explore Systems
                        </Link>
                    </motion.div>
                </div>
            </Section>

            {/* Vision Preview */}
            <Section id="vision" background="gradient" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-lg text-executive-white mb-6">Vision & Philosophy</h2>
                            <p className="text-executive-muted leading-relaxed mb-8">
                                {founderProfile.philosophy}
                            </p>
                            <Link
                                href="/vision"
                                className="executive-btn executive-btn-primary"
                            >
                                Read Manifesto
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid gap-4"
                        >
                            {philosophy.slice(0, 4).map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass-card p-5 hover-lift"
                                >
                                    <h3 className="text-executive-white font-medium mb-2">{item.title}</h3>
                                    <p className="text-executive-muted text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Case Studies Preview */}
            <Section id="case-studies" background="dark" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg text-executive-white mb-4">Case Studies</h2>
                        <p className="text-executive-muted max-w-2xl mx-auto">
                            Real-world applications of systems thinking and strategic architecture.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card p-6 hover-lift"
                            >
                                <span className="text-executive-gold text-sm font-medium">{study.category}</span>
                                <h3 className="text-executive-white font-medium text-xl mt-2 mb-4">{study.title}</h3>
                                <div className="space-y-3 text-executive-muted text-sm">
                                    <p><span className="text-executive-white font-medium">Challenge:</span> {study.challenge}</p>
                                    <p><span className="text-executive-white font-medium">Solution:</span> {study.solution}</p>
                                    <p><span className="text-executive-white font-medium">Outcome:</span> {study.outcome}</p>
                                </div>
                                {study.metrics && (
                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-executive-border/50">
                                        {study.metrics.map((metric) => (
                                            <span key={metric} className="text-xs px-2 py-1 bg-executive-gold/10 text-executive-gold rounded">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="gradient" className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-lg text-executive-white mb-6">
                            Ready to Build Something Extraordinary?
                        </h2>
                        <p className="text-executive-muted text-lg mb-8 max-w-2xl mx-auto">
                            Whether you're looking to establish a strategic digital presence, architect enterprise systems,
                            or integrate conscious decision-making frameworks, let's explore the possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="executive-btn executive-btn-primary"
                            >
                                Get in Touch
                            </Link>
                            <a
                                href={founderProfile.philosophy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="executive-btn executive-btn-secondary"
                            >
                                View LinkedIn
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
