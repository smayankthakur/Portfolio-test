'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { VentureCard } from '@/components/CaseStudyCard';
import { ventures } from '@/lib/content';

export default function VenturesPage() {
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
                        Ventures
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        Operating companies that embody the philosophy of structured innovation and conscious enterprise.
                    </motion.p>
                </div>
            </Section>

            {/* Ventures Grid */}
            <Section background="gradient" className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {ventures.map((venture, index) => (
                            <VentureCard key={venture.id} venture={venture} index={index} />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
