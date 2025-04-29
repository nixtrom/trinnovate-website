/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/trinnovate-website/',
  images: {
    domains: ["assets.aceternity.com"], // Add the domain you want to allow here
  },
};

export default nextConfig;
