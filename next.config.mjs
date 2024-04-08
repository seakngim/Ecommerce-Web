/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // domains: ['store.istad.co'],
    remotePatterns: [
      {
        hostname: 'store.istad.co',
      },
      {
        hostname: 'istad.co',
      },
      {
        hostname: 'fakestoreapi.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
};

export default nextConfig;
