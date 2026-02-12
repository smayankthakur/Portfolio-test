'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { contact } from '@/lib/content';
import { Mail, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
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
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-executive-muted text-lg"
                    >
                        Whether you're looking to establish a strategic digital presence, architect enterprise systems,
                        or integrate conscious decision-making frameworks, let's explore the possibilities.
                    </motion.p>
                </div>
            </Section>

            {/* Contact Options */}
            <Section background="dark" className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {/* Email */}
                        <motion.a
                            href={`mailto:${contact.email}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="glass-card p-6 hover-lift group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center mb-4 group-hover:bg-executive-gold/20 transition-colors duration-300">
                                <Mail className="w-6 h-6 text-executive-gold" />
                            </div>
                            <h3 className="text-executive-white font-medium text-lg mb-2">Email</h3>
                            <p className="text-executive-muted text-sm">{contact.email}</p>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="glass-card p-6 hover-lift group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center mb-4 group-hover:bg-executive-gold/20 transition-colors duration-300">
                                <Linkedin className="w-6 h-6 text-executive-gold" />
                            </div>
                            <h3 className="text-executive-white font-medium text-lg mb-2">LinkedIn</h3>
                            <p className="text-executive-muted text-sm flex items-center gap-2">
                                Connect professionally
                                <ArrowUpRight className="w-3 h-3" />
                            </p>
                        </motion.a>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="glass-card p-6 hover-lift"
                        >
                            <div className="w-12 h-12 rounded-lg bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-executive-gold" />
                            </div>
                            <h3 className="text-executive-white font-medium text-lg mb-2">Location</h3>
                            <p className="text-executive-muted text-sm">{contact.location}</p>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 lg:p-12"
                    >
                        <h2 className="heading-md text-executive-white mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-executive-muted text-sm mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-executive-slate/50 border border-executive-border/50 rounded-lg text-executive-white placeholder-executive-muted/50 focus:border-executive-gold/50 focus:outline-none transition-colors duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-executive-muted text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-executive-slate/50 border border-executive-border/50 rounded-lg text-executive-white placeholder-executive-muted/50 focus:border-executive-gold/50 focus:outline-none transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-executive-muted text-sm mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-executive-slate/50 border border-executive-border/50 rounded-lg text-executive-white placeholder-executive-muted/50 focus:border-executive-gold/50 focus:outline-none transition-colors duration-300"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-executive-muted text-sm mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-executive-slate/50 border border-executive-border/50 rounded-lg text-executive-white placeholder-executive-muted/50 focus:border-executive-gold/50 focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project or inquiry..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="executive-btn executive-btn-primary"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
