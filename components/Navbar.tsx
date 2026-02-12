'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navigation } from '@/lib/content';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-executive-black/80 backdrop-blur-xl border-b border-executive-border/50'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-executive-gold to-executive-goldDim flex items-center justify-center">
                            <span className="text-executive-black font-display font-semibold text-lg">MT</span>
                        </div>
                        <span className="font-display text-lg font-medium text-executive-white hidden sm:block">
                            Mayank Thakur
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-executive-muted hover:text-executive-gold transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-executive-light hover:text-executive-gold transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-executive-navy/95 backdrop-blur-xl border-b border-executive-border/50"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-base font-medium text-executive-light hover:text-executive-gold transition-colors duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
