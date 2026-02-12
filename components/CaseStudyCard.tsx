'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Venture } from '@/lib/types';

interface VentureCardProps {
    venture: Venture;
    index: number;
}

export function VentureCard({ venture, index }: VentureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-8 hover-lift hover-glow group"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-display font-semibold text-executive-white mb-2">
                        {venture.name}
                    </h3>
                    <p className="text-executive-gold text-sm">{venture.tagline}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${venture.status === 'active'
                        ? 'bg-executive-gold/10 text-executive-gold border border-executive-gold/20'
                        : 'bg-executive-slate/50 text-executive-muted border border-executive-border/50'
                    }`}>
                    {venture.status.charAt(0).toUpperCase() + venture.status.slice(1)}
                </span>
            </div>

            {/* Description */}
            <p className="text-executive-muted text-sm leading-relaxed mb-6">
                {venture.description}
            </p>

            {/* Vision */}
            <div className="mb-6">
                <h4 className="text-executive-white font-medium text-sm mb-2">Vision</h4>
                <p className="text-executive-muted text-sm">{venture.vision}</p>
            </div>

            {/* Architecture */}
            <div className="mb-6">
                <h4 className="text-executive-white font-medium text-sm mb-2">Architecture</h4>
                <p className="text-executive-muted text-sm">{venture.architecture}</p>
            </div>

            {/* Impact */}
            <div className="mb-6">
                <h4 className="text-executive-white font-medium text-sm mb-2">Impact</h4>
                <p className="text-executive-muted text-sm">{venture.impact}</p>
            </div>

            {/* Stack */}
            <div className="mb-6">
                <h4 className="text-executive-white font-medium text-sm mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {venture.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-executive-slate/50 border border-executive-border/50 rounded-full text-xs text-executive-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Differentiator */}
            <div className="mb-6 p-4 bg-executive-gold/5 border border-executive-gold/10 rounded-lg">
                <h4 className="text-executive-gold font-medium text-sm mb-2">Strategic Differentiator</h4>
                <p className="text-executive-muted text-sm">{venture.differentiator}</p>
            </div>

            {/* CTA */}
            {venture.website && (
                <Link
                    href={venture.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-executive-gold hover:text-executive-goldLight transition-colors duration-300"
                >
                    <span className="text-sm font-medium">Visit Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            )}
        </motion.div>
    );
}
