/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'http://homologacao3.azapfy.com.br/api/ps/metahumans',
      'cdn.jsdelivr.net',
      `${process.env.VERCEL_URL}`,
    ]
  },
}

module.exports = nextConfig
