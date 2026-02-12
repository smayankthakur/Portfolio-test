'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/lib/types';

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-executive-gold/50 via-executive-border to-transparent" />

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-executive-navy border border-executive-border/50 flex items-center justify-center text-2xl z-10">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className={`flex-1 max-w-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            <span className="text-executive-gold font-display font-semibold text-lg">
                                {item.year}
                            </span>
                            <h3 className="text-executive-white font-medium text-xl mt-1 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-executive-muted text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
