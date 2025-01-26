/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

// Conditional configuration based on environment
if (process.env.STATIC_EXPORT) {
  nextConfig.output = 'export';
  // Remove middleware when doing static export
  nextConfig.rewrites = async () => [];
}

module.exports = nextConfig;
