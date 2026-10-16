/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
    ],
  },
  async redirects() {
    return [
      // Legacy single-page site had no locale prefix.
      { source: '/index.html', destination: '/ua', permanent: true },
    ];
  },
};

export default nextConfig;
