'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Timeline } from '@/components/Timeline';
import { systems, timeline } from '@/lib/content';
import { Layers, Zap, Target, TrendingUp, Database, Cpu, Network, Lock } from 'lucide-react';

export default function SystemsPage() {
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
                        Systems Architecture
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        Proprietary frameworks that power strategic decision-making and enterprise operations.
                    </motion.p>
                </div>
            </Section>

            {/* Core Systems */}
            <Section background="dark" className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {systems.map((system, index) => (
                            <motion.div
                                key={system.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-8 hover-lift"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center flex-shrink-0">
                                        {system.id === 'trinity' && <Layers className="w-7 h-7 text-executive-gold" />}
                                        {system.id === 'vedic' && <Zap className="w-7 h-7 text-executive-gold" />}
                                        {system.id === 'decision' && <Target className="w-7 h-7 text-executive-gold" />}
                                        {system.id === 'dashboard' && <TrendingUp className="w-7 h-7 text-executive-gold" />}
                                    </div>
                                    <div>
                                        <span className="text-executive-gold/70 text-sm uppercase tracking-wider">{system.layer}</span>
                                        <h3 className="text-executive-white font-medium text-xl mt-1">{system.name}</h3>
                                    </div>
                                </div>
                                <p className="text-executive-muted text-sm leading-relaxed mb-6">
                                    {system.description}
                                </p>
                                <div>
                                    <h4 className="text-executive-white font-medium text-sm mb-3">Components</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {system.components.map((comp) => (
                                            <span key={comp} className="px-3 py-1 bg-executive-slate/50 border border-executive-border/50 rounded-full text-xs text-executive-muted">
                                                {comp}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Architecture Diagram Placeholder */}
            <Section background="gradient" className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-12"
                    >
                        <h2 className="heading-md text-executive-white mb-8 text-center">System Architecture Overview</h2>
                        <div className="grid gap-4">
                            {/* Trinity OS Layer */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-executive-gold/20 flex items-center justify-center">
                                    <Database className="w-6 h-6 text-executive-gold" />
                                </div>
                                <div className="flex-1 p-4 bg-executive-slate/50 border border-executive-border/50 rounded-lg">
                                    <h4 className="text-executive-white font-medium">Trinity OS Foundation</h4>
                                    <p className="text-executive-muted text-sm">Data Layer • Logic Layer • Presentation Layer</p>
                                </div>
                            </div>
                            {/* Arrow */}
                            <div className="flex justify-center">
                                <div className="w-0.5 h-8 bg-executive-gold/30" />
                            </div>
                            {/* Vedic Intelligence Layer */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-executive-gold/20 flex items-center justify-center">
                                    <Cpu className="w-6 h-6 text-executive-gold" />
                                </div>
                                <div className="flex-1 p-4 bg-executive-slate/50 border border-executive-border/50 rounded-lg">
                                    <h4 className="text-executive-white font-medium">Vedic Intelligence Layer</h4>
                                    <p className="text-executive-muted text-sm">Pattern Recognition • Cyclical Analysis • Decision Frameworks</p>
                                </div>
                            </div>
                            {/* Arrow */}
                            <div className="flex justify-center">
                                <div className="w-0.5 h-8 bg-executive-gold/30" />
                            </div>
                            {/* Executive Interface */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-executive-gold/20 flex items-center justify-center">
                                    <Network className="w-6 h-6 text-executive-gold" />
                                </div>
                                <div className="flex-1 p-4 bg-executive-slate/50 border border-executive-border/50 rounded-lg">
                                    <h4 className="text-executive-white font-medium">Executive Interface</h4>
                                    <p className="text-executive-muted text-sm">Decision Index • Dashboards • Strategic Planning Tools</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Timeline */}
            <Section background="dark" className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-md text-executive-white text-center mb-16"
                    >
                        Evolution of Systems
                    </motion.h2>
                    <Timeline items={timeline} />
                </div>
            </Section>
        </>
    );
}
