import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
export const metadata: Metadata = { title: 'Chartix — Indian Railway Chart Intelligence', description: 'Railway chart analytics, coach layouts, occupancy and journey intelligence.', manifest: '/manifest.json', icons: [{ rel: 'icon', url: '/icon.svg' }] };
export const viewport: Viewport = { themeColor: '#005BAC', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body><Providers><Navbar />{children}</Providers></body></html>; }
