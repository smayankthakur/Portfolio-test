'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-executive-slate/50 border border-executive-border/50 hover:border-executive-gold/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    opacity: 1
                }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <Moon className="w-5 h-5 text-executive-gold" />
                ) : (
                    <Sun className="w-5 h-5 text-executive-gold" />
                )}
            </motion.div>
        </motion.button>
    );
}
