const withPWA = (await import('next-pwa')).default({ dest: 'public', disable: process.env.NODE_ENV === 'development' });
export default withPWA({ reactStrictMode: true, experimental: { optimizePackageImports: ['lucide-react','recharts'] } });
