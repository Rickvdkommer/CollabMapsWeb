/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'collabmaps.com' }],
        destination: 'https://www.collabmaps.com/:path*',
        permanent: true,
      },
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },
  async rewrites() {
    return [
      {
        source: '/free-access/:path*',
        destination: '/free-access', // Rewrite to free-access
      },
    ];
  },
};

module.exports = nextConfig;
