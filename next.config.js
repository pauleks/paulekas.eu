/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/music',
        destination: 'https://www.last.fm/user/ghostwolfy',
        permanent: true,
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: "/captionitjerma/:slug",
        destination: "/captionitjerma/:slug.html",
      }
    ]
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
