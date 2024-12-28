/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Journy-travelplanner-Frontend/' : '',
  basePath: isProd ? '/Journy-travelplanner-Frontend' : '',
  output: 'export'
};

export default nextConfig;
