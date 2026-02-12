import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const viewport: Viewport = {
    themeColor: '#0a0a0f',
};

export const metadata: Metadata = {
    title: {
        default: 'Mayank Thakur | Founder & Systems Architect',
        template: '%s | Mayank Thakur',
    },
    description: 'Building Multi-Layered Operating Systems for Visionary Enterprises. Founder of Sitelytc & Kritviya, Architect of Vedic CEO OS.',
    keywords: ['founder', 'systems architect', 'CEO', 'entrepreneur', 'Vedic intelligence', 'enterprise software', 'Trinity OS'],
    authors: [{ name: 'Mayank Thakur' }],
    creator: 'Mayank Thakur',
    publisher: 'Mayank Thakur',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mayankthakur.com',
        siteName: 'Mayank Thakur',
        title: 'Mayank Thakur | Founder & Systems Architect',
        description: 'Building Multi-Layered Operating Systems for Visionary Enterprises.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mayank Thakur - Founder & Systems Architect',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mayank Thakur | Founder & Systems Architect',
        description: 'Building Multi-Layered Operating Systems for Visionary Enterprises.',
        images: ['/og-image.jpg'],
        creator: '@mayankthakur',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
