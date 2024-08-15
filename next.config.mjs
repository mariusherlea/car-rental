/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["eu-central-1-shared-euc1-02.graphassets.com"],
  },
};

export default nextConfig;
