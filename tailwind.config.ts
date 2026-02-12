import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Executive palette
                executive: {
                    black: '#0a0a0f',
                    navy: '#0d1117',
                    charcoal: '#161b22',
                    slate: '#21262d',
                    border: '#30363d',
                    muted: '#8b949e',
                    light: '#c9d1d9',
                    white: '#f0f6fc',
                    gold: '#d4af37',
                    goldLight: '#f4d03f',
                    goldDim: '#c5a028',
                },
                accent: {
                    primary: '#d4af37',
                    secondary: '#1e3a5f',
                    tertiary: '#0d7377',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' },
                    '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            },
        },
    },
    plugins: [],
}
export default config
