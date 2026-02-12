'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LinkedIn, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { founderProfile, socialLinks, navigation, contact } from '@/lib/content';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-executive-navy border-t border-executive-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-executive-gold to-executive-goldDim flex items-center justify-center">
                                <span className="text-executive-black font-display font-semibold text-lg">MT</span>
                            </div>
                            <span className="font-display text-lg font-medium text-executive-white">
                                Mayank Thakur
                            </span>
                        </Link>
                        <p className="text-executive-muted text-sm leading-relaxed mb-6">
                            {founderProfile.tagline}
                        </p>
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded-lg bg-executive-slate/50 border border-executive-border/50 hover:border-executive-gold/50 transition-all duration-300"
                                    aria-label={social.platform}
                                >
                                    {social.icon === 'linkedin' && <LinkedIn className="w-4 h-4 text-executive-light" />}
                                    {social.icon === 'twitter' && <Twitter className="w-4 h-4 text-executive-light" />}
                                    {social.icon === 'email' && <Mail className="w-4 h-4 text-executive-light" />}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-executive-white font-medium mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-executive-muted hover:text-executive-gold text-sm transition-colors duration-300 flex items-center space-x-2"
                                    >
                                        <ArrowUpRight className="w-3 h-3" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ventures */}
                    <div>
                        <h4 className="text-executive-white font-medium mb-4">Credentials</h4>
                        <ul className="space-y-3">
                            {founderProfile.credentials.map((cred) => (
                                <li key={cred.label}>
                                    <span className="text-executive-muted text-sm">
                                        {cred.label}: {cred.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-executive-white font-medium mb-4">Get in Touch</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-executive-muted hover:text-executive-gold text-sm transition-colors duration-300"
                                >
                                    {contact.email}
                                </a>
                            </li>
                            <li>
                                <span className="text-executive-muted text-sm">
                                    {contact.location}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-executive-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-executive-muted text-sm">
                        © {currentYear} Mayank Thakur. All rights reserved.
                    </p>
                    <p className="text-executive-muted text-sm">
                        Built with intention. Designed for impact.
                    </p>
                </div>
            </div>
        </footer>
    );
}
