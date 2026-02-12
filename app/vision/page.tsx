'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { philosophy } from '@/lib/content';
import { Brain, Target, Zap, Globe, Shield, Sparkles } from 'lucide-react';

const categoryIcons = {
    leadership: Brain,
    technology: Zap,
    strategy: Target,
    consciousness: Sparkles,
};

export default function VisionPage() {
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
                        Vision & Philosophy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        Principles that guide the creation of systems that matter.
                    </motion.p>
                </div>
            </Section>

            {/* Manifesto */}
            <Section background="dark" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 lg:p-12"
                    >
                        <h2 className="heading-md text-executive-white mb-6">Executive Manifesto</h2>
                        <div className="space-y-6 text-executive-muted leading-relaxed">
                            <p className="text-lg">
                                We stand at a unique inflection point in human history. The convergence of ancient wisdom
                                and modern technology creates unprecedented opportunities for building systems that serve
                                both human flourishing and organizational excellence.
                            </p>
                            <p>
                                Our philosophy is grounded in the belief that the best systems are those that amplify
                                human potential while maintaining coherence and purpose. We reject the false dichotomy
                                between wisdom and innovation, between tradition and progress.
                            </p>
                            <p>
                                Every venture we create, every system we architect, is an expression of this belief:
                                that technology should be a vehicle for consciousness, not a replacement for it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy Grid */}
            <Section background="gradient" className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-md text-executive-white text-center mb-12"
                    >
                        Core Principles
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {philosophy.map((item, index) => {
                            const Icon = categoryIcons[item.category];
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass-card p-6 hover-lift"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-executive-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-executive-white font-medium text-lg mb-2">{item.title}</h3>
                                            <p className="text-executive-muted text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Vedic + Modern */}
            <Section background="dark" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 lg:p-12"
                    >
                        <h2 className="heading-md text-executive-white mb-6">The Integration of Wisdom</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-executive-gold font-medium text-lg mb-4">Ancient Wisdom</h3>
                                <ul className="space-y-3 text-executive-muted text-sm">
                                    <li>• Vedic pattern recognition frameworks</li>
                                    <li>• Cyclical understanding of time</li>
                                    <li>• Dharma-based decision models</li>
                                    <li>• Consciousness-first approaches</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-executive-gold font-medium text-lg mb-4">Modern Technology</h3>
                                <ul className="space-y-3 text-executive-muted text-sm">
                                    <li>• Enterprise-grade architecture</li>
                                    <li>• Data-driven analytics</li>
                                    <li>• Scalable infrastructure</li>
                                    <li>• Real-time decision support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-executive-border/50">
                            <p className="text-executive-muted text-sm">
                                When these two streams converge, we create systems that are both powerful and principled,
                                scalable and sustainable, technological and timeless.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
