'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/Timeline';
import { Section } from '@/components/Section';
import { founderProfile, timeline } from '@/lib/content';

export default function AboutPage() {
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
                        Founder Profile
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        {founderProfile.tagline}
                    </motion.p>
                </div>
            </Section>

            {/* Bio */}
            <Section background="dark" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-invert max-w-none"
                    >
                        <div className="glass-card p-8 lg:p-12">
                            <h2 className="heading-md text-executive-white mb-6">Origin Story</h2>
                            <div className="space-y-6 text-executive-muted leading-relaxed">
                                <p className="text-lg">{founderProfile.bio}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy */}
            <Section background="gradient" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-md text-executive-white mb-8">Systems Thinking Philosophy</h2>
                        <div className="glass-card p-8 lg:p-12">
                            <p className="text-executive-muted leading-relaxed text-lg">
                                {founderProfile.philosophy}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Credentials */}
            <Section background="dark" className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-md text-executive-white text-center mb-12"
                    >
                        Credentials
                    </motion.h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {founderProfile.credentials.map((cred, index) => (
                            <motion.div
                                key={cred.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card p-6 text-center hover-lift"
                            >
                                <div className="text-4xl font-display font-semibold text-executive-gold mb-2">
                                    {cred.value}
                                </div>
                                <div className="text-sm text-executive-muted">{cred.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Timeline */}
            <Section background="gradient" className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-md text-executive-white text-center mb-16"
                    >
                        Journey
                    </motion.h2>
                    <Timeline items={timeline} />
                </div>
            </Section>
        </>
    );
}
