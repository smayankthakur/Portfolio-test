'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children?: ReactNode;
    className?: string;
    id?: string;
    background?: 'default' | 'light' | 'dark' | 'gradient';
}

export function Section({
    children,
    className = '',
    id,
    background = 'default'
}: SectionProps) {
    const backgrounds = {
        default: 'bg-executive-black',
        light: 'bg-executive-navy',
        dark: 'bg-executive-black',
        gradient: 'bg-gradient-to-b from-executive-black via-executive-navy to-executive-black',
    };

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`${backgrounds[background]} ${className}`}
        >
            {children}
        </motion.section>
    );
}
