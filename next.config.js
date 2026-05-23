/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive Turbopack pour utiliser Webpack classique
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

module.exports = nextConfig;
