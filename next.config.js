/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    INFURA_PROVIDER_URL: process.env.INFURA_PROVIDER_URL,
  },
};

module.exports = nextConfig;
