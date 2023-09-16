/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
},
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;