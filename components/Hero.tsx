'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';
import { founderProfile } from '@/lib/content';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-executive-black">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-executive-navy/50 via-executive-black to-executive-black"
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-executive-gold/10 border border-executive-gold/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-executive-gold animate-pulse" />
                        <span className="text-executive-gold text-sm font-medium">Founder & Systems Architect</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-executive-white leading-tight mb-6"
                    >
                        {founderProfile.tagline.split('.').map((sentence, index) => (
                            <span key={index} className="block">
                                {sentence.trim()}.
                            </span>
                        ))}
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-executive-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Founder of <span className="text-executive-gold">Sitelytc</span> & <span className="text-executive-gold">Kritviya</span>
                        <br />
                        Architect of <span className="text-executive-gold">Vedic CEO OS</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/ventures"
                            className="executive-btn executive-btn-primary group"
                        >
                            Explore Ventures
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/vision"
                            className="executive-btn executive-btn-secondary"
                        >
                            Read Vision
                        </Link>
                        <a
                            href="/contact"
                            className="executive-btn executive-btn-secondary"
                        >
                            Connect
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
                    >
                        {founderProfile.credentials.map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-3xl font-display font-semibold text-executive-gold">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-executive-muted mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-executive-muted"
                >
                    <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
