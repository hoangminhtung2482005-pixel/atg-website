/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
